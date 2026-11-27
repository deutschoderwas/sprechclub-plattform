# dl <url> <name>
curl -s -o /dev/shm/x.png "$1" && python3 -c "
from PIL import Image;im=Image.open('/dev/shm/x.png').convert('RGB');im.thumbnail((1000,1000));im.save('bilder/landeskunde/$2.webp','WEBP',quality=78);print('$2',im.size)"
