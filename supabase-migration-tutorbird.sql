-- ============================================================
-- TutorBird-Migration: 71 Schüler + Guthaben (STILL, ohne Mails)
-- Stand: 10.06.2026. Einmal im Supabase SQL-Editor ausführen.
-- Prinzip: Staging-Tabelle pending_students. Beim ersten Login
-- (Magic-Link) übernimmt der Trigger Name + Guthaben automatisch.
-- Bereits registrierte Schüler werden sofort verbucht.
-- Guthaben = TutorBird "Total" (Available + für gebuchte Stunden
-- reservierte Credits). Julia Kar (eigenes Testkonto) ausgenommen.
-- ============================================================

-- 1) Staging-Tabelle (nur Admin/Service-Role, keine Policies)
create table if not exists public.pending_students (
  email          text primary key,
  name           text,
  phone          text,
  credits        integer not null default 0,
  credits_booked integer not null default 0,
  source         text default 'tutorbird',
  migrated_at    timestamptz,
  created_at     timestamptz default now()
);
alter table public.pending_students enable row level security;

-- 2) Schülerdaten (email, name, telefon, credits_gesamt, davon_gebucht)
insert into public.pending_students (email, name, phone, credits, credits_booked) values
('oaigul81@gmail.com','Aigul Omarova','015229183326',2,1),
('iliovski@web.de','Aleksandar Iliovski','017632209879',6,2),
('alice28.09@interia.pl','Alicya Studnik','+48504083262',3,1),
('alina.tonkopriadko@gmail.com','Alina Tonkopriadko','15167248628',8,2),
('anniebarangan@yahoo.com','Anastacia Italia','',5,0),
('annayuriy@web.de','Anna Khokhotva-Mordashko','+491796070762',6,0),
('anna.elster.at@gmail.com','Anna Martynenko','+420773170700',20,0),
('annaswisspol@gmail.com','Anna Rozlazly','+48 735 000 182',22,0),
('berrak.inci1@gmail.com','Berrak Inci','',3,0),
('bettinaneill@gmail.com','Bettina Neill','01771835996',3,0),
('tciubuc79@gmail.com','Birca Tamara','0762385464',10,0),
('borana89@hotmail.com','Borana Ferraj','+491726810948',1,0),
('chiarasenatore2@gmail.com','Chiara Senatore','+393477153746',1,0),
('dashadlinnaya@gmail.com','Daria Dlinna','+491756657429',3,0),
('darya.stebakova@gmail.com','Daria Dubchuk','+4915207846698',4,0),
('dicaxi17@gmail.com','Diana Xiques','+4917611529682',26,1),
('dmitry.kropotov@gmail.com','Dmitry Kropotov','+4917685113163',3,2),
('ekaterinakovalenko1993@gmail.com','Ekaterina Kovalenko','+4915141382942',8,5),
('e-worster@web.de','Elena Worster','+4917655440885',9,1),
('karadenizeminee09@gmail.com','Emine Karadeniz','1636326202',0,0),
('esrakeserdr@gmail.com','Esra Keser','04915208278393',5,1),
('evaggpe@gmail.com','Evangelia Pertetzoglou','+30 695 537 2285',14,2),
('knia86@yahoo.gr','Fevronia Koutrosiou','015258730173',2,2),
('aggün_figen27@hotmail.com','Figen Aggün','+4306603825991',3,0),
('simoniflorjanda@gmail.com','Florjanda Simoni','004367764875983',27,1),
('hanane.a1024@gmail.com','Hanane Agnaou','+212610382203',5,1),
('lillyanna1611@gmail.com','Hanna Ivanova','+380994949664',4,4),
('ermolaeva.brixen@gmail.com','Irina Ermolaeva','',25,5),
('ironsilk86@gmail.com','Irina Hrynets','+41765255779',6,0),
('irinashnurenko4568@gmail.com','Iryna Shnurenko','01756459665',17,0),
('gasiakova@gmail.com','Jana Noskovičová','+421949681160',3,1),
('jel.iljina@gmail.com','Jelena Iljina','017647311039',1,0),
('juliak.cap@gmail.com','Julia Koltsova','017682276124',3,0),
('justikorbeci19@gmail.com','Justina Korbeci','',1,0),
('cetinbey38@outlook.de','Kadirye Yesilyurt','06506904775',44,1),
('blokikata74@gmail.com','Katalin Arvaine Takacs','',9,1),
('katerinalukesova81@gmail.com','Kateřina Lukešová','17663330578',3,0),
('hetavakoli68@gmail.com','Kim Tavakoli','+49 160 95811015',23,1),
('altarialeo@gmail.com','Leo Ho Yiu Sung','+852 6694 2822',12,0),
('brek.lilia@gmail.com','Lilia Brek','015129506988',7,4),
('manjiri.90@gmail.com','Manjiri Kumbhar','017670257043',0,0),
('avermashka@gmail.com','Maria Averkieva','015125812477',4,0),
('dr.kep.urlaub@protonmail.ch','Maria K','0',3,0),
('pozdniakova.m.vl@gmail.com','Maria Pozdniakova','+380932595002',4,1),
('csigaaa@gmail.com','Mariann Szabo','',14,0),
('marina.gasic@gmail.com','Marina Gasic','004368120500338',2,0),
('hakimimaryam343@gmail.com','Maryam Hakimi','+491775115459',6,1),
('riahi.ma82@gmail.com','Maryam Riahi','015237988451',9,2),
('nadejda.skkl@gmail.com','Nadiia Skliar','+380978958502',21,4),
('nplotceva769@gmail.com','Natalia Plottceva','+491792033393',4,0),
('natalia.shurygina@gmail.com','Natalia Shurygina','017647687420',25,5),
('mazlooman1988@gmail.com','Nazanin Mazlooman','015566334307',9,0),
('kulikovaolga175@gmail.com','Olga Kulikova','+491632314843',18,1),
('hoanganh19198@gmail.com','Pham Hoang Anh Nguyen','01744609225',21,0),
('pinarsasoglu@gmail.com','Pinar Sasoglu','+41 79 750 12 05',17,3),
('khurilenko92@gmail.com','Polina Khurylenko','+4915124006693',18,0),
('rafaelpolo1991@gmail.com','Rafael Polo','+4915751431011',23,1),
('s.smeraldi@yahoo.it','Rosaria Smeraldi','+393519566990',21,0),
('rubend1493@gmail.com','Rubén D. González','+5491159055428',1,1),
('golkarsamira.1990@gmail.com','Samira Golkar','01639100924',12,1),
('sinemsumer1@gmail.com','Sinem Sümer','+49 1515 8327096',3,0),
('stewofu@gmail.com','Stella Wong-Fuchs','15156954805',5,1),
('trofimova_sveta@inbox.ru','Svetlana Trofimova','6603792967',21,2),
('pichuzhkina.svetlana2017@gmail.com','Svitlana Pichuyhkina','015116477612',5,5),
('tatiana.karpenko.fw@gmail.com','Tatiana Karpenko','+491628294221',28,5),
('utschne@gmail.com','Tatiana Schneider','+34654455300',2,0),
('tatyanailyenko@gmail.com','Tetiana Ilienko','',12,2),
('vitalii.vershh@gmail.com','Vitalii Vershynin','+4917661485112',23,0),
('skomorokh81@gmail.com','Volha Taranda','015776365557',7,0),
('wanyu.yu1024@gmail.com','Wan-Yu Damm','017673747731',15,2),
('wilmer.alex.calle@gmail.com','Wilmer Calle','',50,2)
on conflict (email) do update set
  name = excluded.name, phone = excluded.phone,
  credits = excluded.credits, credits_booked = excluded.credits_booked;

