#!/usr/bin/env bash
# =====================================================================
#  deutschoderwas club – Jitsi-Server Installation (Ubuntu 24.04)
#  EINMAL als root auf dem Hetzner-Server ausführen:
#    curl -fsSL https://raw.githubusercontent.com/deutschoderwas/sprechclub-plattform/main/jitsi-install.sh | bash
# =====================================================================
set -e

DOMAIN="meet.deutschoderwas-club.de"     # Subdomain (zeigt auf den Server)
EMAIL="deutschoderwas@gmail.com"          # für das HTTPS-Zertifikat

export DEBIAN_FRONTEND=noninteractive
export NEEDRESTART_MODE=a                  # keine "Dienste neu starten?"-Abfragen

echo ">> 1/6  System aktualisieren"
apt-get update && apt-get -y upgrade

echo ">> 2/6  Hostnamen setzen"
hostnamectl set-hostname "${DOMAIN%%.*}"
grep -q "$DOMAIN" /etc/hosts || echo "127.0.0.1 $DOMAIN ${DOMAIN%%.*}" >> /etc/hosts

echo ">> 3/6  Firewall öffnen (nur nötige Ports)"
apt-get -y install ufw
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 10000/udp
ufw allow 3478/udp
ufw allow 5349/tcp
yes | ufw enable

echo ">> 4/6  Jitsi-Paketquellen einrichten"
apt-get -y install gnupg2 nginx-full apt-transport-https curl
curl -sL https://download.jitsi.org/jitsi-key.gpg.key | gpg --dearmor -o /usr/share/keyrings/jitsi-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/jitsi-keyring.gpg] https://download.jitsi.org stable/" > /etc/apt/sources.list.d/jitsi-stable.list
apt-get update

echo ">> 5/6  Jitsi installieren (automatisch, ohne Rückfragen)"
debconf-set-selections <<< "jitsi-videobridge2 jitsi-videobridge/jvb-hostname string $DOMAIN"
debconf-set-selections <<< "jitsi-meet-web-config jitsi-meet/jvb-hostname string $DOMAIN"
debconf-set-selections <<< "jitsi-meet-web-config jitsi-meet/cert-choice select Let's Encrypt certificates"
apt-get -y install jitsi-meet

echo ">> 6/6  HTTPS-Zertifikat (Let's Encrypt)"
echo "$EMAIL" | /usr/share/jitsi-meet/scripts/install-letsencrypt-cert.sh

echo ""
echo "============================================================"
echo "  FERTIG! Test:  https://$DOMAIN  im Browser öffnen."
echo "  Sag Claude Bescheid – dann kommt die Absicherung (nur"
echo "  der deutschoderwas club darf Räume öffnen) + Einbau."
echo "============================================================"