-- 3) Trigger erweitern: beim ersten Login Guthaben automatisch übernehmen
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare v_p public.pending_students%rowtype;
begin
  select * into v_p from public.pending_students
   where lower(email) = lower(new.email) and migrated_at is null;
  insert into public.profiles (id, email, name, credits)
  values (new.id, new.email,
          coalesce(nullif(new.raw_user_meta_data->>'name',''), v_p.name, ''),
          coalesce(v_p.credits, 0));
  if v_p.email is not null then
    if v_p.credits > 0 then
      insert into public.credit_log (user_id, change, reason)
      values (new.id, v_p.credits, 'migration:tutorbird');
    end if;
    update public.pending_students set migrated_at = now() where email = v_p.email;
  end if;
  return new;
end; $$;

-- 4) Bereits registrierte Schüler sofort verbuchen
do $$
declare r record;
begin
  for r in select ps.email, ps.name, ps.credits, p.id as profile_id
           from public.pending_students ps
           join public.profiles p on lower(p.email) = lower(ps.email)
           where ps.migrated_at is null
  loop
    update public.profiles
       set credits = credits + r.credits,
           name = coalesce(nullif(name,''), r.name)
     where id = r.profile_id;
    if r.credits > 0 then
      insert into public.credit_log (user_id, change, reason)
      values (r.profile_id, r.credits, 'migration:tutorbird');
    end if;
    update public.pending_students set migrated_at = now() where email = r.email;
  end loop;
end $$;

-- 5) Kontrolle
select count(*) as wartend from public.pending_students where migrated_at is null;
select count(*) as sofort_verbucht from public.pending_students where migrated_at is not null;
select sum(credits) as guthaben_summe from public.pending_students;
