/** Shared children's songs — lang: SK | CZ | EN (from lyrics) */
const PLACE = new Set(['car', 'indoor', 'outdoors'])

function cleanSongTags(items) {
  return items.map((item) => ({
    ...item,
    tags: (item.tags || []).filter((t) => !PLACE.has(t)),
  }))
}

const rawSongs = [
  {
    id: 'song-sk-10-green-bottles',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: '10 green bottles',
    description: 'Ten green bottles Hanging on the wall',
    materials: [],
    steps: [],
    lyrics: `Ten green bottles
Hanging on the wall
Ten green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be nine green bottles
Hanging on the wall

Nine green bottles
Hanging on the wall
Nine green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be eight green bottles
Hanging on the wall

Eight green bottles
Hanging on the wall
Eight green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be seven green bottles
Hanging on the wall

Seven green bottles
Hanging on the wall
Seven green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be six green bottles
Hanging on the wall

Six green bottles
Hanging on the wall
Six green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be five green bottles
Hanging on the wall

Five green bottles
Hanging on the wall
Five green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be four green bottles
Hanging on the wall

Four green bottles
Hanging on the wall
Four green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be three green bottles
Hanging on the wall

Three green bottles
Hanging on the wall
Three green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be two green bottles
Hanging on the wall

Two green bottles
Hanging on the wall
Two green bottles
Hanging on the wall
And if one green bottle
Should accidentally fall
There'll be one green bottles
Hanging on the wall

One green bottle
Hanging on the wall
One green bottle
Hanging on the wall
If that one green bottle
Should accidentally fall
There'll be no green bottles
Hanging on the wall`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/10-green-bottles/',
  },
  {
    id: 'song-sk-10-20-30',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: '10-20-30',
    description: '10-20-30 začal gašpar kričať',
    materials: [],
    steps: [],
    lyrics: `10-20-30
začal gašpar kričať
že ho brucho bolí
zjedol kilo soli.

En ten tíčky dva špendlíčky
vyleteli z električky.
Baba sa ich zľakla na kolená kľakla
en ten ten a ty vyleť z kola ven.

Eniki beiniki kliki bé
ábr fábr dominé
elce pelce do pekelce
ty musíš ísť von.

En ten tulipán
na moste je starý pán
a pod mostom ryba s chvostom
chytajte ju bude hosťom.

Aka fuka funda luka
funda káva keven duka.
Ak fuk funda luk
funda káva keven duk.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/10-20-30/',
  },
  {
    id: 'song-sk-ach-synku-synku',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ach synku, synku',
    description: 'Ach synku, synku, doma-li jsi.',
    materials: [],
    steps: [],
    lyrics: `Ach synku, synku,
doma-li jsi.
Ach synku, synku
doma-li jsi.
Tatíček se ptal,
oral-li jsi.
Tatíček se ptal,
oral-li jsi.
Oral jsem, oral,
ale málo.
Oral jsem, oral,
ale málo.
Kolečko se mi,
polámalo.
Kolečko se mi,
polámalo.
Když se ti zlámalo,
dej ho spravit.
Když se ti zlámalo,
dej ho spravit.
Nauč se synečku,
hospodařit.
Nauč se synečku,
hospodařit.

Ach synku, synku,
doma-li jsi.
Ach synku, synku
doma-li jsi.
Tatíček se ptal,
oral-li jsi.
Tatíček se ptal,
oral-li jsi.
Oral jsem, oral,
ale málo.
Oral jsem, oral,
ale málo.
Kolečko se mi,
polámalo.
Kolečko se mi,
polámalo.
Když se ti zlámalo,
dej ho spravit.
Když se ti zlámalo,
dej ho spravit.
Nauč se synečku,
hospodařit.
Nauč se synečku,
hospodařit.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ach-synku-synku-1/',
  },
  {
    id: 'song-sk-afrika-cierna',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Afrika čierna',
    description: 'Afrika čierna, veľmi čierna ... (slovensky) Afrika černá, moc černá ... (česky)',
    materials: [],
    steps: [],
    lyrics: `Afrika čierna, veľmi čierna ... (slovensky)
Afrika černá, moc černá ... (česky)
Afrika čornaja, baľšo čornaja ... (rusky)
Afrika čarná, bardzo čarná ... (poľsky)
Afrika fekete, naďom fekete ... (maďarsky)
Afrika švarce, file švarce ... (nemecky)
Afrika black and white, very black and white ... (anglicky)
Afrika nera, molta nera ... (taliansky)
Afrika ňaňaňa, ňuňo ňaňaňa ... (japonsky)
Afrika huhuhu, haha huhuhu ... (africky)
Afrika kakao, same kakao ... (záhorácky)
Afrika pingpong, pingpong ... (čínsky)`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/afrika-cierna/',
  },
  {
    id: 'song-sk-ako-jezkovia-oberali-hrusky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ako ježkovia oberali hrušky',
    description: 'Kvapi, kvapi, kvapi, kvapi, dáždiček nás neprekvapí.',
    materials: [],
    steps: [],
    lyrics: `Kvapi, kvapi, kvapi, kvapi,
dáždiček nás neprekvapí.
nech si prší dáždiček,
máme z dosky dáždniček.
Žblnky, žblnky, žblnky, žblnky,
nezamáčajú nás vlnky.
Kráčame si bosky, bosky,
po lavičke z dosky, z dosky.
Hupi, hupi, hupi, hupi,
my ježkovia nie sme hlúpi.
naše múdre hlavičky,
hlavičkujú hruštičky.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ako-jezkovia-oberali-hrusky/',
  },
  {
    id: 'song-sk-aky-je-to-svit',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Aký je to svit',
    description: 'Aký je to svit, čože to má byť v Betléme? Hore sa majme, hneď povstávajme zo zeme!',
    materials: [],
    steps: [],
    lyrics: `Aký je to svit, čože to má byť v Betléme?
Hore sa majme, hneď povstávajme zo zeme!
Ej, ej pastieri, aké to chýry, aký hlas?
Či sa mi sníva, či anjel spieva a zve nás?

No nemeškajme, hore sa majme je iste
niečo nového, neslýchaného pri meste.
Poďme hneď k nemu, k mestu Betlému, vstávajme!
A vrúcne jeho, narodeného, vítajme.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/aky-je-to-svit-1/',
  },
  {
    id: 'song-sk-aleluja-sabalaba-labambam',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Aleluja šabalaba labambam',
    description: 'Aleluja šabalaba labambam /3x/ amen amen',
    materials: [],
    steps: [],
    lyrics: `Aleluja šabalaba labambam /3x/
amen amen
Ježiš Kristu zomrel a zmŕtvych vstal. /3x/
Svätého Ducha nám on dal. /3x/
Všetci sme tu jedna rodina. /3x/`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/aleluja-sabalaba-labambam/',
  },
  {
    id: 'song-sk-alica-v-krajine-zazrakov',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Alica v krajine zázrakov',
    description: 'Stačí veľmi chcieť, stačí mať zopár snov a môžeš prežiť príbeh v krajine zázrakov.',
    materials: [],
    steps: [],
    lyrics: `Stačí veľmi chcieť, stačí mať zopár snov
a môžeš prežiť príbeh v krajine zázrakov.
Tam Alica ťa čaká, no tak poď tak vykroč s ňou!

Je to tvoja krajina zázrakov, tvoja krajina zázrakov.
Jedinú radu ti teraz dám. Uuuh.
Chráň si svoju krajinu zázrakov, svoju krajinu zázrakov,
Nikdy, nikdy v nej nie si sám. Uuuh.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/alica-v-krajine-zazrakov/',
  },
  {
    id: 'song-sk-all-i-want-for-christmas-is-you',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'All I want for Christmas  is you',
    description: 'I don\'t want a lot for Christmas There\'s just one thing I need',
    materials: [],
    steps: [],
    lyrics: `I don't want a lot for Christmas
There's just one thing I need
I don't care about the presents
Underneath the Christmas tree
I just want you for my own
More than you could ever know
Make my wish come true
All I want for Christmas is...
You

I don't want a lot for Christmas
There's just one thing I need
I don't care about the presents
Underneath the Christmas tree
I don't need to hang my stocking
There upon the fireplace
Santa Claus won't make me happy
With a toy on Christmas day
I just want you for my own
More than you could ever know
Make my wish come true
All I want for Christmas is you
You baby

I won't ask for much this Christmas
I don't even wish for snow
I'm just gonna keep on waiting
Underneath the mistletoe
I won't make a list and send it
To the North Pole for Saint Nick
I won't even stay awake to
Hear those magic reindeers click
'Cause I just want you here tonight
Holding on to me so tight
What more can I do
Baby all I want for Christmas is you
Ooh baby
All the lights are shining
So brightly everywhere
And the sound of children's
Laughter fills the air
And everyone is singing
I hear those sleigh bells ringing
Santa won't you bring me the one I really need
Won't you please bring my baby to me...

Oh I don't want a lot for Christmas
This is all I'm asking for
I just want to see my baby
Standing right outside my door
Oh I just want you for my own
More than you could ever know
Make my wish come true
Baby all I want for Christmas is...
You

All I want for Christmas is you... babyInterpret: Mariah  Carey`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/all-i-want-for-christmas-is-you/',
  },
  {
    id: 'song-sk-amerika',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Amerika',
    description: 'Straší ti vo veži milá Erika, jedine čo rada máš je Amerika.',
    materials: [],
    steps: [],
    lyrics: `Straší ti vo veži milá Erika,
jedine čo rada máš je Amerika.

Erika chuť na halušky nikdy nemáva,
iba koláč s hamburgerom jej prežiť pomáha.

Ona svoju Ameriku na Slovensku ma,
stále nosí iba džiny made in USA.

Smolu mate ak ste iný,
tak zverený jej.
Ona svoju Ameriku na Slovensku maaa
Straší ti vo veži milá Erika, jedine čo rada maa je Amerika!
Straší ti vo veži milá Erika, jedine čo rada maa je Amerika!

Počúva len Desting Boys a tetu Madonnu,
pri slovenských pesničkách sa chytá za hlavu!

Ona svoju Ameriku na Slovensku maaa
Straší ti vo veži milá Erika, jedine čo rada maa je Amerika!
Straší ti vo veži milá Erika, jedine čo rada maa je Amerika!

Až vyrastie bude fajčiť len Ameriki,
vydá sa za Jonna Sjorku žiadne caviky! Bude svoju Ameriku v Amerike mať!
Straší ti vo veži milá Erika, jedine čo teraz máš je Amerika!
Straší ti vo veži milá Erika, jedine čo rada maa je Amerika!
Straší ti vo veži milá Erika, jedine čo rada maa je Amerika!
Straší ti vo veži drahá Erika, jedine čo rada maa je Amerika!
Je Amerika! Je Amerika! Ahaa!Interpret: Petra Jurinová`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/amerika/',
  },
  {
    id: 'song-sk-ani-ani-anicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ani-Ani-Anička',
    description: 'Ani-Ani-Anička červená biela ružička.',
    materials: [],
    steps: [],
    lyrics: `Ani-Ani-Anička
červená biela ružička.
Umývaj si líčka
ako dve jabĺčka.

Učeš si hlavičku
ako makovičku.
Obleč si sukničku
a pozdrav mamičku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ani-ani-anicka-2/',
  },
  {
    id: 'song-sk-anicka-dusicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Anička, dušička',
    description: 'Anička, dušička, kde si bola, že si si čižmičky zarosila?',
    materials: [],
    steps: [],
    lyrics: `Anička, dušička, kde si bola,
že si si čižmičky zarosila?
Bola som v hájičku,
žala som trávičku,
duša moja, duša moja.

A ja som po tri dni trávu kosil,
ja som si čižmičky nezarosil.
A ja som hrabala,
teba som čakala,
duša moja, duša moja.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/anicka-dusicka-1/',
  },
  {
    id: 'song-sk-anjelicku-moj-straznicku',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Anjeličku môj strážničku',
    description: 'Anjeličku môj strážničku, opatruj moju dušičku,',
    materials: [],
    steps: [],
    lyrics: `Anjeličku môj strážničku,
opatruj moju dušičku,
ako vo dne, tak i v noci,
buď mi stále na pomoci.

Anjel boží, strážca môj,
prosím ťa, vždy pri mne stoj,
pomocnú mi ruku daj,
vo všetkom mi pomáhaj.

Aby som ti v každej chvíli
viedol život bohumilý
a tak tebou chránený
bol raz v nebi spasený.
Amen.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/anjelicku-moj-straznicku/',
  },
  {
    id: 'song-sk-bambulka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bambuľka',
    description: 'To ste nepočuli ešte, čo sa stalo v našom meste. Dedo Jozef dostal balík veľký ako svet.',
    materials: [],
    steps: [],
    lyrics: `To ste nepočuli ešte, čo sa stalo v našom meste.
Dedo Jozef dostal balík veľký ako svet.
Kto ho poslal do dnes nevie, malo to byť prekvapenie..
A čo bolo ďalej, a čo bolo ďalej to Vám rozpovieme hneď!

Prišla stuhou previazaná škatuľka.
A v nej bola bola bola bola..
A v nej bola bola bola bola..
Bambuľka, Bambuľka!Interpret: Monika Haasová`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bambulka/',
  },
  {
    id: 'song-sk-belize-mi-beli',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Beliže mi beli',
    description: 'Beliže mi beli, môj anjelik biely, že mi neuletíš do tej čiernej zemi.',
    materials: [],
    steps: [],
    lyrics: `Beliže mi beli, môj anjelik biely,
že mi neuletíš do tej čiernej zemi.
Spiže mi, spiže mi, dieťatko dušička,
veď tu nad kolískou bdie tvoja mamička.

Snívaj si svoj sníček a keď svitne dníček,
pôjdem ta do kríka, chytím ti slávika.
Keď sa začne stmievať, ten ti bude spievať
ponad všetky ploty svoje pekné nôty.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/belize-mi-beli/',
  },
  {
    id: 'song-sk-beruska',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'beruška',
    description: 'Beruško půjč mi jednu tečku, třeba tu co máš na zadečku,',
    materials: [],
    steps: [],
    lyrics: `Beruško půjč mi jednu tečku,
třeba tu co máš na zadečku,
musím jí napsat za větou,
ať se mi slova nepletou.

Tulipán a tulipaní,
celý den se sobě klaní,
až se diví okolí,
že je záda nebolí.

Beruško půjč mi jednu tečku,
třeba tu co máš na zadečku,
musím jí napsat za větou,
ať se mi slova nepletou.

Sedí bubák na dubu,
který v lese stojí,
straší děti bububu,
a pak se sám bojí.

Beruško půjč mi jednu tečku,
třeba tu co máš na zadečku,
musím jí napsat za větou,
ať se mi slova nepletou.

 Jezevčíci ti si hoví,
vždyť jsou to psi salámoví,
podívej se mámo sama,
je to salám s nožičkama.

Beruško půjč mi jednu tečku,
třeba tu co máš na zadečku,
musím jí napsat za větou,
ať se mi slova nepletou.

Navštívíme dneska spolu,
naši aprílovou školu,
kde žáci s poškoláky v čele,
zkouší pana učitele,
když domů pětku přinese si,
syn vytahá ho za pačesy,
jestliže ovšem nemá pleš,
všechno je pravda žádná lež!!!

Beruško půjč mi jednu tečku,
třeba tu co máš na zadečku,
musím jí napsat za větou,
ať se mi slova nepletou.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/beruska/',
  },
  {
    id: 'song-sk-bobi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bobi',
    description: 'Náš malý pes Bobi, stále zle mi robí, vyskočil na regal a zožral kocku z lega.',
    materials: [],
    steps: [],
    lyrics: `Náš malý pes Bobi, stále zle mi robí,
vyskočil na regal a zožral kocku z lega.
Náš malý pes Bobi, stále zle mi robí,
zobral kocku čo odpadla z legového lietadla.

Dostal nažrať Bobi k tomu liter vody
a preháňadlo do žrádla aby kocka vypadla.
Vonku za ním chodím celých osem hodín,
všade za ním behám, že vráť mi kocku z lega.

®: Potlač Bobi lebo chcem naspäť to lego,
potlač Bobi poriadne nech to z teba vypadne.
Potlač Bobi lebo chcem naspäť to lego,
potlač Bobi poriadne nech to z teba vypadne.

Náš malý pes Bobi, stále zle mi robí,
vyskočil na regal a zožral kocku z lega.
Náš malý pes Bobi, stále zle mi robí,
zobral kocku čo odpadla z legového lietadla. Interpret: Martin Madej`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bobi/',
  },
  {
    id: 'song-sk-bocian-a-zabka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bocian a žabka',
    description: 'Chytil bocian žabku a keď ju už mal tancovať s ňou išiel na bocianí bál.',
    materials: [],
    steps: [],
    lyrics: `Chytil bocian žabku a keď ju už mal
tancovať s ňou išiel na bocianí bál.
Klipi klapi klipi klapi kvaki kvaki kvak
možnože to bolo takto možno naopak.

Tancovala žabka tri dni s bocianom
z muziky mu ušla až dnes nad ránom.
Klipi klapi klipi klapi kvaki kvaki kvak
možnože to bolo takto možno naopak.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bocian-a-zabka/',
  },
  {
    id: 'song-sk-boh-lubi-ma',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Boh ľúbi ma',
    description: 'Boh ľúbi ma takého aký som,',
    materials: [],
    steps: [],
    lyrics: `Boh ľúbi ma
takého aký som,
raduje sa s každým mojím gestom
aleluja, Božia radosť ma rozpína
fli flaj džulala /3x/`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/boh-lubi-ma/',
  },
  {
    id: 'song-sk-boh-ta-miluje-a-ja-ta-milujem',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Boh ťa miluje a ja ťa milujem',
    description: 'Boh ťa miluje a ja ťa milujem',
    materials: [],
    steps: [],
    lyrics: `Boh ťa miluje
a ja ťa milujem
a tak by to malo byť.

Mal by si byť šťastný
aj ja by som mal byť šťastný
a tak by to malo byť.

Pretože Boh ťa miluje
aj ja ťa milujem
a tak by to malo byť.

Mohol by si byť smutný
aj ja by som mohol byť smutný
ale tak by to nemalo byť.

Máme sa mať radi ako bratia a sestry
a tak by to malo byť.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/boh-ta-miluje-a-ja-ta-milujem/',
  },
  {
    id: 'song-sk-bol-raz-jeden-maly-psicek',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Bol raz jeden malý psíček',
    description: 'Bol raz jeden malý psíček, verne chránil babkin domček.',
    materials: [],
    steps: [],
    lyrics: `Bol raz jeden malý psíček,
verne chránil babkin domček.
Ostril ušká jak zajko,
volali ho Zahrajko.

Taký to bol dobrý psíček,
huncútik a nezbedníček,
do kuchyne zaskočil,
kostičku si vyprosil.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bol-raz-jeden-maly-psicek/',
  },
  {
    id: 'song-sk-bol-raz-jeden-zivot',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bol raz jeden život',
    description: 'Táto veta pravdivá je, život skrýva rôzne taje. Rýchlo daj sa k nám, tak daj sa k nám!',
    materials: [],
    steps: [],
    lyrics: `Táto veta pravdivá je, život skrýva rôzne taje.
Rýchlo daj sa k nám, tak daj sa k nám!

Pôjdeme tou cestou lákavou, čo vedie k záhadám,
k tým záhadám, tak nájdi zopár slov!

Nimi môžeš skúmať svet záhad, hľadať obraz a k nemu rám,
život rozpoznávať, s nami poď, daj sa k nám, len k nám!

Táto veta pravdivá je, život skrýva rôzne taje.
Dávno každý vie, každý to vie, život je niečo úžasné.

Pod nohou trávu mám, len trávu mám a siaham ku hviezdam.
Poďme rýchlo skúmať svet záhad, hľadať obraz a k nemu rám,

život rozpoznávať, s nami poď, daj sa k nám, len k nám!

Táto veta pravdivá je, život skrýva rôzne taje.
Rýchlo daj sa k nám, tak daj sa k nám!

Pôjdeme tou cestou lákavou, čo vedie k záhadám.
Uvidíš, že ten život si sááááám.

Táto veta pravdivá je, život skrýva rôzne taje.
Ty sááááám.

Táto veta pravdivá je, život skrýva rôzne taje.
Ty sám.Interpret: Marcela Molnárová`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bol-raz-jeden-zivot/',
  },
  {
    id: 'song-sk-bola-raz-mala-hviezdicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bola raz malá hviezdička',
    description: 'Bola raz malá, malá hviezdička, zviedla ju Mliečna, Mliečna cestička.',
    materials: [],
    steps: [],
    lyrics: `Bola raz malá, malá hviezdička,
zviedla ju Mliečna, Mliečna cestička.
Zvolala: „Zbohom, družice,
vidieť chcem svetov tisíce!

V prvý deň letí, letí do sveta
pýchou sa celá, celá trblieta.
V druhý deň hlávka zmotaná,
v plameňoch horí od rána.

V tretí deň nasmrť, nasmrť znavená
vpadla k nám, ako, ako z kameňa.
Uhli sa hrudy studené
schovali hviezdu do zeme.

Bola raz malá, malá hviezdička,
zviedla ju Mliečna, Mliečna cestička.
Umrela hviezda maličká,
končí sa o nej pesnička.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bola-raz-mala-hviezdicka/',
  },
  {
    id: 'song-sk-bolo-raz-jablcko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bolo raz jabĺčko',
    description: 'Bolo raz jabĺčko krásne, malo líčka červené.',
    materials: [],
    steps: [],
    lyrics: `Bolo raz jabĺčko krásne,
malo líčka červené.
Jeho jasná farba žiari
a mamka daj ho mne.
Keď som zaťala doň zúbky,
pochytil ma veľký strach,
lebo červík vyšiel z hĺbky
a stal si na svoj prach.
Bolo nám to obom trápne,
že má nahryznutý dom.
On sa urazene vztýčil
a vyplazil sa von.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bolo-raz-jablcko/',
  },
  {
    id: 'song-sk-bude-zima-bude-mraz',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Bude zima bude mráz',
    description: 'Bude zima bude mráz kam sa vtáčik, kam schováš?',
    materials: [],
    steps: [],
    lyrics: `Bude zima bude mráz
kam sa vtáčik, kam schováš?
Schovám sa do javora
to je moja komora.

Bude zima bude mráz,
kam sa vtáčik, kam schováš?
Schovám sa do čečiny
to sú moje periny.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/bude-zima-bude-mraz-1/',
  },
  {
    id: 'song-sk-budik-budicek',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Budík, budíček',
    description: 'Lalalala lala la la la, lalalala lala la la la Ja som budík budíček, budiť je môj koníček. Stretol som sa náhodou, ja s takouto príhodou.',
    materials: [],
    steps: [],
    lyrics: `Lalalala lala la la la, lalalala lala la la la
Ja som budík budíček, budiť je môj koníček. Stretol som sa náhodou, ja s takouto príhodou.
Ja som budík budíček, budiť je môj koníček.No keď stíchnem trošíčka, usnú všetky očičká.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/budik-budicek/',
  },
  {
    id: 'song-sk-buvaj-dieta-krasne',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Búvaj dieťa krásne',
    description: 'Búvaj, dieťa, krásne, uložené v jasle.',
    materials: [],
    steps: [],
    lyrics: `Búvaj, dieťa, krásne,
uložené v jasle.
Búvaj, búvaj, pachoľa,
milostivé Jezuľa,
budeme Ťa kolísať,
aby´s mohol dobre spať.

Ježišku náš milý,
aby sa ti snili
veľmi krásne sny.

Drozdy a hrdličky,
chystajte pesničky,
nech sa dieťa poteší
na tom našom salaši,
spev škovránka, slávika,
k tomu pekná muzika.
My budeme s vami
spievať za jasľami,
Synu milému.

Hory ticho buďte,
dieťa nezobuďte,
nech si ono podrieme
na slame a na sene.
Aj vy, milé fialky,
zaváňajte do diaľky.
Zavejte mu vône,
Pánovi na tróne,
ticho sladúčko.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/buvaj-dieta-krasne-1/',
  },
  {
    id: 'song-sk-cas-radosti',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Čas radosti',
    description: 'Čas radosti, veselosti, svetu nastal nyní, porodila Spasiteľa Mária bez viny.',
    materials: [],
    steps: [],
    lyrics: `Čas radosti, veselosti, svetu nastal nyní,
porodila Spasiteľa Mária bez viny.
V jasliach v Betleheme, na slame, na zime.
Leží malé dieťa milé, Pán zeme.

Aké veci ľudia všetci oddávna čakali.
To anjeli dnes veselí nám už zvestovali.
A preto plesajme a Bohu ďakujme.
Pacholiatku nemluvniatku spievajme.

Ďieťa krásne, svetlo jasné, Ježišu náš milý.
Z čistej Panny svetu daný, poklad roztomilý.
Kráľu náš, Pane náš. Skloň sa k nám, jak náš Pán.
S milosťami. s radosťami, prídi sám.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/cas-radosti-1/',
  },
  {
    id: 'song-sk-ceresnicky-ceresne',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Čerešničky, čerešne',
    description: 'Čerešničky, čerešničky, čerešne, vy ste sa mi rozsypali po ceste.',
    materials: [],
    steps: [],
    lyrics: `Čerešničky, čerešničky, čerešne,
vy ste sa mi rozsypali po ceste.
Kto vás nájde, nech vás pozbiera.
Ja som mala včera večer frajera.

Bol to frajer maľovaný jak ruža
toho som si vyvolila za muža.
Ani by mu robiť nedala
iba pre parádu by ho chovala.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ceresnicky-ceresne/',
  },
  {
    id: 'song-sk-cervene-jablcko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Červené jabĺčko',
    description: 'Červené jabĺčko v oblôčku mám. Koho rada vidím, tomu ho dám.',
    materials: [],
    steps: [],
    lyrics: `Červené jabĺčko v oblôčku mám.
Koho rada vidím, tomu ho dám.
A ja ťa Janíčko najradšej mám,
tebe to červené jabĺčko dám.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/cervene-jablcko/',
  },
  {
    id: 'song-sk-cerveny-kachel',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Červený kacheľ',
    description: 'Červený kácheľ, biela pec, nevedela milá chleba piecť,',
    materials: [],
    steps: [],
    lyrics: `Červený kácheľ, biela pec,
nevedela milá chleba piecť,
iba jednu kuru upiekla,
aj tá jej z pece utiekla.

Dohonila kuru na moste,
vyprášila ju tam po chvoste.
Prečo si sa kura nepiekla,
prečo si mi z pece utiekla?`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/cerveny-kachel/',
  },
  {
    id: 'song-sk-cerveny-satecku',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Červený šátečku',
    description: 'Červený šátečku kolem se toč, kolem se toč, kolem se toč.',
    materials: [],
    steps: [],
    lyrics: `Červený šátečku kolem se toč,
kolem se toč, kolem se toč.
Má milá se hněvá já nevím proč,
já nevím proč, já nevím proč.
Tralalala lalala, červená fiala,
tralalala lalala, fialenka.

Když jsem si v potoce ruce myla,
ruce myla, ruce myla.
Šátek jsem do vody upustila,
upustila, upustila.
Tralalala lalala, červená fiala,
tralalala lalala, fialenka.

Červený šátečku kolem se toč,
kolem se toč, kolem se toč.
Má milá se hněvá já nevím proč,
já nevím proč, já nevím proč.
Tralalala lalala, červená fiala,
tralalala lalala, fialenka.

Když jsem si v potoce ruce myla,
ruce myla, ruce myla.
Šátek jsem do vody upustila,
upustila, upustila.
Tralalala lalala, červená fiala,
tralalala lalala, fialenka.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/cerveny-satecku/',
  },
  {
    id: 'song-sk-chnapik-malicky-krokodyl',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Chňapík maličký krokodýl',
    description: 'Já jsem chňapík maličký krokodýl,',
    materials: [],
    steps: [],
    lyrics: `Já jsem chňapík
maličký krokodýl,
v Africe bydlím
kde teče řeka Nil,
z vajíčka jsem se vyklubal,
po čtyřech nožkách na cestu se dal.

ref.Ťap ťap ťapi,
ťapi ťapi ťap
Ťap ťap ťapi,
ťapi ťapi ťap.

Já jsem ten Chňapík
maličký krokodýl,
ve vodě plavat
a lovit je můj cíl.
Najdu skrýš za rákosím,
tam si Chňap Chňap zoubky nabrousím.

Chňap chňap chňapi
chňapi chňapi chňap,
Chňap chňap chňapi
chňapi chňapi chňap.

Já jsem ten Chňapík
maličký krokodýl,
je ze mě chlapík
teď mám už hodně sil.
Vážku, mouchu, komára
já chňapu rád
no to je príma hra.

Chňap chňap chňapi
chňapi chňapi chňap,
Chňap chňap chňapi
chňapi chňapi chňap.

Mé jméno Chňapík krokodýl kluk,
veček jdu spinkat
tak tiše ani muk,
s mámou v pelíšku jsem rád
sen o chňapání nechávám si zdát.

Chňap chňap chňapi
chňapi chňapi chňap,
Chňap chňap chňapi
chňapi chňapi chňap.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/chnapik-malicky-krokodyl/',
  },
  {
    id: 'song-sk-ci-si-velky-a-ci-maly',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Či si veľký a či malý',
    description: 'Či si veľký a či malý, možno akurát,',
    materials: [],
    steps: [],
    lyrics: `Či si veľký a či malý,
možno akurát,
Boh ťa má rád.

Či si tučný a či chudý,
možno akurát
Boh ťa má rád.

On ťa miluje keď sa smeješ,
ťa miluje aj keď plačeš
ťa miluje keď sa mračíš,
ťa miluje aj keď spíš.

Je to jedno jak sa cítiš
a jak vyzeráš
Boh ťa má rád.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ci-si-velky-a-ci-maly/',
  },
  {
    id: 'song-sk-cierne-oci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Čierne oči',
    description: 'Čierne oči choďte spať, bo musíte ráno vstať.',
    materials: [],
    steps: [],
    lyrics: `Čierne oči choďte spať,
bo musíte ráno vstať.
Ráno, ráno, ráničko,
skôr než vyjde slniečko.
Slniečko už vychodí
a môj milý nechodí.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/cierne-oci/',
  },
  {
    id: 'song-sk-cierne-oci-chodte-spat',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Čierne oči choďte spať',
    description: 'Čierne oči, choďte spať, čierne oči choďte spať,',
    materials: [],
    steps: [],
    lyrics: `Čierne oči, choďte spať,
čierne oči choďte spať,
bo musíte ráno vstať,
bo musíte ráno vstať.

Ráno, ráno, ráničko,
ráno, ráno, ráničko,
keď vychodí slniečko,
keď vychodí slniečko.

Slniečko už vychodí,
slniečko už vychodí,
má milá sa prechodí,
má milá sa prechodí.

Prechodí sa po rínku,
prechodí sa po rínku,
donesie nám novinku,
donesie nám novinku.

Novinečku takovú,
novinečku takovú,
že na vojnu verbujú,
že na vojnu verbujú.

Keď verbujú, budú brať,
keď verbujú, budú brať,
škoda chlapcov na stokrát,
škoda chlapcov na stokrát

Dajú koňa, aj šaty,
dajú koňa, aj šaty,
aj klobúčik rohatý,
aj klobúčik rohatý.

Za klobúčik pentličku,
za klobúčik pentličku
a ku boku šabličku,
a ku boku šabličku.

A do ruky karabín
a do ruky karabím,
už ťa, milá, zochabím,
už ťa, milá, zochabím.

Zostaň, milá, komu chceš,
zostaň, milá, komu chceš,
už ty mojou nebudeš,
už ty mojou nebudeš.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/cierne-oci-chodte-spat-1/',
  },
  {
    id: 'song-sk-daj-boh-stastia-tejto-zemi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Daj Boh šťastia tejto zemi',
    description: 'Daj Boh šťastia tejto zemi, všetkým ľuďom v nej.',
    materials: [],
    steps: [],
    lyrics: `Daj Boh šťastia tejto zemi,
všetkým ľuďom v nej.
Nech im slnko jasne svieti
každý Boží deň.
Nech ich sused v láske má,
nech im pokoj zachová.
Daj Boh šťastia tejto zemi,
všetkým ľuďom v nej.

Daj Boh šťastia tejto zemi,
všetkým národom.
Nech im svetlo hviezdy lásky
ožiaruje dom.
Hladným chleba dobrého,
chorým zdravia pevného.
Daj Boh šťastia tejto zemi,
všetkým národom.

Dopraj Bože svojmu dielu
večné trvanie.
Nech sa samo nezahubí,
všetci prosíme.
Rybám čistej vody daj,
vtáctvo a zver zachovaj.
Dopraj Bože svojmu dielu
večné trvanie.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/daj-boh-stastia-tejto-zemi/',
  },
  {
    id: 'song-sk-dama-sa-nema-bit',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dáma sa nemá biť',
    description: 'Dáma sa nemá biť, hovoria rodičia. Ja sa vždy vrátim len, čo mi kto požičia.',
    materials: [],
    steps: [],
    lyrics: `Dáma sa nemá biť, hovoria rodičia.
Ja sa vždy vrátim len, čo mi kto požičia.
Dáma sa nemá biť, to len tak tárate
Veď všetky baby dnes chodia na karate.

Napríklad Alino
Ten je fakt strelený, skúsil ma podknúť dnes,
 hneď ležal na zemi.
Nedám sa urážať, bijem sa zas a znova.
To musíš guráž mať, keď chceš byť Makepisova.

Dáma sa nemá biť, hovoria rodičia.
Ja sa vždy vrátim len, čo mi kto požičia.
Dáma sa nemá biť, to len tak tárate
Veď všetky baby dnes chodia na karate.

Z rozbitým kolenom a z novou modrinou,
skončilo priateľské stretnutie s Olinom.
Nedám sa urážať bijem sa zas a znova.
To musíš guráž mať, keď chceš byť Makepisova
dáma sa nemá, dáma sa nemá , dáma sa nemá

Dáma sa nemá biť, hovoria rodičia.
Ja sa vždy vrátim len, čo mi kto požičia.
Dáma sa nemá biť, to len tak tárate
Veď všetky baby dnes chodia na karate.
Dáma sa nemá biť, hovoria rodičia.
Ja sa vždy vrátim len, čo mi kto požičia.
Dáma sa nemá biť, to len tak tárate
Veď všetky baby dnes chodia na karate.Interpret: Sandra Junasová`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dama-sa-nema-bit/',
  },
  {
    id: 'song-sk-datel',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ďateľ',
    description: 'Ďube, ó ďube, ďube ďateľ do kôry.',
    materials: [],
    steps: [],
    lyrics: `Ďube, ó ďube,
ďube ďateľ do kôry.
Červi, ó červi,
červíček mu hovorí:
Neďub ďateľ do kôry,
vyďubeš tam otvory!
Ó neďub, ó neďub
neďub ďateľ do kôry!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/datel/',
  },
  {
    id: 'song-sk-detske-saty',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Detské šaty',
    description: 'Dětské šaty Setři si tvář a slzí pár',
    materials: [],
    steps: [],
    lyrics: `Dětské šaty
Setři si tvář a slzí pár
a řekni co ti na nich záleží
přišla dnes chvíle a mě se zdá,
že dětské šaty jsou ti přítěží
čas je odnáší

Šli jsme loukou, šli jsme strání
a dětství odletělo bůhví kam
má pestrost křídel a dívčích přání
a nebo jako kytka uvadá
v nočních zahradách
a nebo jako kytka uvadá
v nočních zahradách

Dětství odletělo bůh ví kam
zpátky nevrátí se,já to znám
Dětství odletělo bůh ví kam
zpátky nevrátí se, já to znám
nevěř pohádkám`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/detske-saty/',
  },
  {
    id: 'song-sk-dievka-modrooka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dievka modrooká',
    description: 'Dievka modrooká nesedávaj u potoka.',
    materials: [],
    steps: [],
    lyrics: `Dievka modrooká
nesedávaj u potoka.
Dievka modrooká
nesedávaj tam.
Zelené vodníča,
uštipne ťa do líca.
Dievka modrooká nesedávaj tam.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dievka-modrooka/',
  },
  {
    id: 'song-sk-dinom-danom',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dínom, dánom',
    description: 'Dínom, dánom, na kopečku stála. Dínom, dánom, na mňa pozerala.',
    materials: [],
    steps: [],
    lyrics: `Dínom, dánom, na kopečku stála.
Dínom, dánom, na mňa pozerala.
Dínom, dánom, nepozeraj na mňa.
Dínom, dánom, nepôjdeš ty za mňa.

Dínom, dánom, prečo by som nešla?
Dínom, dánom, veď ja nie som pyšná.
Dínom, dánom, kráľovná je pyšná.
Dínom, dánom, tá za muža išla.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dinom-danom/',
  },
  {
    id: 'song-sk-dnes-je-velka-parada',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dnes je veľká paráda',
    description: 'Dnes je veľká paráda, my sa hráme na hada.',
    materials: [],
    steps: [],
    lyrics: `Dnes je veľká paráda,
my sa hráme na hada.
Had chvostíkom vrtí,
skúsme si to deti.
Dnes je veľká paráda,
my sa hráme na hada.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dnes-je-velka-parada/',
  },
  {
    id: 'song-sk-dnesny-den-sa-radujme',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dnešný deň sa radujme',
    description: 'Dnešný deň sa radujme a veselo spievajme.',
    materials: [],
    steps: [],
    lyrics: `Dnešný deň sa radujme
a veselo spievajme.
Ježiškovi malému,
v jasliach uloženému.
Spi, spi Ježišku, milý Synáčku.

Krásna panna prečistá,
porodila nám Krista.
V jasličky ho vložila,
plienkami obložila.
Spi, spi, Ježišku, milý Synáčku,

Matka mu vyspevuje,
svätý Jozef pestuje.
Spi, synáčku premilý,
ty kvet krásny, spanilý.
Spi, spi Ježišku, milý Synáčku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dnesny-den-sa-radujme-1/',
  },
  {
    id: 'song-sk-do-hory-do-lesa-valasi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Do hory, do lesa, valasi',
    description: 'Do hory, do lesa, valasi, či horí v tom našom salaši.',
    materials: [],
    steps: [],
    lyrics: `Do hory, do lesa, valasi,
či horí v tom našom salaši.
Radosť veľká sa zjavuje
a tento svet potešuje.
Kráčajte bratkovia k jasličkám,
aby ste zjavili všetko nám.
Počkajte nás milý bratkovia,
nebeskí lietajú duchovia.
"Sláva Bohu" prespevujú,
pokoj ľuďom ohlasujú,
vtáčkovia prekrásne spievajú
a do Betlehema volajú.
Zrodila Panenka Dieťa nám
v jasličkách vložený leží taml
Mesiáša čakaného,
Boha na svet vteleného.
Poďme a vítajme vznešené,
Dieťatko ležiace na sene.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/do-hory-do-lesa-valasi/',
  },
  {
    id: 'song-sk-do-mesta-betlema',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Do mesta Betléma',
    description: 'Do mesta Betléma pospiechajme, pri jasliach kolená zohýbajme.',
    materials: [],
    steps: [],
    lyrics: `Do mesta Betléma pospiechajme,
pri jasliach kolená zohýbajme.
Kristu v Sviatosti, v poníženosti
sa klaňajme.

Z neba k nám zostúpil, nás miloval,
aby nás vykúpil, telo si vzal.
Mnohé úzkosti v ľudskej bytosti
okusoval.

V jasliach si vložený narodený,
by hriešnik stratený bol spasený.
V tejto Sviatosti si nám z milosti,
sprítomnený.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/do-mesta-betlema-1/',
  },
  {
    id: 'song-sk-do-mestecka-poriadkova',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Do mestečka Poriadkova',
    description: 'Vedie, vedie, cesta nová do mestečka Poriadkova.',
    materials: [],
    steps: [],
    lyrics: `Vedie, vedie, cesta nová
do mestečka Poriadkova.
Kto chce s nami cestovať,
musí čisté rúčky mať.
Kto chce s nami cestovať,
musí čisté rúčky mať.

... všetko popapať
... čisté zúbky mať
... hračky upratať
... sa sám obliekať`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/do-mestecka-poriadkova/',
  },
  {
    id: 'song-sk-do-snickov',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Do sníčkov',
    description: 'Keď ti spánok tečie do topánok,',
    materials: [],
    steps: [],
    lyrics: `Keď ti spánok
tečie do topánok,
zavri očká,
hračka počká.

Slnko už spí,
a mesiačik sní,
stráži nás
po celý čas.

Chvíľu sem a chvíľu tam,
do sníčkov ti priplávam.

Tie sníčky vám
privezie klaun,
tmy sa snáď
nebudeš báť.
Hviezda má stráž
a pohojdá nás,
nezaspíš,
podá ti sny.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/do-snickov/',
  },
  {
    id: 'song-sk-dobre-ranko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dobré ránko',
    description: 'Ahoj Anka, nová správa dobré ráno treba vstávať,',
    materials: [],
    steps: [],
    lyrics: `Ahoj Anka, nová správa
dobré ráno treba vstávať,
Dobré ráno všetkým deťom,
nech preletí šírim svetom.

Budíček už tancuje zvoní, bzučí, hartuje,
postieľku si ustlať treba,
 zúbky umyť žiadna veda.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dobre-ranko/',
  },
  {
    id: 'song-sk-dobru-noc',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dobrú noc',
    description: 'Dobrú noc, má milá, dobrú noc, nech ti je sám Pán Boh na pomoc.',
    materials: [],
    steps: [],
    lyrics: `Dobrú noc, má milá, dobrú noc,
nech ti je sám Pán Boh na pomoc.
Dobrú noc, dobre spi,
nech sa ti snívajú pekné sny.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dobru-noc/',
  },
  {
    id: 'song-sk-dobry-pastier-sa-narodil',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dobrý pastier sa narodil',
    description: 'Dobrý pastier sa narodil, by ovečky vyslobodil.',
    materials: [],
    steps: [],
    lyrics: `Dobrý pastier sa narodil,
by ovečky vyslobodil.
Pri Betlémskom salaši,
radujte sa, veseľte sa valasi.
Radujte sa a plesajte
láskou k Bohu plápolajte,
že nám Boh dal takého,
žiadaného nám Pastiera dobrého.
Jak sa jedna ovca stratí,
on sa hľadať ju navráti.
Nebojí sa zanechať
pre tú jednu deväťdesiať aj deväť.
O dieťatko utešené,
z čistej Panny narodené.
Daj nám svojej milosti,
nech sa s tebou uvidíme v radosti.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dobry-pastier-sa-narodil-1/',
  },
  {
    id: 'song-sk-dotyky-snov',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dotyky snov',
    description: 'Iba dotyky snov, čakajú v spánku pred tebou. Iba pohyby pier, prezradia spomienky z hier.',
    materials: [],
    steps: [],
    lyrics: `Iba dotyky snov, čakajú v spánku pred tebou.
Iba pohyby pier, prezradia spomienky z hier.

Svet malých túžob a prianí, končiacich na svitaní.
Svet malých príbehov a básní, do knihy zapíše básnik.

Iba ty budeš s ňou, s princeznou zo svojich snov.
Iba ty budeš s ním, s rytierom nebojácnym.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dotyky-snov/',
  },
  {
    id: 'song-sk-dupkaju-nozicky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dupkajú nožičky',
    description: 'Dupkajú nožičky, veselo dupkajú',
    materials: [],
    steps: [],
    lyrics: `Dupkajú nožičky,
veselo dupkajú
a malé ručičky
nožičkám tlieskajú.

Tlieskajte, tlieskajte,
ručičky, dlaničky,
veselo dupkajte,
pätičky, nožičky.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dupkaju-nozicky/',
  },
  {
    id: 'song-sk-dve-male-blchy',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Dve malé blchy',
    description: 'Dve malé blchy, vošli do sprchy, tá blbšia blcha, nevie čo je sprcha myslela si, že je sprcha telefón točila kohútikom kričí haló koniec je blche, už nie je v sprche a žiadna škoda, spláchla ju voda nemala si myslieť taká hlupaňa že je sprcha telefón čo vyzváňa',
    materials: [],
    steps: [],
    lyrics: `Dve malé blchy, vošli do sprchy, tá blbšia blcha, nevie čo je sprcha myslela si, že je sprcha telefón točila kohútikom kričí haló

koniec je blche, už nie je v sprche a žiadna škoda, spláchla ju voda nemala si myslieť taká hlupaňa že je sprcha telefón čo vyzváňa

tej druhej blche, smutno bolo v sprche spláchla sa za ňou, za tou jej hlupaňou tak sa šťastne blchy kúpu v kanáli z hygienických dôvodov by nemali

ale tie blchy, smejú sa chichi plavia sa spolu, kanálom dolu už sa tešia, že až prídu do centra pôjdu niekam do baru sa prevetrať.

tancuje blcha, celý bar ňuchá už to spoznali, že boli v kanáli čašník na ne kričí že: Okamžite choďte rovno do sprchy veď smrdíte

a preto ....
dve malé blchy, vošli do sprchy tá blbšia blcha, nevie čo je sprcha myslela si, že je sprcha telefón otočila kohútikom kričí haló

Interpret: Peter Nagy`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/dve-male-blchy/',
  },
  {
    id: 'song-sk-ej-pada-rosicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ej, padá rosička',
    description: 'Ej padá, padá rosička, spali by moje očičká.',
    materials: [],
    steps: [],
    lyrics: `Ej padá, padá rosička,
spali by moje očičká.
Spali by moje,
spali by aj tvoje,
spali by duša má oboje.

Ej padá, padá listopad,
pozdravuj milú nastokrát.
Pozdravuj milú,
holubienku sivú,
že sa už nevrátim nikdy viac.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ej-pada-rosicka/',
  },
  {
    id: 'song-sk-emil-z-lonnebergy',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Emil z Lönnebergy',
    description: 'Emiiil! Moja milá kôlnička už zasa ma tu máš.',
    materials: [],
    steps: [],
    lyrics: `Emiiil!

Moja milá kôlnička už zasa ma tu máš.
Zas rýchlo k tebe pribehnem a stružlikať chcem zas.
Kôlnička hej bumtralali, kôlnička hej bumtralala,
som rád, že si bumtralali a že ťa mám bumtralala.

Hneď ku kôlničke utekám, keď spravím niečo zlé.
Môj ocko beží ako ja, no až tak rýchlo nie.
Kôlnička hej bumtralali, kôlnička hej bumtralala,
som rád, že si bumtralali a že ťa mám bumtralali.

Interpret: Michal Michna`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/emil-z-lonnebergy/',
  },
  {
    id: 'song-sk-fasiangy-turice',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Fašiangy Turíce',
    description: 'Fašiangy Turíce Veľká noc príde',
    materials: [],
    steps: [],
    lyrics: `Fašiangy Turíce
Veľká noc príde
kto nemá kožuška,
zima mu bude.

Ja nemám kožuška,
len sa tak trasiem.
Dajte mi slaninky
nech sa napasiem.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/fasiangy-turice-1/',
  },
  {
    id: 'song-sk-ferrari',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ferrari',
    description: 'Počkaj až prídem raz na Ferrari Ako sa moje dievča zatvári?',
    materials: [],
    steps: [],
    lyrics: `Počkaj až prídem raz na Ferrari
Ako sa moje dievča zatvári?
Možno sa bude krásne červenať
presne jak Ferrari
ja budem rad

Naozaj prídem raz na ferrari
nasadneš ku mne, ja sa rozžiarim
horúca hudba pôjde z motora
ty budeš moja krasna potvora

Atak si vravím: Čo by si chcel?
zatiaľ nám stačí aj bicykel
zdola ti zvoním, pojď so mnou von
tam na zábradlí, nás napadli
vždy najkrajšie sny

Zazvoním kľúčami od Ferrari
namiesto zvonom pri nudnom oltári
vždy som bol frajer
tak si ťa nevezmem
radšej ťa len na chvíľu unesiem

Život je rychlý ako Ferrari
občas aj pekný keď sa podarí
horúca hudba pôjde z motora
ty budeš moja krásna potvora

A tak si vravím: Čo by si chcel?
zatiaľ nám stačí aj bicykel
zdola ti zvoním, poď so mnou von
tam na zábradlí nás napadli
vždy najkrajšie sny

Počkaj až prídem raz na Ferrari
Ako sa moje dievča zatvári?
Možno sa bude krásne červenať
presne jak Ferrari
ja budem rad Interpret: Martin Madej`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ferrari/',
  },
  {
    id: 'song-sk-flinstonovci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Flinstonovci',
    description: 'Jabadaba duuuuuuu. Borci, Flinstonovci, sú tu ako dáke zjavenie. Nervy, sú to nervy, aj keď žijú v dobe kamennej.Poďte, jazdiť s nimi na skejte. Spolu s nimi sa vždy zasmejte. Oslov Flinstonovcov, môžeš jabadabadúfať, môžeš jabadabadúfať, že spoznáš fúru hier.',
    materials: [],
    steps: [],
    lyrics: `Jabadaba duuuuuuu. Borci, Flinstonovci, sú tu ako dáke zjavenie. Nervy, sú to nervy, aj keď žijú v dobe kamennej.Poďte, jazdiť s nimi na skejte. Spolu s nimi sa vždy zasmejte.
Oslov Flinstonovcov, môžeš jabadabadúfať, môžeš jabadabadúfať, že spoznáš fúru hier.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/flinstonovci/',
  },
  {
    id: 'song-sk-futbal-to-je-super-hra',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Futbal to je super hra',
    description: 'My sme futbalisti malí zopár gólov sme už dali.',
    materials: [],
    steps: [],
    lyrics: `My sme futbalisti malí
zopár gólov sme už dali.
Kopem ja a kopeš ty.
Kam až lopta doletí?
Futbal to je super hra,
futbal ten nás baví.
Keď ho hráme tak sme
všetci silní, šťastní, zdraví.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/futbal-to-je-super-hra/',
  },
  {
    id: 'song-sk-general',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Generál',
    description: 'Generál dnes ráno vstal, a povely prikázal.',
    materials: [],
    steps: [],
    lyrics: `Generál dnes ráno vstal,
a povely prikázal.
Anka vie ich naspamäť,
 keď generál rozkaze.
Vpravo bok, vľavo hlaď,
už vieš aj ty rozkázať .
Čelom vzad, ruky vbok,
budeme mať pevný krok.
Pochodom choď, zastaviť stáť,
 budeme si pamätať.
Postaviť stáť, do pozoru!
Veď my máme pevnú vôľu

Malý počtár
1,2,3,4,5 spočítaj to Betka hneď
5 prštekov na ruke,
5 kvietočkov na lúke,
5 guľôčok v jednej jamke utekajme  k našej mamke.
1,2,3,4,5 už to vieme na spamäti
5 guľôčok v jednej jamke utekajme  k našej mamke
1,2,3,4,5 spočítaj to Betka hneď.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/general/',
  },
  {
    id: 'song-sk-gumkaci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Gumkáči',
    description: 'Sú dobrí a statoční, rýchli a smelí, bystrí a verní, to svet o nich vie.',
    materials: [],
    steps: [],
    lyrics: `Sú dobrí a statoční, rýchli a smelí,
bystrí a verní, to svet o nich vie.
Ženú sa lesom a pieseň im velí,
medvedia pieseň už zďaleka znie.

Refrén:
Gumkáči, hneď ich spoznáš priamo pri práci,
to, čo robia, sa ti zapáči,
už sú tu Gumkáči.

Do ríše záhad sa vypráviš s nimi,
iste ti dajú svoj sladký gumidžús.
O chvíľu spoznáš ich odvážne činy,
tak aj ty buď smelý a s nimi to skús.

Refrén:
Gumkáči, hneď ich spoznáš priamo pri práci,
to, čo robia, sa ti zapáči,
už sú tu Gumkáči.

Už sú tu Gumkáči.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/gumkaci/',
  },
  {
    id: 'song-sk-haja-haja-haja',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Haja, haja, haja',
    description: 'Haja, haja, haja, spinkaj moja malá.',
    materials: [],
    steps: [],
    lyrics: `Haja, haja, haja,
spinkaj moja malá.
Zakryjem ti rúčky,
ticho, potichučky.

Haja, haja, haja,
spinkaj moja malá,
pošúcham ti nôžku,
spinkaj ešte trošku.

Haja, haja, haja,
spinkaj moja malá,
pohladím ti vlásky
z prevelikej lásky.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/haja-haja-haja/',
  },
  {
    id: 'song-sk-hajaj-tisko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hajaj tíško',
    description: 'Hajaj tíško, spi len, sni o ružičke sen.',
    materials: [],
    steps: [],
    lyrics: `Hajaj tíško, spi len,
sni o ružičke sen.
Tie najkrajšie sny
pod vankúšik skry.
Zajtra snáď v ranný čas znovu vzbudíš sa zas,
zajtra snáď v ranný čas znovu vzbudíš sa zas.

Hajaj tíško, spi len,
mamka chráni tvoj sen.
Tam k veselým hrám
príde anjelik sám.
Synček môj, zahajaj, potom uvidíš raj,
synček môj, zahajaj, potom uvidíš raj.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hajaj-tisko/',
  },
  {
    id: 'song-sk-hajaj-buvaj-buvickaj',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hajaj, búvaj, buvičkaj',
    description: 'Hajaj, búvaj, buvičkaj, len mi pekne zaspinkaj.',
    materials: [],
    steps: [],
    lyrics: `Hajaj, búvaj, buvičkaj,
len mi pekne zaspinkaj.
Až sa bude tatko pýtať,
či už išla Evka spinkať,
odpovie mu mamička,
Evička už buvičká.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hajaj-buvaj-buvickaj/',
  },
  {
    id: 'song-sk-hajajze-mi-hajaj',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hajajže mi, hajaj',
    description: 'Hajajže mi, hajaj, pôjdeme do hája, natrháme kvieťa, odložíme dieťa.',
    materials: [],
    steps: [],
    lyrics: `Hajajže mi, hajaj, pôjdeme do hája,
natrháme kvieťa, odložíme dieťa.
Spiže, dieťa, spiže, uvarím ti slíže,
len čo moje krosná, zobudia ťa zo sna.

Uvarím ti slíže do teplého mliečka,
len čo zajtra ráno otvoríš zas viečka.
Tak mi pekne spinkaj, dieťa maľované,
poteším sa s tebou, keď slniečko vstane.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hajajze-mi-hajaj/',
  },
  {
    id: 'song-sk-happy-christmas',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Happy Christmas',
    description: 'So this is Christmas And what have you done',
    materials: [],
    steps: [],
    lyrics: `So this is Christmas
And what have you done
Another year over
And a new one just begun
Ans so this is Christmas
I hope you have fun
The near and the dear one
The old and the young

A very merry Christmas
And a happy New Year
Let's hope it's a good one
Without any fear
And so this is Christmas
For weak and for strong
For rich and the poor ones
The world is so wrong
And so happy Christmas
For black and for white
For yellow and red ones
Let's stop all the fight
A very merry Christmas
And a happy New Year
Let's hope it's a good one
Without any fear
And so this is Christmas
And what have we done
Another year over
And a new one just begun
Ans so this is Christmas
I hope you have fun
The near and the dear one
The old and the young
A very merry Christmas
And a happy New Year
Let's hope it's a good one
Without any fear
War is over over
If you want it
War is over
Now...  Interpret: John Lennon`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/happy-christmas/',
  },
  {
    id: 'song-sk-hey-pepe',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hey pepe',
    description: 'hey pepe, otvor nám hey pepe, baby idú k vám',
    materials: [],
    steps: [],
    lyrics: `hey pepe, otvor nám
hey pepe, baby idú k vám
hey pepe, otvor nám
hey pepe, bude flám

pepe ty máš smutný byt
hey Pepe, tak to nie!
konečne už začni žiť
hey pepe, tak to je
pozri, moje srdce tancuje
spravíme si večer flám

šlahačkou si po okraj napustíme vaňu
s jahodovým džúsom ti vymalujem spálňu
budeme jesť rukami, bozkávať sa nosami
no a môj pes Rikina ujde radšej do kina
nebude sa hanbiť, ked flámujú baby

pepe ty máš smutný byt
hey pepe, tak to nie!
konečne už začni žiť
hey pepe, tak to je
pozri, moje srdce tancuje
spravíme si večer flám

korytnačkám v akváriu vypijeme vodu
ostrihám ti tričko a vylepšíme módu
susedia už búchajú, že im tečie do čaju
nechápu, že hore robíme si more
keď sa pepe snažíš, máš sa jak na pláži

hey pepe, otvor nám
hey pepe, baby idú k vám
hey pepe, otvor nám
hey pepe, bude flám

pepe ty máš krásný byt
hey pepe, tak to nie!
konečne už začni žiť
hey pepe, tak to je
pozri, moje srdce tancuje
tak tomuto už vravím flám

lampióny, šampióny, morské riasy,
ananásy, slané hady, čokolády,
saxofóny, krivé tóny a podaj mi lyžičky,
bubenícke paličky, tak ma zabi ale baby
budú rytmus hrať taký, čo máš rád
taky ty ...

hey pepe, otvor nám,
hey pepe, baby idú k vám,
hey pepe, otvor nám,
hey pepe, bude flám.

pepe ty máš krásný byt,
hey pepe, tak to nie !
konečne už začni žiť,
hey pepe, tak to je
pozri, moje srdce tancuje,
tak tomuto už vravím flám

hey pepe, otvor nám,
hey pepe, baby idú k vám,
hey pepe, otvor nám,
hey pepe, bude flám

pepe ty máš krásný byt,
hey pepe, tak to nie !
konečne už začni žiť,
hey pepe, tak to je
pozri, moje srdce tancuje,
tak tomuto už vravím flám`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hey-pepe/',
  },
  {
    id: 'song-sk-hla-zastup-zboru-anjelskeho',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hľa, zástup zboru anjelského',
    description: 'Hľa, zástup zboru anjelského, prichodí z neba vysokého.',
    materials: [],
    steps: [],
    lyrics: `Hľa, zástup zboru anjelského,
prichodí z neba vysokého.
Budí zo sna sladkého
strážcov stáda ovčieho
spievaním.

Sláva buď Bohu najvyššiemu
a pokoj človeku hriešnemu.
Lebo prišiel Spasiteľ,
hriešnikov Vykupiteľ
na ten svet.

V jasličky, mamka ho vložila,
zima ho ukrutne mrazila.
Ale hneď vôľ i osol
jeho biede pomohol
dýchaním.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hla-zastup-zboru-anjelskeho/',
  },
  {
    id: 'song-sk-hlava-ramena-kolena-palce',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hlava, ramená, kolená, palce',
    description: 'Hlava, ramená, kolená, palce, oči, uši, ústa, nos.',
    materials: [],
    steps: [],
    lyrics: `Hlava, ramená, kolená, palce, oči, uši, ústa, nos.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hlava-ramena-kolena-palce/',
  },
  {
    id: 'song-sk-hojda-hojda',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hojda hojda',
    description: 'Hojda, hojda, hojda spadla mačka z pôjda,',
    materials: [],
    steps: [],
    lyrics: `Hojda, hojda, hojda
spadla mačka z pôjda,
spadla na koláče
teraz v kúte plače.
Hojda, hojda, hojdice,
plačte všetky mačice.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hojda-hojda/',
  },
  {
    id: 'song-sk-holka-modrooka',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Holka modrooká',
    description: 'Holka modrooká nesedávej u potoka',
    materials: [],
    steps: [],
    lyrics: `Holka modrooká
nesedávej u potoka
holka modrooka
nesedavej tam.

V potoce se voda točí
podemele tvoje oči
holka modrooka
nesedavej tam.

Holka modrooká
nesedávej u potoka
holka modrooka
nesedavej tam.

V potoce je velká voda
vezme-li tě bude škoda
holka modrooká
nesedavej tam.

Holka modrooká
nesedávej u potoka
holka modrooka
nesedavej tam

V potoce je hastrmánek
zatahá tě za copánek
holka modrooká
nesedávej tam.

Holka modrooká
nesedávej u potoka
holka modrooka
nesedavej tam

V potoce se voda točí
podemele tvoje oči
holka modrooka
nesedavej tam.

Holka modrooká
nesedávej u potoka
holka modrooka
nesedavej tam

V potoce je velká voda
vezme-li tě bude škoda
holka modrooká
nesedavej tam.

Holka modrooká
nesedávej u potoka
holka modrooka
nesedavej tam

V potoce je hastrmánek
zatahá tě za copánek
holka modrooká
nesedávej tam.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/holka-modrooka/',
  },
  {
    id: 'song-sk-hopsasa-tralala',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Hopsasa tralala',
    description: 'Hopsasa trala jar nám zimu vyhnala',
    materials: [],
    steps: [],
    lyrics: `Hopsasa trala
jar nám zimu vyhnala
hopsasa tralala zima je preč.

Hopsasa tralala letná hra sa začala.
Hopsasa tralala kúpať sa bež.

Hopsasa tralala prišla jeseň ospalá.
Hopsasa tralala tečie zo striech.

Hopsasa tralala zem sa pod sneh chovala.
Hopsasa tralala volá nás na strmý breh.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/hopsasa-tralala/',
  },
  {
    id: 'song-sk-husky-biele-husky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Húsky, biele húsky',
    description: 'Húsky biele húsky, našej malej Zuzky. Kde si vy periete vaše biele blúzky.',
    materials: [],
    steps: [],
    lyrics: `Húsky biele húsky, našej malej Zuzky.
Kde si vy periete vaše biele blúzky.
Kde si ich prať máme, to je všetkým známe,
 vo vode čistučkej kúpeme sa stále.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/husky-biele-husky/',
  },
  {
    id: 'song-sk-ide-ide-slon',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ide ide slon',
    description: 'Ide ide slon, veľký ako dom.',
    materials: [],
    steps: [],
    lyrics: `Ide ide slon,
veľký ako dom.
Za ním skáču opice,
drzé sú jak ploštice.

Ide ide lev,
robí veľký rev.
Za ním skáču opice,
drzé sú jak ploštice.

Ide krokodíl,
pláva v rieke Níl.
Za ním skáču opice,
drzé sú jak ploštice.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ide-ide-slon/',
  },
  {
    id: 'song-sk-ide-jezis',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ide Ježiš',
    description: 'Ide Ježiš, pozri kráča po jazere on dvíha ma a pomáha mi stáť.',
    materials: [],
    steps: [],
    lyrics: `Ide Ježiš, pozri kráča po jazere
on dvíha ma a pomáha mi stáť.
Ide Ježiš, On je Pánom aj búrlivých vĺn
ide Ježiš, On mi dáva smer.

... On ma poteší
... On mi odpustí
... On ma požehná
... On ma miluje`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ide-jezis/',
  },
  {
    id: 'song-sk-ide-vlacik-si-si-si',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ide vláčik ši-ši-ši',
    description: 'Ide vláčik ši-ši-ši, odvezie nás k Mariši,',
    materials: [],
    steps: [],
    lyrics: `Ide vláčik ši-ši-ši,
odvezie nás k Mariši,
od Mariši k Etele
cez tri veľké tunele.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ide-vlacik-si-si-si/',
  },
  {
    id: 'song-sk-ide-ide-vlacik',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ide, ide vláčik',
    description: 'Ide, ide vláčik, ide, ide vlak. A vy milé deti, poďte nasadať.',
    materials: [],
    steps: [],
    lyrics: `Ide, ide vláčik, ide, ide vlak.
A vy milé deti, poďte nasadať.

Pôjdeme my do Popradu,
kúpime si čokoládu.

Pôjdeme my do Žiliny,
tešíme sa na maliny.

Pôjdeme my do Nitry,
budeme tam raz - dva -tri.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ide-ide-vlacik/',
  },
  {
    id: 'song-sk-ide-ide-vlacik-ide-ide-vlak',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ide, ide vláčik, ide, ide vlak',
    description: 'Ide, ide vláčik, ide, ide vlak a my malé deti poďme nasadať.',
    materials: [],
    steps: [],
    lyrics: `Ide, ide vláčik, ide, ide vlak
a my malé deti poďme nasadať.
Odvezie nás do Žiliny, nakúpime zeleniny
ide, ide vláčik, ide, ide vlak.

Ide, ide vláčik, ide, ide vlak
a my malé deti poďme nasadať.
Odvezie nás do Popradu, nakúpime čokoládu
ide, ide vláčik, ide, ide vlak.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ide-ide-vlacik-ide-ide-vlak/',
  },
  {
    id: 'song-sk-indian',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Indián',
    description: 'Žil raz indián a ten mal v púšti stan.',
    materials: [],
    steps: [],
    lyrics: `Žil raz indián
a ten mal v púšti stan.
pri ohni sa večer nudil cítil sa tak sám
vtedy sa hodí fľaša chechtavej vody.
Napil sa a rozosmial sa a takto si spieval.

Ref: Congololingo longolo lingo
z fľaše glo glo glo
Congololingo longolo lingo
z fľaše glo glo glo
Congololingo longolo lingo
z fľaše glo glo glo
Congololingo longolo lingo
glo glo glo

Prišiel za nim vlk taký starý tĺk
chcel ho zožrať dostal fľašu
dal si iba glg
vtedy sa hodí fľaša chechtavej vody
vlk sa napil a rozosmial sa a spolu spievali.

Ref:Congololingo...

Prišiel za nim had vraj ho nemá rad
že ho pípne iba štipne a nebude sa hrať
vtedy sa hodí fľaša chechtavej vody
had sa napil a rozosmial sa a spolu spievali.

Ref:Congololingo ....

Prišiel tam aj lev z diaľky počul spev
keď sa chystal všetkých zožrať hneď ho prešiel hnev
vtedy sa hodí fľaša chechtavej vody
lev sa napil a rozosmial sa a spolu spievali.

Ref:Congololingo...

A tak indián už nebýva sám
všetci pijú chechtavú vodu
v pusti majú stan
majú sa radi
jak taký hadí
na plne pľúca chechtajú sa a spolu spievajú.

Ref:Congololingo...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/indian/',
  },
  {
    id: 'song-sk-ja-do-lesa-nepojedu',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Já do lesa nepojedu',
    description: 'Já do lesa nepojedu, já do lesa nepůjdu.',
    materials: [],
    steps: [],
    lyrics: `Já do lesa nepojedu,
já do lesa nepůjdu.
Kdyby na mě hajný přišel,
on by mě vzal sekeru.

Sekera je za dva zlatý,
a topůrko za tolar.
Kdyby na mě hajný přišel,
on by mně to všecko vzal.

Já do lesa nepojedu,
já do lesa nepůjdu.
Kdyby na mě hajný přišel,
on by mě vzal sekeru.

Sekera je za dva zlatý,
a topůrko za tolar.
Kdyby na mě hajný přišel,
on by mně to všecko vzal.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ja-do-lesa-nepojedu/',
  },
  {
    id: 'song-sk-ja-mam-kone',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Já mám koně',
    description: 'Já mám koně, vraný koně, to jsou koně mí. (x2) Když já jim dám ovsa, oni skáčou hopsa.',
    materials: [],
    steps: [],
    lyrics: `Já mám koně, vraný koně, to jsou koně mí. (x2)
Když já jim dám ovsa, oni skáčou hopsa.

Já mám koně, vraný koně, to jsou koně mí. (x3)
Když já jim dám obroku, oni skáčou do skoku.

Já mám koně, vraný koně, to jsou koně mí. (x3)
Když já jim dám jetele, oni skáčou vesele.

Já mám koně, vraný koně, to jsou koně mí. (x3)
Když já jim dám ovsa, oni skáčou hopsa.

Já mám koně, vraný koně, to jsou koně mí. (x3)
Když já jim dám obroku, oni skáčou do skoku.

Já mám koně, vraný koně, to jsou koně mí. (x3)
Když já jim dám jetele, oni skáčou vesele.

Já mám koně, vraný koně, to jsou koně mí.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ja-mam-kone/',
  },
  {
    id: 'song-sk-ja-som-dobry-remeselnik',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ja som dobrý remeselník',
    description: 'Ja som dobrý remeselník z tej trenčianskej stolice.',
    materials: [],
    steps: [],
    lyrics: `Ja som dobrý remeselník
z tej trenčianskej stolice.

Po mestách a po dedinách
chodím drotovať hrnce.

Hrnce, misky aj rajničky
dajte drotovať ženičky.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ja-som-dobry-remeselnik-1/',
  },
  {
    id: 'song-sk-jak-si-krasne-jezuliatko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Jak si krásne Jezuliatko',
    description: 'Jak si krásne Jezuliatko, vprostred biedy úbožiatko.',
    materials: [],
    steps: [],
    lyrics: `Jak si krásne Jezuliatko,
vprostred biedy úbožiatko.
Pred tebou padáme,
dary ti skladáme.

Ja ti nesiem dve kozičky,
by ti zohriali nožičky.
Ja zas mliečka málo,
by sa líčko smialo.

Ja ti nesiem veselého,
baránka zo stáda svojho.
S ním sa môžeš hrávať,
veselo zabávať.

A my biedni, čo ti dáme,
darovať ti nič nemáme.
My ti tu zahráme,
pieseň zaspievame.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/jak-si-krasne-jezuliatko-1/',
  },
  {
    id: 'song-sk-jarne-kvety',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Jarné kvety',
    description: 'Ja som vám veľký pán, červený som tulipán.',
    materials: [],
    steps: [],
    lyrics: `Ja som vám veľký pán,
červený som tulipán.
Moja hlávka - kalich veľký
zdobí v meste parky všetky.

Ja som vám veľký pán,
červený som tulipán.

A my sme púpavy,
kvitneme hneď od jari.
Na hlavičke žlté vlasy,
lúčina je plná krásy.

A my sme púpavy, kvitneme hneď od jari.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/jarne-kvety/',
  },
  {
    id: 'song-sk-jingle-bells',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Jingle Bells',
    description: 'Dashing through the snow In a one horse open sleigh',
    materials: [],
    steps: [],
    lyrics: `Dashing through the snow
In a one horse open sleigh
O'er the fields we go
Laughing all the way
Bells on bob tails ring
Making spirits bright
What fun it is to laugh and sing
A sleighing song tonight

Oh, jingle bells, jingle bells
Jingle all the way
Oh, what fun it is to ride
In a one horse open sleigh
Jingle bells, jingle bells
Jingle all the way
Oh, what fun it is to ride
In a one horse open sleigh

A day or two ago
I thought I'd take a ride
And soon Miss Fanny Bright
Was seated by my side
The horse was lean and lank
Misfortune seemed his lot
We got into a drifted bank
And then we got upsot

Oh, jingle bells, jingle bells
Jingle all the way
Oh, what fun it is to ride
In a one horse open sleigh
Jingle bells, jingle bells
Jingle all the way
Oh, what fun it is to ride
In a one horse open sleigh yeah

Jingle bells, jingle bells
Jingle all the way
Oh, what fun it is to ride
In a one horse open sleigh
Jingle bells, jingle bells
Jingle all the way
Oh, what fun it is to ride
In a one horse open sleigh`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/jingle-bells/',
  },
  {
    id: 'song-sk-kacerovo',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Káčerovo',
    description: 'V káčerove úžasnom Až zem praská',
    materials: [],
    steps: [],
    lyrics: `V káčerove úžasnom
Až zem praská
Taký máme všetci zhon
Raz tu raz tam

To býva možné
Smiešne aj hrozné

Ref:
Kto vie úú
V káčerove vždy je niečo nové úú
Čo je nové pohodovo povie úú

Ddd drámy bez zábrany
Tu striehnu za dverami

Ref:
A čo s tým veď je to celkom na plač úú
Občas sa zasmeje slovkom kač kač úú
V tomto našom káče káče rove úú
Je každú chvílu opäť niečo nové`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kacerovo/',
  },
  {
    id: 'song-sk-kacerovo-cesky-text',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Káčerovo - český text',
    description: 'Kačerov jak hurikán k nám už míří auta laser aeroplán městem víří',
    materials: [],
    steps: [],
    lyrics: `Kačerov jak hurikán k nám už míří
auta laser aeroplán městem víří
Příběhy píše z téhleté říše
Kačer
Teď k vám děti z dálky letí
Kačer
Přináší sem kouzelnou zem
Kačer

Kačeři příjdou, když jsi v nouzi
Když tě úzkost ze sna vzbouzí
zavolat jen stačí heslo
Kačer
Teď k vám děti z dálky letí
Kačer
Přináší sem kouzelnou zem
Kačer
Na tváře smích ti právě vpích
pan Kačer`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kacerovo-cesky-text/',
  },
  {
    id: 'song-sk-kam-plava-moja-postel',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kam pláva moja posteľ',
    description: 'Kam pláva moja posteľ, keď spím? Kam pláva moja posteľ, keď spím?',
    materials: [],
    steps: [],
    lyrics: `Kam pláva moja posteľ, keď spím?
Kam pláva moja posteľ, keď spím?

Dieťa nesie pohár sladkej vody do mora,
verím, že si ľudia takto srdca otvoria.

Moja posteľ pláva k tvojim rukám, majú cit,
namoč si ich a skús ma pohladiť.

Kam pláva moja posteľ, keď spím
Kam pláva moja posteľ, keď spím

Príroda a láska sa už dali na útek,
na cestu im svietia horiace labute.

Moja posteľ pláva k tvojim rukám majú cit,
namoč si ich a skús to uhasiť.

Láska máva na autá jak zmlknutý stopár,
všetci idú ďalej a tak ťažko pochopia,
že ma držíš za ruku, lebo máš ma rád,
zachyť ma, kým príde vodopád.

Kam pláva moja posteľ, keď spím?
Kam pláva moja posteľ, keď spím?Kam pláva moja posteľ, keď spím?`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kam-plava-moja-postel/',
  },
  {
    id: 'song-sk-karneval',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Karneval',
    description: 'Raz vo dverách stál poštár pre Nikolku vraj odkaz ma',
    materials: [],
    steps: [],
    lyrics: `Raz vo dverách stál poštár
pre Nikolku vraj odkaz ma
Prídi, prídi, prídi, prídi
príď na Karneval
Raz vo dverách stál poštár
pre nikolku vraj odkaz ma
Prídi, prídi, prídi, prídi
príď na Karneval
Stretnú sa tam všetky deti prezlečené za víly kvety.
Podobať sa môžu líške, svoj kostým si nájdi v knižke.

projekt Vydavateľstva Modrý slon`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/karneval/',
  },
  {
    id: 'song-sk-katky',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Katky',
    description: 'katky se probudí a já to vím ty si ta princezna která jen hlídku má na starost a ty jen se loudáš katky ty jsou udřeny',
    materials: [],
    steps: [],
    lyrics: `katky se probudí a já to vím ty si ta princezna která jen hlídku má na starost a ty jen se loudáš katky ty jsou udřeny`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/katky/',
  },
  {
    id: 'song-sk-kazdy-den-budu-vraj-vianoce',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Každý deň budú vraj Vianoce',
    description: 'Slávností bolo už hádam dosť, každý má svoju pravdu právd.',
    materials: [],
    steps: [],
    lyrics: `Slávností bolo už hádam dosť,
každý má svoju pravdu právd.
Čertove kolo, vyliata zlosť,
nik nie je zajko ani páv.

Len v dávnych bájkach víťazí česť,
rozum a láska nevinná.
Čoraz viac pravdy má tvrdá päsť,
bude to liečba povinná.

Každý deň budú vraj Vianoce
Ticho šepkajú ľudia po vonku
Už sa nám pozlátok ligoce,
čo však ukrýva
iba kamienok či sladkú salónku

Súhvezdí právo a modrý koč
Čo nám len zriedka zastaví
Ľudí tak málo na úzku loď
ktorá má modré zástavy

Každý deň budú vraj Vianoce
Ticho šepkajú ľudia po vonku
Už sa nám pozlátok ligoce,
čo však ukrýva
iba kamienok či sladkú salónku

Možnože,
každý deň budú vraj Vianoce
Ticho šepkajú ľudia po vonku
Už sa nám pozlátok ligoce,
čo však ukrýva
iba kamienok či sladkú salónku`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kazdy-den-budu-vraj-vianoce/',
  },
  {
    id: 'song-sk-kdyz-se-zamiluje-kun',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Když se zamiluje kůň',
    description: 'Když se zamiluje kůň tam někde v pastvinách,',
    materials: [],
    steps: [],
    lyrics: `Když se zamiluje kůň
tam někde v pastvinách,
láskou hlubokou jak tůň
tam někde v pastvinách.
Když se zamiluje kůň
koňskou láskou,
zpívejte písničku
pro jeho klisničku,
nechte ho jít.

Když se zamiluje kůň
tam někde v pastvinách,
láskou hlubokou jak tůň
tam někde v pastvinách.
Když se zamiluje kůň
koňskou láskou,
zpívejte písničku
pro jeho klisničku,
nechte ho jít.

Nejkrásnější zvíře,
zvíře pro rytíře
jmenuje se kůň,
jmenuje se kůň,
Važte si ho, lidé,
ať nám jich pár zbyde,
jmenuje se kůň,
jmenuje se kůň,
jmenuje se kůň.

Slečna s bílou lysinkou,
tam někde v pastvinách,
bude brzy maminkou,
tam někde v pastvinách.
Vždyť se zamiloval kůň
koňskou láskou,
hřívu si navlnil, aby ji oslnil
a cválá k ní.

Nejkrásnější zvíře,
zvíře pro rytíře
jmenuje se kůň,
jmenuje se kůň.
Važte si ho, lidé,
ať nám jich pár zbyde,
jmenuje se kůň,
jmenuje se kůň,
jmenuje se kůň.

Když se zamiluje kůň
tam někde v pastvinách,
láskou hlubokou jak tůň
tam někde v pastvinách.
Když se zamiluje kůň
koňskou láskou,
zpívejte písničku
pro jeho klisničku,
nechte ho jít.
Zpívejte písničku
pro jeho klisničku,
nechte ho jít.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kdyz-se-zamiluje-kun/',
  },
  {
    id: 'song-sk-keby-si-mal-takuto-malu-vieru',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Keby si mal takúto malú vieru',
    description: 'Keby si mal takúto malú vieru vrchy by si prenášal.',
    materials: [],
    steps: [],
    lyrics: `Keby si mal takúto malú vieru
vrchy by si prenášal.
Povedal by si tomuto vrchu
presuň sa, presuň sa.
A vrch by sa presunul
v mene Pána Ježiša vrch
by sa ti presunul.
Vanie, vanie, Duch Svätý vanie.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/keby-si-mal-takuto-malu-vieru/',
  },
  {
    id: 'song-sk-ked-pan-jezis-bol-malicky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Keď Pán Ježiš bol maličký',
    description: 'Keď Pán Ježiš bol maličký nikdy neleňošil.',
    materials: [],
    steps: [],
    lyrics: `Keď Pán Ježiš bol maličký
nikdy neleňošil.
S Matkou Božou i s Jozefom
usilovne robil.
Tu hobľoval, tu píloval,
tu vlničku zvíjal,
vodu nosil, drevo rúbal
i klince pribíjal.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ked-pan-jezis-bol-malicky/',
  },
  {
    id: 'song-sk-ked-si-kamarat',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Keď si kamarát',
    description: 'Keď si kamarát tak poď sa s nami hrať.',
    materials: [],
    steps: [],
    lyrics: `Keď si kamarát
tak poď sa s nami hrať.
Keď si kamarát
tak budeš rád,
že sa môžeš s nami hrať
že nás môžeš napodobňovať.
ňaf-ňaf, ňuf-ňuf, haťa-paťa
béé-cink kukuk ťuk-ťuk.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ked-si-kamarat/',
  },
  {
    id: 'song-sk-ked-si-stastny',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Keď si šťastný',
    description: 'Keď si šťastný, tlieskaj rukami, (tlesk, tlesk) keď si šťastný, tlieskaj rukami, (tlesk, tlesk)',
    materials: [],
    steps: [],
    lyrics: `Keď si šťastný, tlieskaj rukami, (tlesk, tlesk)
keď si šťastný, tlieskaj rukami, (tlesk, tlesk)
keď si šťastný, tlieskaj,
keď si šťastný, tlieskaj,
keď si šťastný, tlieskaj rukami. (tlesk, tlesk)

podľa uvedenej schémy sa ďalej spieva:

Keď si šťastný, dupaj nohami...
Keď si šťastný, udri do kolien...
Keď si šťastný, lúskaj prstami...
Keď si šťastný, zvolaj holahej...
Keď si šťastný, rob to ešte raz...

Všetko naraz rob (postupne po 2x tlesknúť, dupnúť nohami, buchnúť do kolien, zalúskať, 1x zakričať hola-hej! a na úplnom konci pesničky 3x hola-hej!)`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ked-si-stastny/',
  },
  {
    id: 'song-sk-kocka-leze-dirou',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kočka leze dírou',
    description: 'Kočka leze dírou, pes oknem,pes oknem.',
    materials: [],
    steps: [],
    lyrics: `Kočka leze dírou,
pes oknem,pes oknem.
Nebude-li pršet nezmoknem,
nebude-li pršet nezmoknem.

A když bude pršet zmokneme,
zmokneme.
Až vysvitne slunko  uschneme,
až vysvitne slunko uschneme.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kocka-leze-dirou/',
  },
  {
    id: 'song-sk-koho-rada-vidim',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Koho rada vidím',
    description: 'Červené jabĺčko vo vrecku mám, koho rada vidím, tomu ho dám.',
    materials: [],
    steps: [],
    lyrics: `Červené jabĺčko vo vrecku mám,
koho rada vidím, tomu ho dám.
Teba ja, mamička, najradšej mám,
tebe to červené jabĺčko dám.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/koho-rada-vidim/',
  },
  {
    id: 'song-sk-koleda-koleda-stepane',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Koleda, koleda Štěpáne',
    description: 'Děti:Koleda Koleda Štěpáne Co to neseš ve džbáně Štěpán:Nesu nesu koledu Upad sem sní na ledu psi se na ní sběhly, koledu mi snědly',
    materials: [],
    steps: [],
    lyrics: `Děti:Koleda Koleda Štěpáne Co to neseš ve džbáně

Štěpán:Nesu nesu koledu Upad sem sní na ledu psi se na ní sběhly, koledu mi snědly

Štěpán:ja sem maly koledníček přišel sem k vám do květniček kvetniček mi dejte však se mi nnesmějte však se mi najedl

Štěpán:suche řepy neberu co mě dáte to vezmu třeba trochu kače co je přeci vaše třeba starou krávu třeba zlatý Tele vezmu do kabele třeba malý rohlíček mám tu malý pytlíček a že mi nic nedáte hodně si mě nahněváte otluču vám všechny hrnce.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/koleda-koleda-stepane/',
  },
  {
    id: 'song-sk-komar-komar',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Komár, komár',
    description: 'na čelo mi sadol komár v cukrárni už sa na mna chystá - vravím neblázni',
    materials: [],
    steps: [],
    lyrics: `na čelo mi sadol komár v cukrárni
už sa na mna chystá - vravím neblázni
on mi na to pekne rovno do očí
že je smädný, že sa s ním až celá zem točí

tak si vravím, dievča, nebuď na veľa
vždy si chcela maličkého priateľa
cez písomku mohol by mi donášať
čo vyrátal šplhún Fero, čo ma namá rád

komár, komár tak si skús ako chutí RH+
poď do kina na krvák z toho dobre stúpa tlak.
buďme bratia pokrvní pípnutím to potvrď mi
dám si na to chladný džús
a ty moju sladkú RH+

upísal sa krvou komár maličký
našepkáva, donáša mi správičky
kto s kým chodí, čo v zborovni stalo sa
a učitelov štípe do nosa

komár, komár tak si skús ako chutí RH+
poď do kina na krvák z toho dobre stúpa tlak.
buďme bratia pokrvní pípnutím to potvrď mi
dám si na to chladný džús
a ty moju sladkú RH+

na čelo mi sadol komár maličký
ja zabudla som kúpiť mu krvavničky
zo zúfalstva plesla som sa do čela
tak to chodí, pre zlú pamäť stratila som priateľa

komár, komár tak si skús ako chutí RH+
poď do kina na krvák z toho dobre stúpa tlak.
buďme bratia pokrvní pípnutím to potvrď mi
dám si na to chladný džús
a ty moju sladkú RH+`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/komar-komar/',
  },
  {
    id: 'song-sk-kovac-kuje',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kováč kuje',
    description: 'Kováč kuje, mechy duje, pracuje pri ohni.',
    materials: [],
    steps: [],
    lyrics: `Kováč kuje, mechy duje,
pracuje pri ohni.
A kováčka deti myje,
šaty pre ne šije.

Kuje, kuje podkovičku
pre koníčka Sivka
a kováčka kašu varí,
obed deťom chystá.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kovac-kuje/',
  },
  {
    id: 'song-sk-kralovske-reggea',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Královské Reggea',
    description: 'hUmbabau, humbabahumbahumba humbabau, humbabahumbahumba',
    materials: [],
    steps: [],
    lyrics: `hUmbabau, humbabahumbahumba
humbabau, humbabahumbahumba
hUmbabau, humbabahumbahumba
humbabau, humbabahumbahumba

1. Někdo ráčí kráčet v brnění
má na něm rádoby erb
Když není urozen, rychle je prozrazen
když neříká krásné er
Tak ten si říká o malér

2. Moudrý král princeznin bratranec
když vdával svých pět dcer
Řek: "To dál nesnesu" a prchnul do lesů
žádný ženich nemá er
Kdo nemá er, ztrácí charakter

Ref.: Královské reggae, královské reggae
královské reggae, královské reggae

3. Ten, kdo chce mít pravou princeznu,
musí být z vyšších sfér.
Kdo prosí o ruku, musí mít záruku,
tou je jeho ryčné er.
Pouze ten může být premiér.
A kdo nemá er, tak je amatér.

4. Mějte, prosím, trochu strpení,
rozhodně všechno je fér.
Tak proč ty trampoty, příšerné drahoty,
přece slyšíš to mé er,
které mě pasovalo nad průměr.

Ref.: Královské...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kralovske-reggea/',
  },
  {
    id: 'song-sk-krasna-krasna-kde-si-husky-pasla',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Krásna, krásna, kde si húsky pásla',
    description: 'Krásna, krásna, kde si húsky pásla? Niže pánskej lúčky stratila papučky.',
    materials: [],
    steps: [],
    lyrics: `Krásna, krásna, kde si húsky pásla?
Niže pánskej lúčky stratila papučky.
Krásna, krásna, kdes papučky striasla?
Prišla domov s plačom, dostala korbáčom.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/krasna-krasna-kde-si-husky-pasla-1/',
  },
  {
    id: 'song-sk-krok-sem-krok-tam',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Krok sem, krok tam',
    description: 'Krok sem, krok tam, Ježiš ma miluje.',
    materials: [],
    steps: [],
    lyrics: `Krok sem, krok tam,
Ježiš ma miluje.
Napravo a naľavo,
nech to každý vie.
Zadupaj, zatlieskaj,
radosť v srdci zahorí.
Chyťme sa za ruky,
veď v láske sme jednotní.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/krok-sem-krok-tam/',
  },
  {
    id: 'song-sk-kto-chce-dobry-byt',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kto chce dobrý byť',
    description: 'kto chce dobrý byť, ten nikdy neklame, kto chce dobrý byť, ten pomáha mame,',
    materials: [],
    steps: [],
    lyrics: `kto chce dobrý byť, ten nikdy neklame,
kto chce dobrý byť, ten pomáha mame,
kto chce kamarátov mať, ten nikdy nezradí, ten vie všade poslúchať,nič zle nespraví.
Toho každý chce a vždy ho pochváli.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kto-chce-dobry-byt/',
  },
  {
    id: 'song-sk-kto-je-panom-dzungle',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kto je Pánom džungle',
    description: 'Kto je Pánom džungle - hu-hu, kto Pánom vody - bubla-bubla-bubla, kto je Pánom vesmíru i Pánom mojím. Poviem Vám to:',
    materials: [],
    steps: [],
    lyrics: `Kto je Pánom džungle - hu-hu, kto Pánom vody - bubla-bubla-bubla,

kto je Pánom vesmíru i Pánom mojím. Poviem Vám to:

J - E - Ž - I - Š  je Pánom mojím, On je Pánom vesmíru,

džungle i vody, bubla-bubla-bubla-žblnk.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kto-je-panom-dzungle/',
  },
  {
    id: 'song-sk-kto-stvoril-zmurkajuce-hviezdy',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kto stvoril žmurkajúce hviezdy',
    description: 'Kto stvoril žmurkajúce hviezdy náš Otec Boh.',
    materials: [],
    steps: [],
    lyrics: `Kto stvoril žmurkajúce hviezdy
náš Otec Boh.

Kto stvoril
... vlniace sa more
... lietajúce vtáky
... dupajúce slony
... pichajúcich ježkov
... teba, jeho i mňa.
náš Otec Boh.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kto-stvoril-zmurkajuce-hviezdy/',
  },
  {
    id: 'song-sk-ku-koncu-chyli-sa-den',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ku koncu chýli sa deň',
    description: 'Ku koncu chýli sa deň pred Bohom stojím sám tak sám',
    materials: [],
    steps: [],
    lyrics: `Ku koncu chýli sa deň
pred Bohom stojím sám tak sám
s Ním sa tíško rozprávam.
O tom že slnko zapadá,
o tom že deň sa rozpadá
na tisíc mien.

Stretol som mnoho ľudí dnes
skrížil som mnoho ľudských ciest
tak sám o tom Bohu rozprávam.
Dal som dnes niekoľkým žiaľ,
iným zas úsmev som vzal
v dnešný deň.

Odpoveď počúvam
do ticha znie pár viet.
Hovorí ku mne Pán
prísnu a karhavú reč.
Že či som prišiel na svet bojovať
alebo sa chcem iba hrať
či sa chcem druhým ľuďom darovať
alebo lásku iba brať
a nedávať.

Ku konci deň,
pred Bohom stojím sám tak sám.
S Ním sa tíško rozprávam.
Sľubujem že celý deň
prežijem zajtra preň a pre ľudí.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ku-koncu-chyli-sa-den/',
  },
  {
    id: 'song-sk-kukulienka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kukulienka',
    description: 'Kukulienka, kde si bola, keď tá tuhá zima bola?',
    materials: [],
    steps: [],
    lyrics: `Kukulienka, kde si bola,
keď tá tuhá zima bola?
Hajaja, kukuku,
sedela som na buku.

Sedela som na tom dube,
kde Janíčko drevo rúbe,
hajaja, kukuku,
sedela som na buku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kukulienka/',
  },
  {
    id: 'song-sk-kukulienka-kde-si-bola',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Kukulienka, kde si bola',
    description: 'Kukulienka, kde si bola, keď tá tuhá zima bola? Hajaja, kukuku, sedela som na buku,',
    materials: [],
    steps: [],
    lyrics: `Kukulienka, kde si bola, keď tá tuhá zima bola?
Hajaja, kukuku, sedela som na buku,
hajaja, kukuku, sedela som na buku.

Sedela som na tom dube, kde janíčko drevo rúbe.
Hajaja, kukuku, sedela som na buku,
hajaja, kukuku, sedela som na buku.

Sedela som na tej lávce, kde Janíčko krpce láce
Hajaja, kukuku, sedela som na buku,
hajaja, kukuku, sedela som na buku.

Keď som včera prala šaty, stratila som prsteň zlatý.
Hajaja, kukuku, sedela som na buku,
hajaja, kukuku, sedela som na buku.

Vrabec kričí spoza kríčka, že je prsteň u Janíčka.
Hajaja, kukuku, sedela som na buku,
hajaja, kukuku, sedela som na buku.

Sova volá spod jedličky, že je prsteň u Aničky.
Hajaja, kukuku, sedela som na buku,
hajaja, kukuku, sedela som na buku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kukulienka-kde-si-bola-1/',
  },
  {
    id: 'song-sk-kupil-otec-rybu',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Kúpil otec rybu',
    description: 'Kúpil otec rybu, dnes na svitaní.',
    materials: [],
    steps: [],
    lyrics: `Kúpil otec rybu,
dnes na svitaní.
Už si pekne pláva
doma vo vani.
Sem tam hodí chvostom,
sem tam spraví čľup,
len sa milý kaprík
len sa pekne kúp.

Kúpil otec rybu,
veľkú ako hrom.
Rybinou a sviatkom
vonia celý dom.
Od rána sa v izbe
stromček ligoce.
Kúpil otec rybu,
veď sú Vianoce.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/kupil-otec-rybu/',
  },
  {
    id: 'song-sk-last-christmas',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Last Christmas',
    description: 'Last Christmas, I gave you my heart But the very next day, You gave it away',
    materials: [],
    steps: [],
    lyrics: `Last Christmas, I gave you my heart
But the very next day, You gave it away
This year, to save me from tears
I'll give it to someone special

Last Christmas, I gave you my heart
But the very next day, You gave it away
This year, to save me from tears
I'll give it to someone special

Once bitten and twice shy
I keep my distance
but you still catch my eye
Tell me baby do you recognise me?
Well it's been a year, it doesn't surprise me

(Merry Christmas!)
I wrapped it up and sent it
With a note saying "I Love You" I meant it
Now I know what a fool I've been
But if you kissed me now
I know you'd fool me again

Last Christmas, I gave you my heart
But the very next day, You gave it away
This year, to save me from tears
I'll give it to someone special

Last Christmas, I gave you my heart
But the very next day, You gave it away
This year, to save me from tears
I'll give it to someone special

(Oooh. Oooh My Baby)

A crowded room, friends with tired eyes
I'm hiding from you and your soul of ice
My God I thought you were someone to rely on
Me? I guess I was a shoulder to cry on
A face on a lover with a fire in his heart
A man undercover but you tore me apart
Oooh Oooh
Now I've found a real love you'll never fool me again

Last Christmas, I gave you my heart
But the very next day, You gave it away
This year, to save me from tears
I'll give it to someone special

Last Christmas, I gave you my heart
But the very next day, You gave it away
This year, to save me from tears
I'll give it to someone special

A face on a lover with a fire in his heart
(Gave you my heart)
A man undercover but you tore me apart
Next year
I'll give it to someone, I'll give it to someone special
special
someoneInterpret: Wham`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/last-christmas/',
  },
  {
    id: 'song-sk-letia-letia-babie-leta',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Letia, letia, babie letá',
    description: 'Letia, letia, babie letá až tam kdesi na kraj sveta.',
    materials: [],
    steps: [],
    lyrics: `Letia, letia, babie letá
až tam kdesi na kraj sveta.

Prší dáždik, prší z mrakov
do šípok a do bodliakov.

Sadá, sadá, večer hmlistý
na hrdzavé, žlté listy.

Prídi sniežik sniežik biely
vtáci už preč odleteli.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/letia-letia-babie-leta/',
  },
  {
    id: 'song-sk-lienka-krasolienka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Lienka Krasolienka',
    description: 'Ja som lienka Krasolienka a toto je krajina naša, je to náš svet, krajšieho niet, darmo by si ho hľadal.',
    materials: [],
    steps: [],
    lyrics: `Ja som lienka Krasolienka a toto je krajina naša,
je to náš svet, krajšieho niet, darmo by si ho hľadal.

Kto chce ten svet môže, miesta je dosť tak čožee
tralalaal tralalaa nože poď k námm hihihi.

Ja som oskarabus, oskarabus skákavý preskáčeme
každé ráno tam kde nás to napadloo

Volajú ma Krasolienka a toto je krajina naša,
je to náš svet krajšieho niet darmo by si ho hľadal`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/lienka-krasolienka/',
  },
  {
    id: 'song-sk-lienka-lenka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Lienka Lenka',
    description: 'Lienka Lenka stratila z kabátika bodku, teraz plače, nevie kam sa odkotúľala.',
    materials: [],
    steps: [],
    lyrics: `Lienka Lenka stratila z kabátika bodku,
teraz plače, nevie kam sa odkotúľala.
Večer má prísť fotograf urobiť jej fotku,
práve táto bodka jej tak veľmi pristala.

Našťastie má kamarátov 1 000 mravčekov,
vybrali sa hľadať bodku všade navôkol.

Lienka Lenka neplače, našli bodku mravce,
v školskej taške v písanke malej aničky
Však nikto nesmie z úlohy zobrať bodku kam chce,
veď Anička mala vždy len samé jedničky.
A tá bodka za vetou tak veľmi chýbala,
až anička prvú dvojku včera dostala

Lienka Lenka prišíva bodku na kabátik,
zrazu na ňu kvapla slza z líčka Aničky.
Lenka sa hneď rozhodla, že jej bodku vráti
a spolu píšu úlohy vždy na jedničky.

Často chýba ku šťastiu len bodka malá
až na koniec pesničky sa takto dostala

Lienka Lenka
Lienka Lenka
Lienka Lenka
Lienka Lenka stratila z kabátika bodku.Interpret: Michaela Pašteková`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/lienka-lenka/',
  },
  {
    id: 'song-sk-lietala-si-lastovicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Lietala si lastovička',
    description: 'Lietala si lastovička, lietala, že sa ona neba, zeme týkala.',
    materials: [],
    steps: [],
    lyrics: `Lietala si lastovička, lietala,
že sa ona neba, zeme týkala.

Priletel k nej krahulíček, čierny vták:
Či sa budeš lastovička vydávať?

Budem sa ja, krahulíček, vydávať,
keď sa bude suchý javor zelenať.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/lietala-si-lastovicka/',
  },
  {
    id: 'song-sk-lochneske-priserky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Lochneské príšerky',
    description: 'Hej vážení a milí, už z jazera vychádzajú práve príšerky priamo  k vám: veď stará povesť spomína, že žili sťa jedna rodina a nik z tej slávnej familie nikdy nie je saaaam. Ak máš dobrodružstva rád, s rodinou si kamarát, všetci o všetko sa s tebou radi podelia. Nemusíš sa vôbec báť, veď chcú ti pomôcť chcú sa hrať, takto sa správajú iba ti najlepší priateliaaaaaaaa.',
    materials: [],
    steps: [],
    lyrics: `Hej vážení a milí, už z jazera vychádzajú práve príšerky priamo  k vám: veď stará povesť spomína, že žili sťa jedna rodina a nik z tej slávnej familie nikdy nie je saaaam. Ak máš dobrodružstva rád, s rodinou si kamarát, všetci o všetko sa s tebou radi podelia. Nemusíš sa vôbec báť, veď chcú ti pomôcť chcú sa hrať, takto sa správajú iba ti najlepší priateliaaaaaaaa.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/lochneske-priserky/',
  },
  {
    id: 'song-sk-louceni-louceni',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Loučení,loučení',
    description: 'Loučení,loučení což je to těžká věc',
    materials: [],
    steps: [],
    lyrics: `Loučení,loučení
což je to těžká věc
když se musí rozloučiti
když se musí rozloučiti
s panenkou mládenec`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/loucenilouceni/',
  },
  {
    id: 'song-sk-macka-ci-ci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Mačka či-či',
    description: 'mačka Či-či, tuláčka Či-či obojok má zo zlata Či-či',
    materials: [],
    steps: [],
    lyrics: `mačka Či-či, tuláčka Či-či
obojok má zo zlata Či-či
z ľudí nemá strach a skáče po autách

každý kričí poď sem ty Či-či
chcú to zlato - že to je Či-či
zlatý obojok chce už každý cvok

mačky chcú len slobodu zvierat
ľudia len pre zlato umierať

naháňačka, kto prvý chytí tú Či-či

ja som Či-či, tuláčka Či-či
obojok mám zo zlata Či-či
ak mi pokoj dáš, poviem - tu ho máš!

každý kričí poď sem ty Či-či
chcú to zlato - že to je Či-či
zlatý obojok chce už každý cvok

trezor môjho srdca má číslo
presne koľko mačka má zmyslov
trezor môjho srdca má heslo len Či-či`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/macka-ci-ci/',
  },
  {
    id: 'song-sk-macko-usko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Macko Uško',
    description: 'Dobrý večer, na dobrú noc Macko z plyšu, spieva vám',
    materials: [],
    steps: [],
    lyrics: `Dobrý večer, na dobrú noc
Macko z plyšu, spieva vám
volajú ma Macko Uško
lebo smiešne uško mám

Huncút som a rád sa hrám
s humorom je predsa fuška
všetky deti rád ja mám
to je heslo Macka Uška. Rýchlo do postieľok, veď už mesiac svieti
 rozlúčte sa s Mackom. Dobru noc vám, deti! Interpret: Michal Dočolomanský`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/macko-usko/',
  },
  {
    id: 'song-sk-mal-som-sedem-grajciarov',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Mal som sedem grajciarov',
    description: 'Mal som sedem grajciarov, grajciarov, nosil som ich, litom lititom, za sárou.',
    materials: [],
    steps: [],
    lyrics: `Mal som sedem grajciarov, grajciarov,
nosil som ich, litom lititom, za sárou.

Tri som minul, štyri mám, štyri mám,
čo ti milá, litom lititom, kúpiť mám?

Kúpil som jej čižmičky, čižmičky
na jej biele, litom lititom,, nožičky.

Kúpil som jej obrúčku, obrúčku,
dala si ju, litom lititom, na rúčku.

Kúpil som jej korále, korále,
nosila ich, litom lititom, na bále.

Kúpil som jej zrkadlo, zrkadlo,
voľakde jej, litom lititom, vypadlo.

Či v kostole, či v tanci, či v tanci,
či ho našli litom, lititom, mládenci?

Kto ho našiel, nech ho má, nech ho má,
nech sa doňho, litom lititom, pozerá.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/mal-som-sedem-grajciarov-1/',
  },
  {
    id: 'song-sk-mala-hviezdicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Malá hviezdička',
    description: 'Bola raz malá, malá hviezdička, Zviedla ju mliečna, mliečna cestička.',
    materials: [],
    steps: [],
    lyrics: `Bola raz malá, malá hviezdička,
Zviedla ju mliečna, mliečna cestička.
Zvolala zbohom družice,
vidieť chcem svetov tisíce.

Prvý deň letí, letí do sveta,
Pýchou sa celá, celá trblieta.
Druhý deň hlávku zmotanú má,
v plameňoch horí od rána.

V tretí deň na smrť, na smrť znavená,
padla k nám hviezda ako z kameňa.
Uhli sa hrudy studené,
schovali hviezdu do zeme.

Bola raz malá, malá hviezdička,
zviedla ju mliečna, mliečna cestička.
Umrela hviezda maličká,
končí sa o nej pesnička.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/mala-hviezdicka/',
  },
  {
    id: 'song-sk-male-koniky-lubi-boh',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Malé koníky ľúbi Boh',
    description: 'Malé koníky ľúbi Boh hoc sú len zvieratká.',
    materials: [],
    steps: [],
    lyrics: `Malé koníky ľúbi Boh
hoc sú len zvieratká.
A keďže malé koníky ľúbi Boh
On ľúbi tiež aj mňa.
On ľúbi ma, On ľúbi ma,
On veľmi ľúbi ma.
A keďže malé koníky ľúbi Boh
On ľúbi tiež aj mňa.

... žabky
... mravčeky
... vtáčiky
... rybičky`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/male-koniky-lubi-boh/',
  },
  {
    id: 'song-sk-male-kote-spalo-v-bote',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Malé kotě spalo v botě',
    description: 'Malé kotě, spalo v botě, nehas co tě, nepá nepálí.',
    materials: [],
    steps: [],
    lyrics: `Malé kotě, spalo v botě,
nehas co tě, nepá nepálí.

A my jsme kotě, spáti v botě,
po robotě, necha nechali.

To co kotě poví tím jedním pohledem.
To my ani slovy povědět nesvedem.

Věz že kotě, co spí v botě,
to tě v botě, potě potěší.

Hoši a děvčata, pěstujte koťata,
Země je kulatá a místa je tu dost.

Kotě je solidní, nervy vám uklidní.
Nebuďte nevlídní, a hned vás přejde zlost.

Malé kotě, spalo v botě,
nehas co tě, nepá nepálí.

A my jsme kotě, spáti v botě,
po robotě, necha nechali.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/male-kote-spalo-v-bote/',
  },
  {
    id: 'song-sk-malovana-abeceda',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Maľovaná abeceda',
    description: 'Adam v škole nesedel, abecedu nevedel,',
    materials: [],
    steps: [],
    lyrics: `Adam v škole nesedel,
abecedu nevedel,
prišli k nemu líšky,
čítajú mu z knižky.

Bľačia ovce za rána,
bača pečie barana,
babke tečú slinky,
na kus baraninky.

Cmúľal by som, nemám čo,
dajteže mi voľačo,
že som dobrý chlapec,
dajte hrozna strapec!

Čučoriedky černice,
mám ich vyše čapice,
tuto si ich majte,
čokolády dajte!

Dedo, deti - rodina,
dub pri dube - dubina.
Zaspievali vtáky:
- Poďte na dubáky!

Ďobe ďatel do kôry,
červíček mu hovorí:
- Neďob v moju ríšu,
rozďobeš mi skrýšu!

Eva ide s Editou
za zelenou rakytou.
Vydávaj sa, Evka,
si už veľká dievka!

Filoména, chudera,
sadla vedľa šoféra.
Filoména jajká,
že mu smrdí fajka.

Gágal gunár na dvore,
až mu vyschlo v gágore,
húska krajšie gága,
v potoku sa mága.

Hudú hudci na husle,
jeden dobre, druhý zle,
Hana s Hanou háda,
čo to za paráda.

Chystal sa pes na muchu,
chňapol blchu v kožuchu,
už má blchu v bruchu
a na uchu muchu.

Išiel Ivo po pivo,
točili mu nakrivo,
veľa piva mali,
samú penu dali.

Javorové koryto,
v tom koryte jelito,
pri jelite mačka,
bola zabíjačka.

Kukurica, pšenica
pchá sa káčer, kačica,
kukurice fúra,
napchá sa aj kura.

Lipa, lipeň, labuda,
Lapaj náš mi labu dá,
keď sa za to hanbí,
oblíže si gamby.

Ľudo ľúbi fazuľu,
zjedol by jej za fúru,
ale zato Peter
radšej klobás meter.

Mraučí mačka pod múrom,
mačka miauká s kocúrom
a v komore myši
maškrtia si z misy.

Naša Anča hrýzla hlúb,
zlomila si na ňom zub.
Janíček jej reční:
- Neplač, veď bol mliečny!

Ňuchá šteňa tu i tu,
strčí ňufák do medu,
na tom mede včela,
poštípať ho chcela!

Oľa, Ela, Elena!
- ozýva sa ozvena,
odpovedá bralo:
- Ondro, Ďuro, Paľo!

Premrzli mi paprče,
požičaj mi papuče,
po papučiach boty,
pôjdem do roboty.

Q sa číta ako kvé,
jazyk sa mi pokrkve,
ale nech len skúsi,
či sa nenabrúsi!

Ružena a Mária
rozum berú z rádia,
aj ja si ho zapnem,
rozumu si kvapnem.

Sladko spí si sedmospáč.
Slnko svieti, vstávať ráč!
Sedmospáč je Samko.
Oblejte ho mamko!

Šuchtá - buchta šušušú,
pošuškám ti do ušú:
Tu na tomto ušku
chytil som ti blšku.

Telefón si k uchu dám.
Volám: Haló, kto je tam?
- Haló, tu je tetka!
- A tu malá Betka!

Ťarbavý si, Maťo náš,
a vždy dačo fidlikáš.
Pusť ten krivák z hrsti,
porežeš si prsty!

Urobím si udicu,
chytím pstruha, belicu,
ulovím aj šťuku,
upečiem ju v tuku.

Váh je voda veliká,
utopí sa motyka,
ale naša Hanka
pláva ako slamka.

X a X sú dva iksy,
ak vieš skočiť, chlapík si,
ako kocúr Félix
preskakuje cez X.

Ypsilon môj, kdeže si?
Vzal som si ťa do kapsy,
spravím z teba zázrak:
budeš dobrý na prak!

Zvonár ťahá za motúz,
zaplietol si doňho fúz,
teraz ho to mrzí,
že má dlhé fúzy.

Žaba, žaba maličká,
skáč si pekne, žabička,
na vodu ťa hádžem,
mocne, ako vládzem.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/malovana-abeceda/',
  },
  {
    id: 'song-sk-maly-poctar',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Malý počtár',
    description: 'Jeden, dva, tri štyri, päť, spočítam si všetko hneď!',
    materials: [],
    steps: [],
    lyrics: `Jeden, dva, tri štyri, päť,
spočítam si všetko hneď!

Päť prštekov na ruke,
päť kvietočkov na lúke,
päť guľôčok v jednej jamke,
utekajme k našej mamke!

Jeden, dva, tri, štyri, päť,
už to vieme naspamäť!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/maly-poctar/',
  },
  {
    id: 'song-sk-mam-dobru-babu',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Mam dobrú babu',
    description: 'Kam sa na mňa hrabú ja mám dobrú babu, keď v škole nemám nerváky posiela mi ťaháky.',
    materials: [],
    steps: [],
    lyrics: `Kam sa na mňa hrabú ja mám dobrú babu,
keď v škole nemám nerváky posiela mi ťaháky.
Kam sa na mňa hrabú ja mám dobrú babu,
keď sa mi život hnusí posiela mi pusy.
Zas iba iba samé poučky,
zas iba iba samé čísla,
raz sa tu ale možno umučím,
tak ma to bolí rozmýšľať.Čakám na zázrak pošli mi ťahák.
Kam sa na mňa hrabú ja mám dobrú babu,
keď v škole nemám nerváky posiela mi ťaháky.
Kam sa na mňa hrabú ja mám dobrú babu,
keď sa mi život hnusí posiela mi pusy.Zas iba iba samé skúšanie,
zas iba strach a tréma,
všetci sa trasú iba ona nie pohladiť očami vie ma,
našepká mi tak že privolá zázrak.Zas iba iba samé poučky,
zas iba iba samé čísla,
raz sa tu ale možno umučím tak ma to bolí rozmýšľať,
čakám na zázrak, pošli mi ťahák.Kam sa na mňa hrabú ja mám dobrú babu,
keď v škole nemám nerváky posiela mi ťaháky.
Kam sa na mňa hrabú ja mám dobrú babu,
keď sa mi život hnusí posiela mi pusy.Kam sa na mňa hrabú ja mám dobrú babu,
keď v škole nemám nerváky posiela mi ťaháky.
Kam sa na mňa hrabú ja mám dobrú babu,
keď sa mi život hnusí posiela mi pusy. Interpret: Martin Madej`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/mam-dobru-babu/',
  },
  {
    id: 'song-sk-mama-je-mama',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Mama je mama',
    description: 'mama je mama stále ju máš nad tvojím spánkom vždy drží stráž',
    materials: [],
    steps: [],
    lyrics: `mama je mama stále ju máš
nad tvojím spánkom vždy drží stráž
mama je vždy mama
daruje ti reč
mama je vždy mama
keď všetci zmiznú preč

tisíc kvietkov plných holubov odniesieš za oceán
dlhú cestu poletia až kým vrátia sa vždy presne tam

tisíc kvietkov plných holubov odniesieš za oceán
dlhú cestu poletia až kým vrátia sa vždy presne tam
-kde si ich od mamy vzal

mama je mama, stále ju máš
nad tvojím spánkom vždy drží stráž
mama je vždy mama
daruje ti reč
mama je vždy mama
keď všetci zmiznú preč

tisíc kvietkov plných holubov odniesieš za oceán
 dlhú cestu poletia až kým vrátia sa vždy presne tam

 tisíc kvietkov plných holubov odniesieš za oceán
 dlhú cestu poletia až kým vrátia sa vždy presne tam
 -kde si ich od mamy vzal

mama je mama stále ju máš
pár lúčnych kvietkov jej za lásku zviaž
mama je vždy mama
unesie tvoj kríž
mama je vždy mama
kým v horúčke spíš

mama je mama stále ju máš
pár lúčnych kvietkov jej za lásku zviaž`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/mama-je-mama/',
  },
  {
    id: 'song-sk-mandarinka-darinka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Mandarínka Darinka',
    description: 'Jeden pomaranč sa zaľúbil raz do Darinky mandarínky',
    materials: [],
    steps: [],
    lyrics: `Jeden pomaranč sa zaľúbil raz
do Darinky mandarínky
vedel o tom už celý strom
že už je na svadbu čas.

Ale niekto vtom vyšiel na strom
a obral všetky mandarínky
a poslal ich tam, vlakom až k nám
aj s mandarínkou Darinkou.

Išla dvadsať dní a dvadsať nocí
a stále cestou plakala
od lásky odísť, to je zlý pocit
bála sa toho od mala.

Ráno predavač počul tichučký plač
keď z výkladu si niekto kúpil
pre jeho decká priamo z Grécka
mandarínku Darinku.

Doma detí šesť a chceli ju zjesť
keď počujú vtom tenkým hláskom:
Ahoj decká, ja som z Grécka,
som mandarínka Darinka.

Dovoľujem si pozvať aj vás
na krásnu svadbu priamo k nám
baľte kufre hneď dokiaľ je čas
môj ženích je niekde sám.

Došli práve včas, keď pomaranča
chceli zobrať už do ranča
a nebol by už Darinkin muž
ale len chladený džús.

Svadba bola krásna a veselá
spievali aj noví priatelia
Deti s Darinkou, aj chlapi z ranča
až ráno zaspali od tanca.

Jeden pomaranč sa zaľúbil raz
do Darinky mandarínky.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/mandarinka-darinka/',
  },
  {
    id: 'song-sk-marniva-sestrenice',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Marnivá sestřenice',
    description: 'Měla vlasy samou loknu, jé-jé-je, ráno přistoupila k oknu, jé-jé-je,',
    materials: [],
    steps: [],
    lyrics: `Měla vlasy samou loknu, jé-jé-je,
ráno přistoupila k oknu, jé-jé-je,
vlasy samou loknu měla a na nic víc nemyslela,
a na nic víc nemyslela, jé – jé - jé.
Nutno ještě podotknouti, jé-je-jé,
 že si vlasy kulmou kroutí, jé-je-jé,
nesuší si vlasy fénem,
nýbrž jen tak nad plamenem,
nýbrž jen tak nad plamenem, jé-jé-jé.
Jednou vlasy sežehla si, jé-je-jé, tím pádem je konec krásy, jé-je-jé,
když přistoupí ráno k oknu,
 nemá vlasy samou loknu,
nemá vlasy samou loknu, jé-jé-jé.
O vlasy už nestará se, jé-je-jé,
a diví se světa kráse, jé-je-jé,
vidí plno jinejch věcí,
 a to za to stojí přeci,
a to za to stojí přeci, jé-jé-jé.

Jé Jé Je`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/marniva-sestrenice/',
  },
  {
    id: 'song-sk-medvedku-daj-labku',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Medveďku, daj labku',
    description: 'Medveďku, daj labku, pôjdeme na svadbu. Medvedica ráno vstala,  všetky deti vychystala,',
    materials: [],
    steps: [],
    lyrics: `Medveďku, daj labku, pôjdeme na svadbu.
Medvedica ráno vstala,  všetky deti vychystala,
medveďku, daj labku, pôjdeme na svadbu.  Medveďku daj labku, pôjdeme pre babku,
vezmeme ju do dediny, odreže nám kus slaniny.
Medveďku daj labku.

Medveďku,daj nôžku, pôjdeme pre Božku,
vezmeme ju až do mesta, upečie nám koláč z cesta.
Medveďku,daj nôžku.

Medveďku,daj hlávku, pôjdeme pre Slávku.
Vezmeme ju hneď do lesa, prinesie nám kúsok mäsa.
Medveďku daj hlávku.

Medveďku,kamarát, jedlo máš veľmi rád.
Skryjeme sa tam na lúku, najeme sa do popuku.
Medveďku,daj labku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/medvedku-daj-labku-1/',
  },
  {
    id: 'song-sk-miazgovci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Miazgovci',
    description: 'Vážení je čas na dlhu púť, na krásny výlet, už roky robím si chuť. Tak leťme po vode, po suchu, po zemi vo vzduchu. Kúpme si lietadlo, len aby nespadlo. Paula, Gejza, Daviš, Krista a malý Aladár',
    materials: [],
    steps: [],
    lyrics: `Vážení je čas na dlhu púť, na krásny výlet, už roky robím si chuť. Tak leťme po vode, po suchu, po zemi vo vzduchu.
Kúpme si lietadlo, len aby nespadlo. Paula, Gejza, Daviš, Krista a malý Aladár

Nás čaká kopec krásy. Kde?  Pod modrou oblohou.
Budú sa diať veľké veci, tu slnko hriať, viac ako v peci.
Som z toho vedľa, báječné jedla.
Je to jasne veď sme chlapi, ani púť nás neprekvapí.

Ber si príklad od tuleňa, vie si vždy nájsť kúsok tieňa

Modzila to rozľahlá je v diaľke vidno je Himaláje.
Komu je tu veľká zima, ten mal radšej zostať doma.

Skvele auto, interhotel, nosič kufrov kam sa podel.
Zo všetkým si vieme rady, hurá, hurá, sledujte nás vážení.

Vážení je čas na dlhú púť, na krásny výlet si roky robíme chuť. Čaká nás milión zážitkov dosť bolo slov
Svet už nám máva, výprave sláva, keď sa z diaľok domov vráti správu dá ti...Ja, ja, ja, ja`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/miazgovci/',
  },
  {
    id: 'song-sk-mikulasku-dobry-strycku',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Mikulášku, dobrý strýčku',
    description: 'Mikulášku, dobrý strýčku, modlím sa ti modlitbičku,',
    materials: [],
    steps: [],
    lyrics: `Mikulášku, dobrý strýčku,
modlím sa ti modlitbičku,
zlož tú svoju plnú tašku,
daj nám z darov tvojich trošku,
či koláča makového,
či koníka medového.
Veď ty, svätý Mikuláš,
veľa dobrých darov máš.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/mikulasku-dobry-strycku-1/',
  },
  {
    id: 'song-sk-modrej-dym',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Modrej dym',
    description: 'Svůj svět mám a na dluh nedýchám, někdy víc než smích, slzy k ránu počítám.',
    materials: [],
    steps: [],
    lyrics: `Svůj svět mám a na dluh nedýchám,
někdy víc než smích, slzy k ránu počítám.
Na mých rtech je déšť a z očí padá sůl a kdy je láska čistá a kdy věřit jenom snům.

R: 1x
Jen tvůj stín a lehce modrej dým, moc se mi nezdá ta vůně kopretin.
Jen tvuj stín a lehce modrej dým nejsem si jistá, že tvůj hlas uslyším.

Proč se ptám mám nemám a jak dál a koho zásluhou jako věc si připadám.
Mizí kouř po ohni kouř, vzduchem se vznáší modrej dým, sliby někdy ztrácí význam a já ti nevěřím.

R:1x
Jen tvůj stín a lehce modrej dým, moc se mi nezdá ta vůně kopretin.
Jen tvuj stín a lehce modrej dým nejsem si jistá, že tvůj hlas uslyším.

Den schází se s tmou a mé sny s tebou začíná hrou, proč si stále sám, s kopretinou je lež o nás dvou, máš nebo nemáš mě lásko rád.

R:1x
Jen tvůj stín a lehce modrej dým, moc se mi nezdá ta vůně kopretin.
Jen tvuj stín a lehce modrej dým nejsem si jistá, že tvůj hlas uslyším.

Na na na na na
aj ou jé

R: 2x
Jen tvůj stín a lehce modrej dým, moc se mi nezdá ta vůně kopretin.
Jen tvuj stín a lehce modrej dým nejsem si jistá, že tvůj hlas uslyším.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/modrej-dym/',
  },
  {
    id: 'song-sk-moj-boh',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Môj Boh',
    description: 'Môj Boh, vďaka Tebe dýcham pre Teba tu som.',
    materials: [],
    steps: [],
    lyrics: `Môj Boh, vďaka Tebe dýcham
pre Teba tu som.
A viem, láskou si ma získal,
k sebe priviedol.

Smútok je preč, šťastím ma napĺňaš.
Učíš ma láskou žiť.

R.:
Tvoja láska je silnejšia, než vietor,
ona vyššia je, než najvyšší štít.
Hlbšia je, než dno oceánov,
/: zmenila môj svet. :/`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moj-boh/',
  },
  {
    id: 'song-sk-moja-babika',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Moja bábika',
    description: 'Mám ja doma malú bábu, červenú má sukničku,',
    materials: [],
    steps: [],
    lyrics: `Mám ja doma malú bábu,
červenú má sukničku,
každý večer skôr než zaspím,
zanôtim jej pesničku.

Potom ona po celú noc,
sladko so mnou buvinká.
Skoro ráno prvá vstáva
moja bába malinká.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moja-babika/',
  },
  {
    id: 'song-sk-moja-mamka-nieco-ma',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Moja mamka niečo má',
    description: 'Moja mamka niečo má, schovala to do sena.',
    materials: [],
    steps: [],
    lyrics: `Moja mamka niečo má,
schovala to do sena.
A to boli orechy,
bolo ich tam dva mechy.

Naša Anna hrušky má,
schovala ich do sena.
A ja som ich vyhľadal,
keď som koňom seno bral.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moja-mamka-nieco-ma-1/',
  },
  {
    id: 'song-sk-moja-zlata-mamina',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Moja zlatá mamina',
    description: 'Moja zlatá mamina, mamka láskavá, každý večer piesňou ma do sna uspáva.',
    materials: [],
    steps: [],
    lyrics: `Moja zlatá mamina, mamka láskavá,
každý večer piesňou ma do sna uspáva.
Skôr než zaspím, pobozká ma na obe líčka
moja zlatá mamina, mamka, mamička.

Postieľka je pred spaním pekne ustlaná.
Budem v nej po rozprávke snívať do rána.
Na bielučkom vankúši i v mäkkej perine,
o tej mojej láskavej, zlatej mamine.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moja-zlata-mamina/',
  },
  {
    id: 'song-sk-moje-male-svetielko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Moje malé svetielko',
    description: 'Moje malé svetielko, chcem aby svietilo.',
    materials: [],
    steps: [],
    lyrics: `Moje malé svetielko,
chcem aby svietilo.

Ježiš mi ho zapálil,
chcem aby svietilo.

Pod nádobu skryť ho nie,
chcem aby svietilo.

Nikto mi ho nesfúkne,
chcem aby svietilo.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moje-male-svetielko/',
  },
  {
    id: 'song-sk-moje-mile-premilene-ceresne',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Moje milé premilené čerešne',
    description: 'Moje milé premilené čerešne, všetky ste sa rozsypali po ceste.',
    materials: [],
    steps: [],
    lyrics: `Moje milé premilené čerešne,
všetky ste sa rozsypali po ceste.

®: Kto vás dostane, ten vás dostane,
nechže sa len mojej milej krivda nestane.

Moje milé premilené jahody, všetky ste mi popadali do vody.

®:

Moje milé premilené maliny, spadli ste mi do hlbokej doliny.

®:

Moje milé premilené černice, spadli ste mi do hlbokej studnice.

®:`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moje-mile-premilene-ceresne-1/',
  },
  {
    id: 'song-sk-moje-mile-premilene-jahody',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Moje milé premilené jahody',
    description: 'Moje milé premilené jahody všetky ste mi popadali do vody.',
    materials: [],
    steps: [],
    lyrics: `Moje milé premilené jahody
všetky ste mi popadali do vody.
Kto vás dostane nech vás dostane,
nechže sa len mojej milej krivda nestane.

Moje milé premilené maliny,
padli ste mi do hlbokej doliny.

Moje milé premilené černice,
padli ste mi do hlbokej studnice.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/moje-mile-premilene-jahody-1/',
  },
  {
    id: 'song-sk-na-dobru-noc',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Na dobrú noc',
    description: 'Slnko zašlo. Vtáčky stíchli, zobáčky pod krídla pichli.',
    materials: [],
    steps: [],
    lyrics: `Slnko zašlo. Vtáčky stíchli,
zobáčky pod krídla pichli.
Vetrík šumí – haju-haju!
Kvietky sladko usínajú.

Svrčkovi sa nechce spať,
že si bude ešte hrať.
A tak celý večer hral,
skoro struny potrhal.

Mesiačik si podriemkaval.
A hviezdičky žmurkali.
A vtáčkom sa v celej stráni
sladké sníčky snívali.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/na-dobru-noc/',
  },
  {
    id: 'song-sk-na-hada',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Na hada',
    description: 'Dnes je veľká paráda, my sa hráme na hada.',
    materials: [],
    steps: [],
    lyrics: `Dnes je veľká paráda,
my sa hráme na hada.

Hustým lesom preliezame,
cestu chvostom zametáme.

Dnes je veľká paráda,
my sa hráme na hada.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/na-hada/',
  },
  {
    id: 'song-sk-narodil-sa-kristus-pan',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Narodil sa Kristus Pán',
    description: 'Narodil sa Kristus Pán, veseľme sa! Z ruže kvietok skvitol nám, radujme sa!',
    materials: [],
    steps: [],
    lyrics: `Narodil sa Kristus Pán, veseľme sa!
Z ruže kvietok skvitol nám, radujme sa!
Zo života čistého, z rodu kráľovského,
Kristus Pán narodil sa.Prorokmi nám hlásaný, veseľme sa!
Na svet nám poslený, radujme sa!
Zo života čistého, z rodu kráľovského,
Kristus Pán narodil sa.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/narodil-sa-kristus-pan-1/',
  },
  {
    id: 'song-sk-o-com-sniva-sen',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'O čom sníva sen',
    description: 'Zaspievam ti pieseň snáď aj o šťastí, o snoch, ktoré plávu tmou bez starostí.',
    materials: [],
    steps: [],
    lyrics: `Zaspievam ti pieseň snáď aj o šťastí,
o snoch, ktoré plávu tmou bez starostí.
Zaspievam ti pieseň, pár ich ešte mám,
o tebe a o mne, refrén príde sám.
Povie ti aj vietor, o čom sníva sen,
zaspievam ti pieseň, kým ju zabudnem.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/o-com-sniva-sen/',
  },
  {
    id: 'song-sk-o-zajacikoch',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'O zajačikoch',
    description: 'Poznáte zajka, čo vždy krčí nos? Farbieva vajká deťom pre radosť.',
    materials: [],
    steps: [],
    lyrics: `Poznáte zajka, čo vždy krčí nos?
Farbieva vajká deťom pre radosť.
A u nich doma všetci spolu
chodia na maliarsku školu
a zajačí šlabikár
učia sa tam každú jar.

Zajkovie mamka mieša farbičky,
zajkovie ocko plní mištičky.
A malá sestra varí slíže,
malý braček štetce líže,
veľká sestra, ktorá prišla,
všetkým vzorky vymýšľa.

Tak farbí vajcia celá rodina,
keď kvitnú kvietky a jar začína.
A všetky štetce, všetky labky
maľujú, veď čas je krátky,
aby bolo vajec dosť,
všetkým deťom pre radosť!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/o-zajacikoch/',
  },
  {
    id: 'song-sk-o-zvieratkach',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'O zvieratkách',
    description: 'Pozerá sa zajko zvedavý, čo to naňho padá do trávy.',
    materials: [],
    steps: [],
    lyrics: `Pozerá sa zajko zvedavý,
čo to naňho padá do trávy.
Cupicup, cupicup,
žalude naň hádže dub.

Priletela sojka z doliny,
vraj má celkom čerstvé noviny:
Škreki-škrek, škreki-škrek,
oženil sa s jedľou smrek.

Vyčkávala líška zopár dní,
na sliepky pri starej horárni.
Šuchi-šuch, šuchi-šuch,
takmer prišla o kožuch.

Čo tu kmotru straku napadlo?
Ukradla si kdesi zrkadlo.
Cheche-krá, cheche-krá,
teraz sa v ňom obzerá.

Kukulienka ráno spod buka
dvakrát pekne deťom zakuká:
kuku-kuk, kuku-kuk
a už viacej ani muk.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/o-zvieratkach/',
  },
  {
    id: 'song-sk-old-macdonald',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Old MacDonald',
    description: 'Old MacDonald had a farm,E-I-E-I-O. And on the farm he had a cows E-I-E-I-O.',
    materials: [],
    steps: [],
    lyrics: `Old MacDonald had a farm,E-I-E-I-O.
And on the farm he had a cows E-I-E-I-O.
With a moo,moo here and a moo
moo there,Here a moo,there a moo
Everywhere a moo,moo.

Old MacDonald had a farm,E-I-E-I-O..
And on the farm he had a chicks,E-I-E-I-O.
With an cluck,cluck here and an cluck,
cluck there.Here a cluck, there a cluck.Everywhere an cluck,cluck.
With a moo,moo here and a moo
moo there,Here a moo,there a moo
Everywhere a moo,moo.

Old MacDonald had a farm,E-I-E-I-O..
And on the farm he had a sheeps,E-I-E-I-O.
With an baa baa here and an baa, baa there. Here baa, there baa. Everywhere an baa, baa.
With an cluck,cluck here and an cluck,
cluck there.Here a cluck, there a cluck.Everywhere an cluck,cluck.
With a moo,moo here and a moo
moo there,Here a moo,there a moo
Everywhere a moo,moo.

Old MacDonald had a farm,E-I-E-I-O..
And on the farm he had a pigs,E-I-E-I-O.
With a oink oink here and a oink oink there, Here oink, there oink. Everywhere a oink oink. With an baa baa here and an baa, baa there. Here baa, there baa. Everywhere an baa, baa.
With an cluck,cluck here and an cluck,
cluck there.Here a cluck, there a cluck.Everywhere an cluck,cluck.
With a moo,moo here and a moo
moo there,Here a moo,there a moo
Everywhere a moo,moo.

Old MacDonald had a farm,E-I-E-I-O..
And on the farm he had a ducks,E-I-E-I-O.
With a quack quack here and a quack quack there, here quack there quack. Everywhere a quack quack.With a oink oink here and a oink oink there, Here oink, there oink. Everywhere a oink oink. With an baa baa here and an baa, baa there. Here baa, there baa. Everywhere an baa, baa.
With an cluck,cluck here and an cluck,
cluck there.Here a cluck, there a cluck.Everywhere an cluck,cluck.
With a moo,moo here and a moo
moo there,Here a moo,there a moo
Everywhere a moo,moo.

Old MacDonald had a farm, E-I-E-I-O .......`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/old-macdonald/',
  },
  {
    id: 'song-sk-ovocnickovia',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Ovocníčkovia',
    description: 'My nie sme bratia sestry, no život máme pestrý, my sme Ovocníčkovia, všetci sme dobrí kamaráti.',
    materials: [],
    steps: [],
    lyrics: `My nie sme bratia sestry, no život máme pestrý,
my sme Ovocníčkovia, všetci sme dobrí kamaráti.
Každý z nás je iný z ríše zeleniny a tiež z ríše ovocia,
každý z nás smiech a radosť dá ti.

Jeden žltý, druhý čierny, máme všetky farby Zeme,
kamaráti sme však verní, vždy si pomôcť vieme.
Za nás vravia naše činy, máme všetky farby Zeme,
aj keď každý z nás je iný, vždy si pomôcť vieme.

Náš Pichloš ten je pletko, Edison vie všetko,
chodia spolu s Bibasom, všetci sme dobrí kamaráti.
Kumba je naša víla, je vždy veľmi milá,
my sme Ovocníčkovia a každý z nás smiech a radosť dá ti.

Jeden žltý, druhý čierny, máme všetky farby Zeme,
kamaráti sme však verní vždy si pomôcť vieme.
Za nás vravia naše činy, máme všetky farby Zeme,
aj keď každý z nás je iný, vždy si pomôcť vieme.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ovocnickovia/',
  },
  {
    id: 'song-sk-pa-a-pi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pa a Pi',
    description: 'My sme tí Pa a Pi z bláznivej rakety, my sme tá posádka, čo príde sem,',
    materials: [],
    steps: [],
    lyrics: `My sme tí Pa a Pi z bláznivej rakety,
my sme tá posádka, čo príde sem,
my sme tá výprava z mačacej planéty,
čo sa chce pochváliť, že pozná Zem.

Hľadáme na Zemi, hľadáme Vás,
nech je Nás Priateľov pod Slnkom viac.
My sme tí Pa a pi z mačacej planéty,
my sme tá posádka, čo príde sem.

Hľadáme na Zemi, hľadáme Vás,
nech je nás priateľov pod Slnkom viac.
My sme tí Pa a pi z mačacej planéty,
my sme tá posádka, čo prišla sem,
my sme tá posádka, čo prišla sem. Interpret: Marika Gombitová`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pa-a-pi/',
  },
  {
    id: 'song-sk-pada-sniezik-pada',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Padá sniežik padá',
    description: 'Padá sniežik padá, ej ale som rada.',
    materials: [],
    steps: [],
    lyrics: `Padá sniežik padá,
ej ale som rada.
Už je biely sad,
ej ale som rád.

Bude dobrá sánkovačka,
bude dobrá lyžovačka.
Do oblôčka sniežik hľadí,
ej ale sme všetci radi.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pada-sniezik-pada/',
  },
  {
    id: 'song-sk-padla-hviezda',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Padla hviezda',
    description: 'Padla hviezda na balkón, vylúdila biely tón.',
    materials: [],
    steps: [],
    lyrics: `Padla hviezda na balkón,
vylúdila biely tón.
Nezobuď sa, nezobuď sa,
to len v diaľke vlaky hučia,
noc hrá na trombón.

Padla hviezda na balkón,
vylúdila biely tón.
Nezobuď sa, nezobuď sa,
to len vietor piesok rúca,
to len šumí strom.

Padla hviezda na balkón,
vylúdila biely tón.
Až vyrastieš chlapček malý,
prinesieš ju mamke v dlani
rovno na balkón.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/padla-hviezda/',
  },
  {
    id: 'song-sk-pasla-ovecky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pásla ovečky',
    description: 'Pásla ovečky v zeleném háječku. Pásla ovečky v černém lese.',
    materials: [],
    steps: [],
    lyrics: `Pásla ovečky v zeleném háječku.
Pásla ovečky v černém lese.
Já na ní dupy dupy dup.
Ona zas cupi cupi cup.
Houfem ovečky seberte se všecky.
Houfem ovečky seberte se.

Pásla ovečky v zeleném háječku.
Pásla ovečky v černém lese.
Já na ní pomaloučku jen.
Ona že z háje musí ven.
Houfem ovečky seberte se všecky.
Houfem ovečky seberte se.

Pásla ovečky v zeleném háječku.
Pásla ovečky v černém lese.
Já na ní dupy dupy dup.
Ona zas cupi cupi cup.
Houfem ovečky seberte se všecky.
Houfem ovečky seberte se.

Pásla ovečky v zeleném háječku.
Pásla ovečky v černém lese.
Já na ní pomaloučku jen.
Ona že z háje musí ven.
Houfem ovečky seberte se všecky.
Houfem ovečky seberte se.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pasla-ovecky-1/',
  },
  {
    id: 'song-sk-pasli-ovce-valasi-valasi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pásli ovce valasi, valasi,',
    description: 'Pásli ovce valasi, valasi, pri betlémskom salaši, salašihajdon hajdon tidlidon',
    materials: [],
    steps: [],
    lyrics: `Pásli ovce valasi, valasi,
pri betlémskom salaši, salašihajdon hajdon tidlidon
 hajdon hajdon tidlidon Anjel sa im ukázal, ukázal,
so Betléma ísť kázal, ísť kázal.hajdon hajdon tidlidon
hajdon hajdon tidlidonVstaňte hore a poďťe, apoďte,
Pána Krista nájdete, nájdete.hajdon hajdon tidlidon
 hajdon hajdon tidlidon Nájdete ho v jasličkách, v jasličkách,
zavitého v plienočkách, v plienočkách.hajdon hajdon tidlidon
 hajdon hajdon tidlidon Mária ho kolembá, kolembá,
a Jozef mu tak spieva, mu tak spieva.Na husličkách tu, tu, tu, tu, tu, tu
a na gajdách du, du, du, du, du, du.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pasli-ovce-valasi-valasi/',
  },
  {
    id: 'song-sk-paslo-dievca-pavy',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Páslo dievča pávy',
    description: 'Páslo dievča pávy v tom zelenom háji,',
    materials: [],
    steps: [],
    lyrics: `Páslo dievča pávy
v tom zelenom háji,
prišli k nemu dva mládenci,
poď ty dievča s nami.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/paslo-dievca-pavy-1/',
  },
  {
    id: 'song-sk-pastieri-pastieri',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pastieri, pastieri',
    description: 'Pastieri, pastieri, hore vstaňte do Betlehema sa ponáhľajte.',
    materials: [],
    steps: [],
    lyrics: `Pastieri, pastieri, hore vstaňte
do Betlehema sa ponáhľajte.
Aby ste Ježiška privítali,
pred ním na kolená pokľakali.

Anjeli pastierov zo sna budia,
nech spev ich počujú všetci ľudia.
Sláva buď Otcovi na výsosti
a pokoj buď ľuďom živým v čnosti.

Buď od nás, Ježišku, privítaný,
ktorý si zrodil sa z čistej Panny.
Nech tebe slúži vždy celý náš svet,
veď tys´nám doniesol útechy kvet.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pastieri-pastieri-1/',
  },
  {
    id: 'song-sk-pec-nam-spadla',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pec nám spadla',
    description: 'Pec nám spadla, pec nám spadla, ktože nám ju postaví,',
    materials: [],
    steps: [],
    lyrics: `Pec nám spadla, pec nám spadla,
ktože nám ju postaví,
starý peciar nie je doma
a mladý to nespraví.
Zavoláme na deduška,
ten má veľké kladivo,
pribije tam dva, tri klince a už je to hotovo.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pec-nam-spadla-1/',
  },
  {
    id: 'song-sk-pekne-spinkaj-babika',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pekne spinkaj, bábika',
    description: 'Pekne spinkaj, bábika malinká! Pod perinkou dobre sa buvinká.',
    materials: [],
    steps: [],
    lyrics: `Pekne spinkaj, bábika malinká!
Pod perinkou dobre sa buvinká.
Stále žmurkať očami sa nesluší!
Tak si spinkaj na tom bielom vankúši.

Hajaj, búvaj, bábika ospalá,
do tmy sa nám izbietka schovala.
Neposlúchať mamku, to sa nepatrí.
Tak už spinkaj, skôr než poviem raz-dva-tri.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pekne-spinkaj-babika/',
  },
  {
    id: 'song-sk-plava-kacka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pláva kačka',
    description: 'Pláva kačka po jazere, vo vode si šaty perie.',
    materials: [],
    steps: [],
    lyrics: `Pláva kačka po jazere,
vo vode si šaty perie.
Rybky sem a rybky tam,
ja vás všetky pochytám.

Prišiel káčer ťapi, ťapi,
do zobáčka rybku lapí.
Ukláňa sa krásavec,
volá kačku na tanec.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/plava-kacka/',
  },
  {
    id: 'song-sk-plava-kacka-po-jazere',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pláva kačka po jazere',
    description: 'Pláva kačka po jazere, vo vode si šaty perie,',
    materials: [],
    steps: [],
    lyrics: `Pláva kačka po jazere,
vo vode si šaty perie,
rybky sem a rybky tam
ja vás všetky pochytám.

Prišiel káčer, ťapi, ťapi
do zobáčka rybku lapí,
ukláňa sa krásavec,
vyzval kačku na tanec.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/plava-kacka-po-jazere/',
  },
  {
    id: 'song-sk-po-nabrezi-konik-bezi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Po nábreží koník beží',
    description: 'Po nábreží koník beží, koník vraný, skadiaľ že si, šuhajíček maľovaný?',
    materials: [],
    steps: [],
    lyrics: `Po nábreží koník beží, koník vraný,
skadiaľ že si, šuhajíček maľovaný?
Skadiaľ som, stadiaľ som,
slovenského rodu som,
duša moja.

A pod lipkou a nad lipkou iskieročka,
skadiaľ že si, moja milá frajerôčka?
Skadiaľ som, stadiaľ som,
slovenského rodu som,
duša moja.

Z tej jedličky dve hrdličky na tú lúčku,
ja som Slovák, ty Slovenka, daj mi rúčku.
Rúčku ti podávam,
tebe verný/verná zostávam,
duša moja.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/po-nabrezi-konik-bezi-1/',
  },
  {
    id: 'song-sk-po-valassky-od-zeme',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Po valašsky od zeme',
    description: 'Po valašsky od zeme, kto mi kozy zaženie?',
    materials: [],
    steps: [],
    lyrics: `Po valašsky od zeme,
kto mi kozy zaženie?
A ja by ich bol zahnal,
ale som sa vlka bál.

Štyri kozy piaty cap,
kto vyskočí ten je chlap.
A ja by bol vyskočil,
ale som sa zatočil.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/po-valassky-od-zeme/',
  },
  {
    id: 'song-sk-pod-horou-datelinka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pod horou ďatelinka',
    description: 'Pod horou ďatelinka, žala ju Katarínka. [:Žala, žala, nažala si, postretli ju dva valasi.:]',
    materials: [],
    steps: [],
    lyrics: `Pod horou ďatelinka, žala ju Katarínka.
[:Žala, žala, nažala si, postretli ju dva valasi.:]

Počkaj ty, Katarínka, naša je ďatelinka
[:Naša, naša, nášho pána, čos´ nažala pod horama.:]

Pod horou ovos drobný, kosí ho šuhaj hodný.
[:Kosí, kosí, nemá rosy, dievčatko mu vodu nosí.:]

Nemám sa kedy baviť, musím sa domov náhliť,
[:lebo by ma mati lála, že som s vami dlho stála.:]

Mamka ťa nebude láť, keď budeš s nami tu stáť,
[:lebo mamka dobre vedia, že ty máš byť moja žena.:]`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pod-horou-datelinka-1/',
  },
  {
    id: 'song-sk-pod-horou-pod-horou-cierne-psica-brese',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pod horou, pod horou čierne psíča breše',
    description: 'Pod horou, pod horou čierne psíča breše Susedovie Mara, susedovie Mara nerada sa češe',
    materials: [],
    steps: [],
    lyrics: `Pod horou, pod horou čierne psíča breše
Susedovie Mara, susedovie Mara nerada sa češe

Nerada sa češe, nerada umýva
Ten Paľo Paľovie, ten Paľo Paľovie rád sa za ňou díva

Poďže sem, poďže sem, nech ťa ja učešem
Takým hrebienčekom, takým hrebienčekom, čo koníčky češem

Čo koníčky češem, kravičky umývam
Takú ťa ja, Mara, takú ťa ja, Mara, na svadbu pozývam`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pod-horou-pod-horou-cierne-psica-brese/',
  },
  {
    id: 'song-sk-pod-hrat-ping-pong',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Poď hrať ping pong',
    description: 'Refrén: Poď hrať ping pong ja budem ten ping a ty budeš ten pong, sme dvaja Číňania. Poď hrať ping pong, pinkať slovíčka, čo ako Elektrická energia nám von z úst vyletí. Ela Halabala cukor na koláč dala, Ela Halabala cukor na koláč dala, presladila ho.',
    materials: [],
    steps: [],
    lyrics: `Refrén: Poď hrať ping pong ja budem ten ping a ty budeš ten pong, sme dvaja Číňania.
Poď hrať ping pong, pinkať slovíčka, čo ako Elektrická energia nám von z úst vyletí. Ela Halabala cukor na koláč dala, Ela Halabala cukor na koláč dala, presladila ho.
Nela na to za to takto pokrútila hlavou, Nela na to za to takto pokrútila hlavou, Nela na to za to takto pokrútila hlavou a nechal koláč tak.
Dcéra Viera a jej zviera zjedli ten koláč, dcéra Viera a jej zviera zjedli ten koláč,a bolí ich brucho.Refrén: Poď hrať ping pong ja budem ten ping a ty budeš ten pong, sme dvaja Číňania.
 Poď hrať ping pong, pinkať slovíčka, čo ako Elektrická energia nám von z úst vyletí.Mačka, kačka na hojdačkách skáče do jamy, mačka, kačka na hojdačkách skáče do jamy,a majú aj zaja.
Zajo Ajo v jame s Majou jačia ajajáj, zajo Ajo v jame s Majou jačia ajajáj,ako papagáj.
Papaj pagáč, papaj pagáč, papaj papagáj, papaj pagáč, papaj pagáč,a nezlom si zobák.Refrén: Poď hrať ping pong ja budem ten ping a ty budeš ten pong, sme dvaja Číňania.
Poď hrať ping pong, pinkať slovíčka, čo ako Elektrická energia nám von z úst vyletí.Dala Ela Halabala cukor na koláč, dala Ela Halabala cukor na koláč,a presladila ho.
Zajo Ajo v jame s Majou jačia ajajáj, zajo Ajo v jame s Majou jačia ajajáj, zajo Ajo v jame s Majou jačia ajajáj ako papagáj.
Papaj pagáč, papaj pagáč, papaj papagáj, papaj pagáč, papaj pagáč, papaj papagáj, papaj pagáč, papaj pagáč, papaj papagáj, a nezlom si zobák.Interpret: Peter Nagy`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pod-hrat-ping-pong/',
  },
  {
    id: 'song-sk-podme-bratia-do-betlehema',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Poďme, bratia, do Betlehema',
    description: 'Poďme, bratia, do Betléma, duj daj, duj daj, duj daj-dáj.',
    materials: [],
    steps: [],
    lyrics: `Poďme, bratia, do Betléma,
duj daj, duj daj, duj daj-dáj.
Ježišku, miláčku, ja ťa budem kolísati.
Ježišku, miláčku, ja ťa budem kolísať.

A ty Janku na píšťalku...
A ty Ondro na tie husle...
A ty Vavro na tie gajdy...
A ty Kubo na tú basu...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/podme-bratia-do-betlehema/',
  },
  {
    id: 'song-sk-pokapala-na-salasi-slanina',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pokapala na salaši slanina',
    description: 'Pokapala na salaši slanina, povedali na našeho Martina.',
    materials: [],
    steps: [],
    lyrics: `Pokapala na salaši slanina,
povedali na našeho Martina.

A on sa im na môj dušu prisahal,
že on veru na slaninu nesiahal.

ale že si on odrezal len kúsok,
takže ostal na klinčeku motúzok.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pokapala-na-salasi-slanina-1/',
  },
  {
    id: 'song-sk-ponosa',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ponosa',
    description: 'Na Dorku je veľká ponosa, že si strká prsty do nosa.',
    materials: [],
    steps: [],
    lyrics: `Na Dorku je veľká ponosa,
že si strká prsty do nosa.
Nerobže to milá Dorka,
budeš mať nos jak uhorka.

Peťko zase nechty hryzie si,
mamka naňho volá: Kdeže si?
Pod nechtami špina horká
ochorie Peťko aj Dorka.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ponosa/',
  },
  {
    id: 'song-sk-postavim-si-snehuliaka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Postavím si snehuliaka',
    description: 'Postavím si snehuliaka na najbližšom brehu,',
    materials: [],
    steps: [],
    lyrics: `Postavím si snehuliaka
na najbližšom brehu,
postavím si snehuliaka
z bielučkého snehu.
Jedna guľa, druhá guľa,
tretiu na vrch dám
a už stojí snehuliačik
a už stojí tam.

Košieľku má snehuliačik
čistučkú a bielu,
nos má z mrkvy,
oči z uhlia, miesto ruky metlu.

A keď deti uvidia ho,
povedia si tak:
Pozrite sa aký je to
krásny snehuliak!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/postavim-si-snehuliaka/',
  },
  {
    id: 'song-sk-povedzte-nam-pastierovia',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Povedzte nám pastierovia',
    description: 'Povedzte nám pastierovia, čo ste videli,',
    materials: [],
    steps: [],
    lyrics: `Povedzte nám pastierovia,
čo ste videli,
keď ste sa tak o polnoci
všetci rozbehli?
Videli dieťatko,
krásne pacholiatko
narodené v Betléme.

Ktože vám čo o dieťati
tomto povedal?
Ja by som bol s vami ta šiel,
keby som bol znal.
Anjeli spievali,
nám oznamovali,
že sa Kristus narodil.

V chladnej noci jak obstojí
dieťa prekrásne?
Keď v stajni nieto ničoho,
len biedne jasle.
Vôl, osol, dýchajú a tak zohrievajú
to prekrásne dieťatko.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/povedzte-nam-pastierovia-1/',
  },
  {
    id: 'song-sk-pred-oknom-za-oknom',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pred oknom za oknom',
    description: 'Pred oknom za oknom mala jedna dve',
    materials: [],
    steps: [],
    lyrics: `Pred oknom za oknom
mala jedna dve
červené jabĺčka
dávala ich mne.

A keď mi ich mala dať
začala sa vykrúcať
že nemá že nedá
že by bolo zle.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pred-oknom-za-oknom/',
  },
  {
    id: 'song-sk-pri-potoku-sedela',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pri potoku sedela',
    description: 'Pri potoku sedela, na kačeny volala.',
    materials: [],
    steps: [],
    lyrics: `Pri potoku sedela,
na kačeny volala.
Kač, kač, kač, kač, kačena,
nasypem ti jačmeňa.

Moje húsky, kačičky,
nechoďte do vodičky.
Kač, kač, kač, kač, kačena,
nasypem ti jačmeňa.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pri-potoku-sedela-1/',
  },
  {
    id: 'song-sk-pri-umyvani-zubkov',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Pri umývaní zúbkov',
    description: 'Hore-dolu, hore-dolu,',
    materials: [],
    steps: [],
    lyrics: `Hore-dolu,
hore-dolu,
umyjeme
zúbky spolu.

Tuti-fruti
do zákruty,
zúbkom sladká
pasta chutí!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/pri-umyvani-zubkov/',
  },
  {
    id: 'song-sk-prisla-radost',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Prišla radosť',
    description: 'Vstávajte pastieri, a bežte do Betléma.',
    materials: [],
    steps: [],
    lyrics: `Vstávajte pastieri,
a bežte do Betléma.
Tam sa narodil náš kráľ,
ktorý nám dá chleba.
Poďte aj vy s nami tam,
kde sa dieťa zrodilo,
poďte sa mu pokloniť,
by sa s nami tešilo.
V Betleheme v jasličkách
čaká aj na teba.
Prišla radosť pre všetkých,
prišla ku nám z neba.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/prisla-radost/',
  },
  {
    id: 'song-sk-prsi-prsi-trosku-jinak',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Prší prší trošku jinak',
    description: 'Prší prší jen se leje',
    materials: [],
    steps: [],
    lyrics: `Prší prší
jen se leje
Jájinka se z
okna směje
její brácha
na dvorku
nastartoval
motorku
motorka mu ujela
starou bábu přejela.

Bába leží v
nemocnici
mokrý hadr
na palici
doktor běží pro
pivo,bába
křičí dej mi ho!!!
Doktor běží
pro dárek
bába křičí
"nazdárek"!
Doktor běží pro
injekci,bába
křičí já ji
nechci!!!!!!!
Doktor běží pro
kytku,bába křičí
"DOBYTKU"!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/prsi-prsi-trosku-jinak/',
  },
  {
    id: 'song-sk-prsi-prsi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Prší, prší',
    description: 'Prší, prší, len sa leje, nezatváraj milá dvere. Milá má, duša má, nezatváraj pred nama.',
    materials: [],
    steps: [],
    lyrics: `Prší, prší, len sa leje, nezatváraj milá dvere.
Milá má, duša má, nezatváraj pred nama.
Keď som išiel od Zuzičky, štrngali mi podkovičky.
Štrngali, brngali, sivé očká plakali.
Sivé očká, čo plačete, veď mi moje nebudete.
Budete iného, šuhajíčka švárného.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/prsi-prsi-1/',
  },
  {
    id: 'song-sk-prsi-prsi-len-sa-leje',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Prší, prší len sa leje',
    description: 'Prší, prší len sa leje nezatváraj milá dvere.',
    materials: [],
    steps: [],
    lyrics: `Prší, prší len sa leje
nezatváraj milá dvere.
Milá má duša má
nezatváraj pred nama.

Keď som išiel od Zuzičky,
štrngali mi podkovičky.
štrngali, brngali,
sivé očká plakali.

Sivé očká, čo plačete,
veď vy moje nebudete,
budete iného
šuhajíčka švárneho.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/prsi-prsi-len-sa-leje-1/',
  },
  {
    id: 'song-sk-prsi-prsi-178',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Prší,prší',
    description: 'Prší, prší jen se leje, kam koníčky pojedeme,',
    materials: [],
    steps: [],
    lyrics: `Prší, prší jen se leje,
kam koníčky pojedeme,
pojedeme na luka,
až kukačka zakuká.
Pojedem na luka,
až kukačka  zakuká.

Kukačka už zakukala,
má panenka zaplakala,
kukačko už nekukej,
má panenko neplakej.
Kukačko už nekukej ,
má panenko neplakej.

Prší prší ,jen se leje,
kam ty koně postavíme,
postavte  je, kam chcete,
já se držím děvčete.
Postavte je, kam chcete,
já se držím děvčete.

Postavte je do zahrádky,
já se držím Mariánky,
postavte je pod oknem,
jen když my dva nezmoknem.
Postavte je pod oknem,
jen když my dva nezmoknem.

Prší ,prší jen se leje,
kam koníčky pojedeme,
pojedeme na luka,
až kukačka zakuká.
Pojedeme na luka,
až kukačka  zakuká.

Kukačka už zakukala,
má panenka zaplakala,
kukačko už nekukej,
má panenko neplakej.
Kukačko už nekukej,
má panenko neplakej.

Prší, prší, jen se leje,
kam ty koně postavíme,
postavte je, kam chcete,
já se držím děvčete.
Postavte je, kam chcete,
já se  držím děvčete.

Postavte je do zahrádky,
já se držím Mariánky,
postavte je pod oknem,
jen když my dva nezmoknem.
Postavte je pod oknem,
jen když my dva nezmoknem.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/prsiprsi/',
  },
  {
    id: 'song-sk-rafaela-stonozka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rafaela stonožka',
    description: 'Ja som vaša kamoška, Rafaela stonožka.',
    materials: [],
    steps: [],
    lyrics: `Ja som vaša kamoška,
Rafaela stonožka.
Mám červené ponožky
a patrím medzi stonožky.
Hop, Rafaela, čug, čug, bugy.
Rafaela má sto nôh.

Ja som vaša kamoška,
Rafaela stonožka,
mám maličkú hlavičku
a na zadočku mašličku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rafaela-stonozka/',
  },
  {
    id: 'song-sk-rohac',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Roháč',
    description: 'Na cestičke roháč chrobáčisko rúči.',
    materials: [],
    steps: [],
    lyrics: `Na cestičke roháč
chrobáčisko rúči.
Ani by ste neverili
aký na svet súci.

Na cestičke macko
oriešky si chrumká
ani by ste neverili
ako pekne brumká.

Na cestičke zajko
uši má on sivé,
ani by ste neverili
ako nimi kýve.

Na cestičke slimák
pomaly si lezie,
ani by ste neverili
že svoj domov nesie.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rohac/',
  },
  {
    id: 'song-sk-rolnicky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rolničky',
    description: 'Rolničky, rolničky zvoňte na saniach do neznáma letíme nemám z toho strach.',
    materials: [],
    steps: [],
    lyrics: `Rolničky, rolničky zvoňte na saniach
do neznáma letíme nemám z toho strach.
Rolničky, rolničky zima nebolí
už nás vietor unáša rovno do polí.

V izbe horí med, vrátime sa hneď
a celou cestou bude nám nebo v ušiach znieť.
Sneh sa pokloní, udrie do koní
a ja ho potom rozhrniem tak ako záclony.

Rolničky, rolničky zvoňte na saniach.
Rolničky, rolničky zima nebolí.

V izbe horí med, vrátime sa hneď
a celou cestou bude nám nebo v ušiach znieť.
Sneh sa pokloní, udrie do koní
a ja ho potom rozhrniem tak ako záclony.

Rolničky, rolničky zvoňte na saniach
do neznáma letíme nemám z toho strach.
Rolničky, rolničky zvoňte nočnou tmou
všetky oči pohľadím bielou koledou.Interpret: Tatjana Hubinská`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rolnicky/',
  },
  {
    id: 'song-sk-rolnicky-rolnicky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rolničky , rolničky',
    description: 'Rolničky, rolničky, kto vám dal ten hlas? Ježiško maličký a či Mikuláš?',
    materials: [],
    steps: [],
    lyrics: `Rolničky, rolničky, kto vám dal ten hlas?
Ježiško maličký a či Mikuláš?
Rolničky, rolničky, prinášajú smiech,
piesne našej mamičky, Vianoce a sneh.

Hurá, už je sneh, ozýva sa smiech.
Deti kričia, zvonček znie, biele mámenie.
Sneh je vôkol nás, svetu dáva jas.
Ozýva sa zvonenie, zima je tu zas.

Rolničky, rolničky, kto vám dal ten hlas?
Ježiško maličký a či Mikuláš?
Rolničky, rolničky, prinášajú smiech,
piesne našej mamičky, Vianoce a sneh.

Zvonky z detských liet, rozozvučia svet,
tým čo sú už dospelí, nech je zasa päť.
Zvonte z ľahúčka, stačí chvíľočka,
spomienka na rolničky, rozžiari očká.

Rolničky, rolničky, kto vám dal ten hlas?
Ježiško maličký a či Mikuláš?
Rolničky, rolničky, prinášajú smiech,
piesne našej mamičky, Vianoce a sneh..............hahahahahah`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rolnicky-rolnicky-1/',
  },
  {
    id: 'song-sk-rolnicky-rolnicky-183',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rolničky, roľníčky',
    description: 'Rolničky, rolničky zvoňte na saniach do neznáma letíme nemám z toho strach.',
    materials: [],
    steps: [],
    lyrics: `Rolničky, rolničky zvoňte na saniach
do neznáma letíme nemám z toho strach.
Rolničky,rolničky zima nebolí
už nás vietor unáša rovno do polí.

V izbe horí med, vrátime sa hnedˇ
a celou cestou bude nám nebo v ušiach znieť.
Sneh sa pokloní udrie do koní
a ja ho potom rozhrniem tak ako záclony.
Rolničky, rolničky zvoňte na saniach
do neznáma letíme nemám z toho strach.
Rolničky, rolničky zima nebolí
už nás vietor unáša rovno do polí.

V izbe horí med,vrátime sa hnedˇ
a celou cestou bude nám vodka v ušiach znieť.
Sneh sa pokloní,kopne ťa do hlavy
a ja ho potom rozhrniem tak ako paplony.

Rolničky,rolničky zvoňte na saniach
do neznáma letíme nemám z toho strach.
Rolničky,rolničky zvoňte nočnou tmou
všetky oči pohladím bielou koledou. Interpret: Senzus`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rolnicky-rolnicky-2/',
  },
  {
    id: 'song-sk-rucky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rúčky',
    description: 'Každá rúčka má prstíčky, zavrieme ich do pästičky.',
    materials: [],
    steps: [],
    lyrics: `Každá rúčka má prstíčky,
zavrieme ich do pästičky.
Bum, bum, na vrátka,
to je rozprávka krátka.

Ručičky sa spolu hrajú,
roboty sa neľakajú,
bum, bum, na vrátka,
to je rozprávka krátka.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rucky/',
  },
  {
    id: 'song-sk-ruky-rucicky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Ruky, ručičky',
    description: 'Ruky, ručičky máte pekné prstíčky,',
    materials: [],
    steps: [],
    lyrics: `Ruky, ručičky
máte pekné prstíčky,
máte pekné dlane,
zatlieskame na ne.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ruky-rucicky/',
  },
  {
    id: 'song-sk-rychla-rota',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rýchla rota',
    description: 'S každou špárou sa plazí gangstrov zbor, im s ráznou tvárou sa stavaj na odpor',
    materials: [],
    steps: [],
    lyrics: `S každou špárou sa plazí gangstrov zbor,
im s ráznou tvárou sa stavaj na odpor
čítaš triezvy fór zákerný spor
vždy volaj náš čim skôr.

Refrén:
Chip, chip, chip, chip a dale
tým ťa chránia.
Chip, chip, chip, chip a dale,
v tme aj z rána.

Refrén:
Aj keby problém tvoj bol v čomkoľvek,
tak nie je ťažké nájsť naň liek.Refrén:
Chip, chip, chip, chip a dale
tým ťa chránia.
Chip, chip, chip, chip a dale,
v tme aj z rána. Nech by zbor gangstrov tvôj skalp získať chcel
tým skrížia plány na povel.

Chip, chip, chip, chip a dale
slávni známi,
chip, chip, chip, chip a dale
vždy ťa chránia.
Chip, chip, chip, chip a dale.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rychla-rota/',
  },
  {
    id: 'song-sk-rychla-rota-ceky-text',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Rychlá rota - čeký text',
    description: 'Správný zásah tu pravou chvíli má když přízrak temný svým rejdům šanci dáTahle príma dvojka slídilů ta řeší problém tvůj',
    materials: [],
    steps: [],
    lyrics: `Správný zásah tu pravou chvíli má
když přízrak temný svým rejdům šanci dáTahle príma dvojka slídilů ta řeší problém tvůj
Chip,Chip,Chip,Chip a Dale
zákon hájí
Chip,Chip,Chip,Chip a Dale
v tomto krajiV pravdě si najdou směr a hrají fér
ve znaku mají dvakrát R
Chip,Chip,Chip,Chip a Dale
zákon hájí
Chip,Chip,Chip,Chip a Dale
v tomto krajiPo stopě vždycky jdou, až naleznout
kdo skrýva tajně fintu svou
Chip,Chip,Chip,Chip a Dale
zákon hájí
Chip,Chip,Chip,Chip a Dale
v tomto kraji
Chip,Chip,Chip,Chip a Dale`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/rychla-rota-ceky-text/',
  },
  {
    id: 'song-sk-sedem-vymyselnych-budikov',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Sedem výmyselných budíkov',
    description: 'Ja som budík budíček, budiť je môj koníček. Stretol som sa náhodou,',
    materials: [],
    steps: [],
    lyrics: `Ja som budík budíček,
budiť je môj koníček. Stretol som sa náhodou,
ja s takouto príhodou.Ja som budík budíček,
budiť je môj koníček. No keď stíchnem trošíčka,
usnú všetky očičká...No keď stíchnem trošíčka,
usnú všetky očičká...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sedem-vymyselnych-budikov/',
  },
  {
    id: 'song-sk-sedemdesiat-sukien-mala',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Sedemdesiat sukien mala',
    description: 'Sedemdesiat sukien mala a predsa sa nevydala.',
    materials: [],
    steps: [],
    lyrics: `Sedemdesiat sukien mala
a predsa sa nevydala.
A ja nemám, iba iba jednu,
pýtajú ma až za Viedňu.

Pod oblôčkom poskakuje,
štyri groše ukazuje.
Dajte mi to dievča dievča vaše
a ja vám dám štyri groše.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sedemdesiat-sukien-mala-1/',
  },
  {
    id: 'song-sk-sedi-mucha-na-stene',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Sedí mucha na stene',
    description: 'Sedí mucha na stene, na stene, na stene.',
    materials: [],
    steps: [],
    lyrics: `Sedí mucha na stene,
na stene, na stene.
Sedí mucha na stene,
sedí a spí.

Sedí a buvinká
potvorka malinká.
Sedí mucha na stene,
sedí a spí

Sede meche ne stene
ne stene ne stene...

Text sa spieva postupne na všetky samohlásky.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sedi-mucha-na-stene/',
  },
  {
    id: 'song-sk-sel-tudy',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Šel tudy',
    description: 'Šel tudy měl dudy',
    materials: [],
    steps: [],
    lyrics: `Šel tudy
měl dudy
ani nezapískal
bodejť mu ty dudy
rarášek roztřískal`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sel-tudy/',
  },
  {
    id: 'song-sk-si-moj-pan',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Si môj Pán',
    description: 'Si môj Pán, Ježiš Kráľ, každý deň sa zhováram s Tebou rád.',
    materials: [],
    steps: [],
    lyrics: `Si môj Pán, Ježiš Kráľ,
každý deň sa zhováram s Tebou rád.
Ty si stvoril strom aj kvet,
slniečko sa celý svet,
všade smiem Ťa stretávať.
Mám Ťa rád.

Si môj Pán, Ježiš Kráľ,
každý deň sa zhováram s Tebou rád.
Ty si nebu hviezdy dal,
každý hriech si zo mňa vzal,
odpustil si toľkokrát.
Mám Ťa rád.

Si môj Pán, Ježiš Kráľ,
každý deň sa zhováram s Tebou rád.
Ty si vtáčkom piesne dal,
aby som sa radoval,
si môj verný kamarát.
Mám Ťa rád.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/si-moj-pan/',
  },
  {
    id: 'song-sk-sipkova-ruzenka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Šípková Ruženka',
    description: 'Šípková Ruženka, tej som sa vždy bál, aby som náhodou navždy nezaspal.',
    materials: [],
    steps: [],
    lyrics: `Šípková Ruženka, tej som sa vždy bál,
aby som náhodou navždy nezaspal.
Šípková Ruženka, nie som totiž princ,
nerobím zázraky, neviem o nich nič.

Šípková Ruženka, možno aj ja spím,
čo ak ty, Šípková, spravíš niečo s tým.
Šípková Ruženka, s tebou nie som sám,
líca máš studené, ako porcelán.

Refrén:
Ruženka Šípková, tváriš sa že spíš,
a zatiaľ vyčkávaš, kedy príde princ.
Ruženka Šípková, tak sa zobuď už,
kým sa ty zobudíš, s chlapca bude muž. Interpret: Noga a Skrúcaný`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sipkova-ruzenka/',
  },
  {
    id: 'song-sk-skace-zaba-po-blate',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Skáče žaba po blate',
    description: 'Skáče žaba po blate kúpime jej na gate.',
    materials: [],
    steps: [],
    lyrics: `Skáče žaba po blate
kúpime jej na gate.
Na aké na také
na zelené strakaté.

Skáče žaba cez mláky
kúpime jej na traky.
Aké sú, také sú,
gate jej však ponesú.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/skace-zaba-po-blate/',
  },
  {
    id: 'song-sk-skakal-pes',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Skákal pes',
    description: 'Skákal pes, přes oves, přes zelenou louku',
    materials: [],
    steps: [],
    lyrics: `Skákal pes, přes oves,
přes zelenou louku
Šel za ním, myslivec,
péro na klobouku
Pejsku náš, co děláš,
 že s tak vesel stále
Řek bych vám, nevím sám,
hop a skákal dále...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/skakal-pes/',
  },
  {
    id: 'song-sk-skakal-pes-pres-oves',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Skákal pes,přes oves',
    description: 'Skákal pes přes oves přes zelenou louku šel za ním myslivec péro na klobouku.Pejsku náš co děláš žes tak vesel stále řek bych vám nevím sám hop a skákal dále.',
    materials: [],
    steps: [],
    lyrics: `Skákal pes přes oves přes zelenou louku šel za ním myslivec péro na klobouku.Pejsku náš co děláš žes tak vesel stále řek bych vám nevím sám hop a skákal dále.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/skakal-pespres-oves/',
  },
  {
    id: 'song-sk-slniecko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Slniečko',
    description: 'Vykukne slniečko za ránky, za ránky, zobudí na poli škovránky, škovránky.',
    materials: [],
    steps: [],
    lyrics: `Vykukne slniečko za ránky, za ránky,
zobudí na poli škovránky, škovránky.
Vyženie husičky do poľa, do poľa,
aj včielky bzučalky zavolá, zavolá.
Pobozká kvetinky na očká, na očká,
na spáčov slniečko nepočká, nepočká.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/slniecko/',
  },
  {
    id: 'song-sk-slniecko-sa-zobudilo',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Slniečko sa zobudilo',
    description: 'Slniečko sa zobudilo, popreťahovalo kosti,',
    materials: [],
    steps: [],
    lyrics: `Slniečko sa zobudilo,
popreťahovalo kosti,
cez mrak hlávku vystrčilo,
zasmialo sa od radosti.

Vyleteli včielky vrtké,
motýle zas šantia v tráve,
lienka ponáhľa sa kdesi,
mravce slamku našli práve.

Obzerá sa slnko zlaté,
čo sa robí čo sa deje?
Všade radosť z práce majú
a slniečko sa len smeje.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/slniecko-sa-zobudilo/',
  },
  {
    id: 'song-sk-sluzil-som-sluzil',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Slúžil som, slúžil',
    description: 'Slúžil som, slúžil to prvé leto, vyslúžil som si kuriatko za to.',
    materials: [],
    steps: [],
    lyrics: `Slúžil som, slúžil to prvé leto,
vyslúžil som si kuriatko za to.
A to kura krákorá, chodí po dvore,
moja mamka plače doma v komore.

Slúžil som, slúžil, to druhé leto,
vyslúžil som si kačiatko za to.
A tá kačka blato plačká, chodí po dvore,
moja mamka plače doma v komore.

Slúžil som slúžil, to tretie leto,
vyslúžil som si mačiatko za to.
A tá mačka naháňačka behá po dvore,
moja mamka plače doma v komore.

Slúžil som slúžil, to štvrté leto,
vyslúžil som si kozičku za to.
A tá koza spadla z voza, kríva po dvore,
moja mamka plače doma v komore.

Slúžil som slúžil, to piate leto,
vyslúžil som si ovečku za to.
A tá ovca nemá zvonca, chodí po dvore,
moja mamka plače doma v komore.

Slúžil som slúžil, to šieste leto,
vyslúžil som si prasiatko za to.
A to prasa kvíka zasa, chodí po dvore,
moja mamka plače doma v komore.

Slúžil som slúžil, to siedme leto,
vyslúžil som si kravičku za to.
A tá krava mlieko dáva, chodí po dvore,
moja mamka plače doma v komore.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sluzil-som-sluzil/',
  },
  {
    id: 'song-sk-smolkovia',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Šmolkovia',
    description: 'Či rosa v tráve je či rastu záveje s nimi vždy dobre je hurá! ...s nimi vždy krásne je, huráUž sú tu Šmolkovia, smejú sa toľko až na leta zmenia sa zimy, maličkí priatelia s tebou sa veselia, no tak sa aj ty teš s nimi..',
    materials: [],
    steps: [],
    lyrics: `Či rosa v tráve je či rastu záveje s nimi vždy dobre je hurá! ...s nimi vždy krásne je, huráUž sú tu Šmolkovia, smejú sa toľko až na leta zmenia sa zimy,
maličkí priatelia s tebou sa veselia, no tak sa aj ty teš s nimi..

Prišli dnes práve k nám, bude to zábava, veď parta Šmolkov je taká.
Záhadné príhody, zhody a náhody, to všetko dnes na nás čaká...už sú tu Šmolkovia, smejú sa toľko až na leta zmenia sa zimy
Maličký priatelia s tebou sa veselia, no tak sa aj ty teš s nimi..`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/smolkovia/',
  },
  {
    id: 'song-sk-smoulove',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Šmoulové',
    description: 'Umí se smát i prát a každý má je rád,',
    materials: [],
    steps: [],
    lyrics: `Umí se smát i prát
a každý má je rád,
i vy je račte znát - Šmouly!

Kam přijdou, tam je šou,
skáčou a tancujou,
vysocí jsou na dva couly.
Že všechno dovedou,
to není náhodou,
zkrátka to s přírodou koulí.

Gargamel má svůj hrad,
a zkouší čarovat,
má z toho akorát bouli.
Lepší je hrát si, hrát,
se Šmouly šmoulovat,
na to chci hlavu dát šmoulí.

Lepší je hrát si, hrát,
se Šmouly šmoulovat,
na to chci hlavu dát šmoulí.

Lepší je hrát si, hrát,
se Šmouly šmoulovat,
na to chci hlavu dát šmoulí.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/smoulove/',
  },
  {
    id: 'song-sk-snehova-vlocka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Snehová vločka',
    description: 'Bim bam, bim bam, spadla vločka snehová,',
    materials: [],
    steps: [],
    lyrics: `Bim bam, bim bam,
spadla vločka snehová,
bim bam, bim bam,
zobudila medveďa.

Vstávaj, medveď
bim, bam, bom,
zober sánky a poď von!

Medveď sa však naľakal,
že on veru privčas vstal,
obrátil sa, zavrel dom
a ďalej spal bim, bam, bom.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/snehova-vlocka/',
  },
  {
    id: 'song-sk-snehuliacik-vitaj-nam',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Snehuliačik vitaj nám',
    description: 'Snehuliačik vitaj nám aký si ty pekný pán.',
    materials: [],
    steps: [],
    lyrics: `Snehuliačik vitaj nám
aký si ty pekný pán.
Miesto nosa mrkvička
z uhlia čierne očičká.
Fúzy žlté z konopí,
kto ťa dal tak dokopy.

Z hrnca klobúk na hlave,
výborne ti pristane.
V ruke metla ohromná,
kto sa ti len vyrovná.
Dokiaľ strážiš ty náš dom,
spokojne si spíme v ňom.

Snehuliačik biely pán,
ako ťa len prosiť mám.
Nedajže sa odohnať
keď ťa bude slnko hriať.
Lebo keď sa roztopíš,
všetkých nás tu zarmútiš.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/snehuliacik-vitaj-nam/',
  },
  {
    id: 'song-sk-snehuliak',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Snehuliak',
    description: 'Kde sa vzal, tu sa vzal, pri záhrade ráno stál,',
    materials: [],
    steps: [],
    lyrics: `Kde sa vzal, tu sa vzal,
pri záhrade ráno stál,
čiapku sivú, hlavu krivú
a fajku vám v ústach mal.

V košieľke, neborák,
čože je to za panák?
Zasmiala sa mladá chasa,
jaj, veď je to snehuliak.

Hopsasa, kamarát,
poďže sa ty s nami hrať,
hádzať sniežkom,
dolu briežkom
veselo sa sánkovať.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/snehuliak/',
  },
  {
    id: 'song-sk-sosovica-hrasok-fazulka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Šošovica, hrášok, fazuľka',
    description: 'Šošovica, hrášok, fazuľka, kde ste boli tetka Zuzuľka.',
    materials: [],
    steps: [],
    lyrics: `Šošovica, hrášok, fazuľka,
kde ste boli tetka Zuzuľka.
Bola som ja na vodičku,
budem variť šošovičku.

Kukurica, mrkva, kaleráb,
kto preskočí hrášok, ten je chlap.
Kto sa potkne o rezanec
ten nemôže ísť na tanec.

Makovička, cesnak, cibuľa,
keď sa slnko z neba skotúľa.
Chytíme ho nezbedníka
ako pagáč do košíka.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sosovica-hrasok-fazulka/',
  },
  {
    id: 'song-sk-spi-babika',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spi bábika',
    description: 'Spi bábika, zavri očká, čaká ťa už postielôčka.',
    materials: [],
    steps: [],
    lyrics: `Spi bábika, zavri očká,
čaká ťa už postielôčka.
Spinká mačka, spinká macík,
spinká lopta, spinká vláčik.
Aj slniečko ide spať,
nebude sa s nami hrať.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spi-babika/',
  },
  {
    id: 'song-sk-spi-dietatko-spi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spi dieťatko spi',
    description: 'Spi, dieťatko, spi, zavri očičky,',
    materials: [],
    steps: [],
    lyrics: `Spi, dieťatko, spi,
zavri očičky,
Pán Boh bude s tebou spati,
anjeličky kolembati,
spi, dieťatko, spi.

Spi, synáčik, spi...
Spi, Janíčko, spi...
Spi, Anička, spi...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spi-dietatko-spi/',
  },
  {
    id: 'song-sk-spi-dietatko-spize',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spi dieťatko, spiže',
    description: 'Spi dieťatko, spiže, mamka varí slíže.',
    materials: [],
    steps: [],
    lyrics: `Spi dieťatko, spiže,
mamka varí slíže.
Syrové, makové,
perky lekvárové.

Spi dieťatko, spiže,
aspoň jeden sníček,
kúpi ti mamička
v meste medovníček.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spi-dietatko-spize/',
  },
  {
    id: 'song-sk-spi-moje-dietatko-krasne',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spi, moje dieťaťko krásne',
    description: 'Spi, moje dieťaťko krásne, nad horou usína deň.',
    materials: [],
    steps: [],
    lyrics: `Spi, moje dieťaťko krásne,
nad horou usína deň.
Na krídlach motýlích s belasou tmou
na očká zlietol ti sen.
Kým ťa späť z krásneho sníčka
privezie slnečný koč,
spi, moje dieťaťko, búvaj krásne.
Spi, sladko a dobrú noc.

Spinkaj, ty poklad môj vzácny,
hviezdičky tiež išli spať.
Zo zlatých pavučín po celú noc
najkrajšie sníčky si praď!
Kým ťa späť z krásneho sníčka
privezie slnečný koč,
spi, moje dieťaťko, búvaj krásne.
Spi, sladko a dobrú noc.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spi-moje-dietatko-krasne/',
  },
  {
    id: 'song-sk-spievaj-aleluja-s-radostou',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spievaj aleluja s radosťou',
    description: 'Spievaj aleluja s radosťou s radosťou Pánovi',
    materials: [],
    steps: [],
    lyrics: `Spievaj aleluja s radosťou
s radosťou Pánovi
celá Zem aleluja
krič aleluja ...
slúž mu aleluja ...
tlieskaj aleluja ...`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spievaj-aleluja-s-radostou/',
  },
  {
    id: 'song-sk-spievanky',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spievanky',
    description: 'Spievanky, spievanky, kdeže ste sa vzali,',
    materials: [],
    steps: [],
    lyrics: `Spievanky, spievanky,
kdeže ste sa vzali,
či ste z neba spadli,
a či v háji rástli?

Z neba sme nespadli,
v háji sme nerástli,
ale nás mládenci
a dievčence našli.

Robota, robota,
na celý deň ťa mám.
Nechce sa mi robiť,
kým si nezaspievam.

Zaspievaj slávičku
v zelenom hájičku.
A ja si zaspievam
cestou po chodníčku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spievanky-1/',
  },
  {
    id: 'song-sk-spinkaj-baba-malicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spinkaj, bába maličká',
    description: 'Spinkaj, bába maličká, ja som tvoja mamička.',
    materials: [],
    steps: [],
    lyrics: `Spinkaj, bába maličká,
ja som tvoja mamička.
Večer je už, súmrak veľký,
uložím ťa do postieľky,
haja, haja, haj,
uspať sa mi daj.

Zajtra vstaneš zavčas rána
do ružova vyspinkaná.
Umyjem ťa, učešem ťa,
ty si moje drahé dieťa,
haja, haja, haj,
uspať sa mi daj.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spinkaj-baba-malicka/',
  },
  {
    id: 'song-sk-spize-mi-spi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spiže mi, spi',
    description: 'Spiže mi, spi, maj krásne sny. A ty, chlapček, pozor daj,',
    materials: [],
    steps: [],
    lyrics: `Spiže mi, spi, maj krásne sny.
A ty, chlapček, pozor daj,
na bubienok nebúchaj.
Ty, mačička, ticho buď,
našu malú nezobuď.
A ty, psíšek, nebrechaj,
našu malú neľakaj.
Nespievaj už, slávičku,
zobudíš nám Haničku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spize-mi-spi/',
  },
  {
    id: 'song-sk-spize-mi-spize-mi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Spiže mi, spiže mi',
    description: 'Spiže mi, spiže mi! Keby si mi spala, keby si mi spala len do zajtra rána!',
    materials: [],
    steps: [],
    lyrics: `Spiže mi, spiže mi! Keby si mi spala,
keby si mi spala len do zajtra rána!

Spiže mi, spiže mi ako vtáčik v hore,
nech sa neprebudíš, kým nesvitnú zore.

Spiže mi, spiže mi, ty môj anjel malý,
nech ti ten tvoj sníček nikto nezakalí!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/spize-mi-spize-mi/',
  },
  {
    id: 'song-sk-sprayer-frayer',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Sprayer-Frayer',
    description: '.. kobobóbo džódžo ... Chytili sprayera sprayera frayera',
    materials: [],
    steps: [],
    lyrics: `.. kobobóbo džódžo ...

Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa

A policajt sa vytešuje zápisnicu vypisuje
a zatiaľ opodiaľ okradli mi kámošku a vypáčili sámošku
a vybrali štyri banky sfaľšovali nové známky
a ukradli super autá - to netrápi policajta
zmenili si fúzy, vlasy, utiekli na falošné papapapapapasy
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa

A policajt sa vytešuje zápisnicu vypisuje
a zatiaľ opodiaľ za rohom sa tiene mihli
pichajú si hnusné ihly a zlodeji v cudzom byte
vyňuchali prachy skryté, otrhali plagáty
nič tu na nich neplatí
zmenili si fúzy, vlasy, utiekli na falošné papapapapapasy
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa

.. kobobóbo džódžo ...

Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa

Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa
Chytili sprayera sprayera frayera
že písal na stenu sprejom Ľúbim Ťa

A policajt sa vytešuje a Sprayer je frajer
A policajt sa vytešuje a Sprayer je frajer`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sprayer-frayer/',
  },
  {
    id: 'song-sk-stastia-zdravia-pokoj-svaty',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Šťastia, zdravia, pokoj svätý',
    description: 'Šťastia, zdravia, pokoj svätý,',
    materials: [],
    steps: [],
    lyrics: `Šťastia, zdravia,
pokoj svätý,
vinšujeme vám,
najprv pánu gazdíčkovi
a potom aj vám.
Z ďaleka k vám ideme,
novinu vám nesieme,
čo sa stalo prihodilo
v meste Betléme.

Šťastia, zdravia,
pokoj svätý,
vinšujeme vám,
všetkým ľuďom dobrej vôle,
všetkým stvoreniam.
Z ďaleka k vám ideme,
novinu vám nesieme,
že sa Kristus Pán narodil
v meste Betléme.

A to dieťa Betlehemské
poslalo nás k Vám,
aby ste mu prinášali
dary k jasličkám.
Netreba mu mliečka brať,
bo ho nasýtila mať.
Krásne vinše a nič inšie
máte mu poslať.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/stastia-zdravia-pokoj-svaty/',
  },
  {
    id: 'song-sk-stedry-vecer-nastal',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Štedrý večer nastal',
    description: 'Štedrý večer nastal, Štedrý večer nastal, koledy prichystal, koledy prichystal.',
    materials: [],
    steps: [],
    lyrics: `Štedrý večer nastal, Štedrý večer nastal,
 koledy prichystal, koledy prichystal.
 Dobrá mamko, vstaňte,
 dobrá mamko, vstaňte,
 koledy nám dajte,
 koledy nám dajte.
 Dobrá mamko vstala,
 dobrá mamko vstala.
 Koledy nám dala,
  koledy nám dala.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/stedry-vecer-nastal/',
  },
  {
    id: 'song-sk-stonozka-rafaela',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Stonožka Rafaela',
    description: 'Ja som Vaša kamoška, Rafaela - stonožka.Mám červené ponožky',
    materials: [],
    steps: [],
    lyrics: `Ja som Vaša kamoška,
Rafaela - stonožka.Mám červené ponožky
a patrím medzi stonožky.Hej Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Rafaela má sto nôhJa som Vaša kamoška,
Rafaela - stonožka.Mám maličkú hlavičku a na zadočku mašličku.
Hej Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Rafaela má sto nôhJa som Vaša kamoška,
Rafaela - stonožka.
Mám červené ponožky
a patrím medzi stonožky.Hej Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Rafaela má sto nôh.Mám maličkú hlavičku
a na zadočku hlavičku.Hej Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Hop Rafaela, čup, čup bugy
Rafaela má sto nôh.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/stonozka-rafaela/',
  },
  {
    id: 'song-sk-sviet-nam-stromcek-jagavy',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Svieť nám stromček jagavý',
    description: 'Svieť nám stromček jagavý, už sme všetci zvedaví,',
    materials: [],
    steps: [],
    lyrics: `Svieť nám stromček jagavý,
už sme všetci zvedaví,
čí je to darček a čo je v ňom?

cin-gi lin-gi cin-gi lingi bom

Svieť nám vločka veselá,
svet sa odel do biela.
Bláznivé vrabce škriepia sa s ním:
čim ča rára čim ča rárá čim!

Svieť nám stromčk bielučký,
chytíme sa za rúčky,
nech naším spevom znie celý dom.

fidli tidli fidli tidli bom`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/sviet-nam-stromcek-jagavy/',
  },
  {
    id: 'song-sk-talizman',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Talizman',
    description: 'maj sa, maj lipám už žltnú šaty',
    materials: [],
    steps: [],
    lyrics: `maj sa, maj
lipám už žltnú šaty
tak maj sa, maj
o rok sa znovu vrátim

som ako ľad čo sa v kole topí
zmiznem jak leto, zmiznem bez stopy

na rozlúčku darujem ti môj talizman
spávaj s ním a vrátim sa vo sne
na rozlúčku darujem ti môj talizman
za leto prekrásne

maj sa, maj
na pláži je už chladno
a listy líp
padnú v bazéne na dno

som ako ľad čo sa v kole topí
zmiznem jak leto, zmiznem bez stopyna rozlúčku darujem ti môj talizman
 spávaj s ním a vrátim sa vo sne
 na rozlúčku darujem ti môj talizman
 za leto prekrásne`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/talizman/',
  },
  {
    id: 'song-sk-tam-rastla-krasna-jedlicka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'Tam rástla krásna jedlička',
    description: 'Tam rástla krásna jedlička, kde šumel hustý háj,',
    materials: [],
    steps: [],
    lyrics: `Tam rástla krásna jedlička,
kde šumel hustý háj,
či kvitol kvet, či padal sneh,
vždy bola zelená.

Jej metelica nôtila do sníčkov častokrát
a mráz ju snehom ukrúcal,
by nezamrzla snáď.

A zajko bojko ušatý si skákal rád pod ňou
a kde-tu zlostný sivý vlk sa mihol čistinou.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/tam-rastla-krasna-jedlicka/',
  },
  {
    id: 'song-sk-tancek',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Tanček',
    description: 'Ľavá nôžka pravá nôžka zatancujeme si troška.',
    materials: [],
    steps: [],
    lyrics: `Ľavá nôžka pravá nôžka
zatancujeme si troška.
Hlboko sa pokloníme
a veselo zatočíme.

Ľavá rúčka pravá rúčka
trhám trhám hrušky do koblúčka.
Keď ich všetky otrháme,
pôjdeme ich odniesť mame.

Jedno uško, druhé uško,
od hrušiek ma bolí bruško.
Jeden fňuká, druhý čuší,
zakryme si obe uši.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/tancek/',
  },
  {
    id: 'song-sk-tanci-tanci-tanci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Tanči tanči tanči',
    description: 'Tanči tanči tanči pôjdeme my k Anči',
    materials: [],
    steps: [],
    lyrics: `Tanči tanči tanči
pôjdeme my k Anči
a od Anči ku Kače
na makové koláče.

Tanči tanči tanči
pôjdeme my k Anči
a od Anči k Elene
na slížiky varené.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/tanci-tanci-tanci/',
  },
  {
    id: 'song-sk-tancuj-tancuj-vykrucaj',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Tancuj, tancuj, vykrucaj',
    description: 'Tancuj, tancuj, vykrucaj, vykrucaj, len mi piecku nezrucaj, nezrucaj!',
    materials: [],
    steps: [],
    lyrics: `Tancuj, tancuj, vykrucaj, vykrucaj,
len mi piecku nezrucaj, nezrucaj!
Lepsia piecka na zimu, na zimu,
nema kazdy perinu, perinu.

Trala la-la, trala la-la,
la la la la la-la-la-la.
Trala la-la, trala la-la,
la la la la la-la-la-la.

Stoji vojak na varte, na varte,
v roztrhanom kabete, kabete,
od vecera do rano, do rano,
rosa nanho padala, padala.

Trala la-la, trala la-la,
la la la la la-la-la-la.
Trala la-la, trala la-la,
la la la la la-la-la-la.

Mala som ja rukavce, rukavce,
dala som ich cigance, cigance,
ciganecka malicka, malicka
pricaruj mi synecka, synecka.

Trala la-la, trala la-la,
la la la la la-la-la-la.
Trala la-la, trala la-la,
la la la la la-la-la-la.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/tancuj-tancuj-vykrucaj-1/',
  },
  {
    id: 'song-sk-tancujem-spievam-si',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Tancujem, spievam si',
    description: 'Tancujem, spievam si, som do Pána zbláznený.',
    materials: [],
    steps: [],
    lyrics: `Tancujem, spievam si,
som do Pána zbláznený.
Nedokážem ukrývať,
že radosť v srdci mám.
Strácam hlas,
no pre Ježiša oplatí sa viac.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/tancujem-spievam-si/',
  },
  {
    id: 'song-sk-telefon',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Telefón',
    description: 'Telefón svoj nový mám, komu chcem si zavolám.',
    materials: [],
    steps: [],
    lyrics: `Telefón svoj nový mám,
komu chcem si zavolám.
Predstavím sa, tu je Betka,
haló haló, je tam tetka?

Telefón si k uchu dám,
komu chcem si zavolám.

Telefón svoj nový mám,
komu chcem si zavolám.
Predstavím sa, tu je Vladko
haló haló, je tam tatko?

Telefón si k uchu dám,
komu chcem si zavolám.

Telefón svoj nový mám,
komu chcem si zavolám.
Predstavím sa, tu je Hanka,
haló haló, je tam mamka?

Telefón si k uchu dám,
komu chcem si zavolám.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/telefon/',
  },
  {
    id: 'song-sk-teletubbies',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Teletubbies',
    description: 'one one two twe three three oh four four uf uf uf Teletubbies',
    materials: [],
    steps: [],
    lyrics: `one one two twe three three oh four four
uf uf uf Teletubbies

Tinki-vinky Tinki-vinky
Dipsi Dipsi
Lala Lala
Po Po
Teletubies teletubies say hello hello

Tinki-vinky Tinki-vinky
Dipsi Dipsi
Lala Lala
Po Po
Teletubies teletubies say hello hello

ou ou!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/teletubbies/',
  },
  {
    id: 'song-sk-ticha-noc',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Tichá noc',
    description: 'Tichá noc, svätá noc! Všetko spí, všetko sní,',
    materials: [],
    steps: [],
    lyrics: `Tichá noc, svätá noc!
Všetko spí, všetko sní,
sám len svätý bdie dôverný pár,
stráži Dieťatko, nebeský dar.
Sladký Ježiško spí, sní,
nebesky tiško spí, sní.

Tichá noc, svätá noc!
Anjeli zleteli,
najprv pastierom podali zvesť,
ktorá svetom dnes dáva sa niesť:
Kristus, Spasiteľ je tu,
Tešiteľ sveta je tu!

Tichá noc, svätá noc!
Nežná tvár, lásky žiar
božsky rozsieva v jasličkách tam:
bije záchranná hodina nám
v tvojom zrodení, Boh Syn,
Ježiško, Láska, Boh Syn!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/ticha-noc-2/',
  },
  {
    id: 'song-sk-toci-sa-mi-toci',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Točí sa mi, točí',
    description: 'Točí sa mi, točí, vôkol mojich očí, pekný máj.',
    materials: [],
    steps: [],
    lyrics: `Točí sa mi, točí,
vôkol mojich očí, pekný máj.
Poďme všetci spolu,
sväťme v tomto kolu,
jar a máj.

A ja si ho vítam
a jednu si pýtam,
do skoku.

Vyber si ty sama,
ktorá ti je známa,
ku boku.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/toci-sa-mi-toci-1/',
  },
  {
    id: 'song-sk-toto-je-den',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Toto je deň',
    description: 'Toto je deň ktorý dal nám Pán,',
    materials: [],
    steps: [],
    lyrics: `Toto je deň
ktorý dal nám Pán,
veseľme sa
i radujme sa v ňom.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/toto-je-den-1/',
  },
  {
    id: 'song-sk-travicka-zelena',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Travička zelená',
    description: 'Travička zelená, to je moje potěšení. Travička zelená, to je moje peřina.',
    materials: [],
    steps: [],
    lyrics: `Travička zelená, to je moje potěšení.
Travička zelená, to je moje peřina.
Když si smyslím na ní lehnu.
Když si smyslím na ní sednu.
Travička zelená, to je moje peřina.
Travička zelená, to je moje potěšení.
Travička zelená, to je moje peřina.
Jen se zjara začne pučit.
Nechci já se doma mučit.
Travička zelená, to je moje peřina.

..hudba..

Travička zelená, to je moje potěšení.
Travička zelená, to je moje peřina.
Když si smyslím na ní lehnu.
Když si smyslím na ní sednu.
Travička zelená, to je moje peřina.
Travička zelená, to je moje potěšení.
Travička zelená, to je moje peřina.
Jen se zjara začne pučit.
Nechci já se doma mučit.
Travička zelená, to je moje peřina.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/travicka-zelena-1/',
  },
  {
    id: 'song-sk-trosku-moderni-nanynka',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Trosku moderní Nanynka',
    description: 'a nyní vám přečteme nejnovější zprávy je to už celý měsíc co známý rošŤák pepíček byl obžalován',
    materials: [],
    steps: [],
    lyrics: `a nyní vám přečteme nejnovější zprávy

je to už celý měsíc co známý rošŤák pepíček byl obžalován

s činu vandalstvím který byl spáchán na košíčku nanynky

usvědčující důkaz košícek byl rozšlapán botami velikosti 35

s podrážkami zanesené pantukou to protože si rád zahraje tenis

přišel za ní pepíček rozšlapal jí košíček

tytytytytyty ty to budeš platiti tytyt nebo budeš platiti

ja to platit nebudu radši se dám na vojnu na vojnišku

na vojnu se nedávej rozkvetličkku nedělej

udělám udělám na vojnu se přece dám

šla nanynka do zelí do zelí  natrhala lupení lupeníčko

přišel za ní pepíček rozlšlapal jí košíček

tytyty ty to budueš platiti

tyty ty ty ty ty ty ty ty ty ty ty

vážení přátele děkujeme za vaši pomoc při pátrání

nanynce se omluvil koupil ji nový košíček

a sám do něj natrhal lupení

a jako sám řadni vojín brání svět před lumpy jako byl kdysi on

šla nanynka do zelí do zelí natrhala lupení lupeníčko

přišel za ní pepíček rozšlapal jí košíček

tyty tyty tyty ty to budeš platiti

já to platit nebudu radši se dám na vojnu

NA VOJNU SE NEDÁVEJ ROZKVETLIČKU NEDĚLEJ
DĚKUJU ZA POSLECH`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/trosku-moderni-nanynka/',
  },
  {
    id: 'song-sk-usni-mi-usni-mi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Usni mi, usni mi',
    description: 'Usni mi, usni mi, milým, tichým sníčkom, veď ťa ja vynesiem do hája chodníčkom.',
    materials: [],
    steps: [],
    lyrics: `Usni mi, usni mi, milým, tichým sníčkom,
veď ťa ja vynesiem do hája chodníčkom.

Zaspi mi, zaspi mi ako vtáča z hniezda,
už vyšla Zornička, tvoja milá hviezda.

Už svieti na nebi aj bledý mesiačik,
tak zavri očičká, ty mamin miláčik!

Usni mi, usni mi na bielom vankúši,
veď si aj tvoja mať oddýchnuť zaslúži.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/usni-mi-usni-mi/',
  },
  {
    id: 'song-sk-uz-sme-prisli-z-vyletu',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Už sme prišli z výletu',
    description: 'Už sme prišli z výletu nezmokli sme a sme tu.',
    materials: [],
    steps: [],
    lyrics: `Už sme prišli z výletu
nezmokli sme a sme tu.

Mamička nás pochváli
že sme všetko spapali.

A otecko bude rád
že sa môže s nami hrať.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/uz-sme-prisli-z-vyletu/',
  },
  {
    id: 'song-sk-v-hlbokej-doline',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10","kitchen"],
    title: 'V hlbokej doline',
    description: 'V hlbokej doline Srnka vodu pije',
    materials: [],
    steps: [],
    lyrics: `V hlbokej doline
Srnka vodu pije
Horár na ňu mieri
Že si ju zastrelí
Že si ju zastrelí

Nestrieľaj ma, horár
Ne ni som ja srnka
Ale som ja, ale
Zakliata panenka
Zakliata panenka

Zakliala ma mamka
V nedeľu za rána
Že som nechcela ísť
Za pána horára
Za pána horára

Horári, horári
Zle horárujete
Za každou jedličkou
Dievča milujete
Dievča milujete

Horárova žena
Bledá ako stena
A horár červený
Ľúbi mladé ženy
Ľúbi mladé ženy`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/v-hlbokej-doline-1/',
  },
  {
    id: 'song-sk-v-rieke-co-sa-vola-nil',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'V rieke, čo sa volá Níl',
    description: 'V rieke, čo sa volá Níl, býva krokodíl díl –díl, ale ja, ležím vám, do slniečka pozerám.',
    materials: [],
    steps: [],
    lyrics: `V rieke, čo sa volá Níl, býva krokodíl díl –díl,
ale ja, ležím vám, do slniečka pozerám.
Levíča si leží tu, dvíha hlavu ušatú,
ale ja ležím vám, na leva sa nedívam.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/v-rieke-co-sa-vola-nil/',
  },
  {
    id: 'song-sk-v-zime',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'V zime',
    description: 'Hore brehom, dolu brehom, zapadla mi chajda snehom.',
    materials: [],
    steps: [],
    lyrics: `Hore brehom, dolu brehom,
zapadla mi chajda snehom.
Ľudia Boží rata,
neviem, kde mám vráta!

Sem lopatu, cupi-lupi,
spravím chodník do chalupy,
vymetiem i dvor
pre zajačka z hôr.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/v-zime/',
  },
  {
    id: 'song-sk-vadi-nevadi',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vadí nevadí',
    description: 'Refrén Poď sa hrať vadí nevadí,',
    materials: [],
    steps: [],
    lyrics: `Refrén
Poď sa hrať vadí nevadí,
táto hra o nás všetko prezradí.
No tak poď sa hrať vadí nevadí,
hra na pravdu o nás všetko odhalí.

Si do mňa a ja som do teba,
už to o nás všetci hovoria,
lenže ty mi slovka nepovieš,
hanbíš sa a tak neviem či ma chceš.

Refrén
Poď sa hrať vadí nevadí,
táto hra o nás všetko prezradí.
No tak poď sa hrať vadí nevadí,
hra na pravdu o nás všetko odhalí.

Si do mňa a ja som do teba,
naše oči to dobre vedia,
prečo mi to rovno nepovieš,
že už dávno so mnou chodiť chceš.

Refrén
Poď sa hrať vadí nevadí,
táto hra o nás všetko prezradí.
No tak poď sa hrať vadí nevadí,
hra na pravdu o nás všetko odhalí.

Si do mňa a ja som do teba,
už to o nás všetci hovoria,
lenže ty mi slovka nepovieš,
hanbíš sa a tak neviem či ma chceš.

Refrén
Poď sa hrať vadí nevadí,
táto hra o nás všetko prezradí.
No tak poď sa hrať vadí nevadí,
hra na pravdu o nás všetko odhalí.

Poď sa hrať vadí nevadí,
táto hra o nás všetko prezradí.
No tak poď sa hrať vadí nevadí,
hra na pravdu o nás všetko odhalí.Interpret: Petra Jurinová`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vadi-nevadi/',
  },
  {
    id: 'song-sk-vcelka-maja',
    type: 'song',
    category: 'songs',
    lang: 'CZ',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vcelka Mája',
    description: 'UČENÍ PÁNI ZKUŠENÍ JÁ  RÁD BYCH VÁM  TEĎ PODOTKNUL',
    materials: [],
    steps: [],
    lyrics: `UČENÍ PÁNI ZKUŠENÍ

JÁ  RÁD BYCH VÁM  TEĎ PODOTKNUL

NIKDO Z VÁS NEMÁ TUŠENÍ

ŽE V DÁLCE STOJÍ MALÝ ÚL

Z NĚJ KAŽDÉ RÁNO VYLÉTÁVÁ VČELKA MÁJA

NAŠE KAMARÁDKA VČELKA MÁJA

MÁME JÍ CO ZÁVIDĚT

VÝŠKU Z KTERÉ VIDÍ SVĚT

A O TOM  VYPRÁVÍ NÁM O TOM VČELKA MÁJA

MALÁ ULIČNICE VČELKA MÁJA

MÁVNE KŘÍDLY VČELKA MÁJA

2x MÁÁÁJAAAAA

MÁJA ZAS MÍŘÍ MEZI NÁS`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vcelka-maja-1/',
  },
  {
    id: 'song-sk-vcielka-maja',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Včielka Maja',
    description: 'V krajine kde sa piesok lial a kde sa sypal vodopád,',
    materials: [],
    steps: [],
    lyrics: `V krajine kde sa piesok lial
a kde sa sypal vodopád,
bývala včielka nezbedná,
ten, kto ju poznal
mal ju rád.

Tá včielka, čo vám o nej spievam
to je Maja
veľká malá nezbednica Maja
lieta svetom sem i tam,
stále za ňou utekám.

Aj dnes k nám letí
naša včielka Maja,
Maja, Maja
leť rýchlo, priamo k nám.Interpret: Karel Gott`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vcielka-maja/',
  },
  {
    id: 'song-sk-vesela-pistalka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Veselá píšťalka',
    description: 'Du-du, du-du, dú, du-du, di-di-di-di dom',
    materials: [],
    steps: [],
    lyrics: `Du-du, du-du, dú,
du-du, di-di-di-di dom
vyhrávala píšťalka
v sade zelenom.

Aj kačička má rada
túto muziku,
keď vyhráva píšťalka
dudu, dudu, dú.

Stará kačka kváka si
taktiež do skoku,
pri veselej píšťalke
pláva v potoku.

Du-du, du-du, dú,
du-du, di-di-di-di dom
vyhrávala píšťalka
v sade zelenom.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vesela-pistalka/',
  },
  {
    id: 'song-sk-vesele-vianoce',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Veselé Vianoce',
    description: 'Vianoce,vianoce prichádzajú spievajme priatelia,',
    materials: [],
    steps: [],
    lyrics: `Vianoce,vianoce prichádzajú
spievajme priatelia,
po roku vianoce,vianoce prichádzajú
šťastné a veselé.

Čo si dedo pokoj nedá tlčie o stôl v predsieni,
a potom on márne hladá kapra na skrini.
Naša teta pečie roky na vianoce vianočku,
neraptáme aspoň máme niečo pre mačku.

Vianoce,vianoce prichádzajú
spievajme priatelia,
po roku vianoce,vianoce prichádzajú
šťastné a veselé.

Bez prskaviek tvrdil Slávek na štedrý deň nesmiem,
potom tato s minimaxom zavlažoval by.
Tieto ryby nedali by maso má len samú kosť,
porát tato vždy kedˇ beží na pohotovosť.

Vianoce,vianoce prichádzajú
spievajme priatelia,
po roku vianoce,vianoce prichádzajú
šťastné a veselé.

Vždy rád v roku na vianoce strýko husle popadne
jeho vinou plynú idú tony záhadné.
Strýko vydá dedo pridán esieme vám noviny
čím prakticky zničí vždycky večer rodinný.

Vianoce,vianoce prichádzajú
spievajme priatelia,
po roku vianoce,vianoce prichádzajú
šťastné a veselé.

A kedˇ zje sa čo je v mise televízor pustíme
v izbe dusne všetko stvrdne čo vyhovuje mne.
Mne sa tiež už krížia zraky bolo toho trochu moc,
máme na rok zase pokoj vždy až do vianoc.  Interpret: Senzus`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vesele-vianoce/',
  },
  {
    id: 'song-sk-vianoce-vianoce',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vianoce, Vianoce',
    description: 'V nebi niekto ráta z lupienkov margariet ľúbi, či neľúbi a sneží to na svet.',
    materials: [],
    steps: [],
    lyrics: `V nebi niekto ráta z lupienkov margariet
ľúbi, či neľúbi a sneží to na svet.
Je to celkom blízko, nastav k nebu tvár,
vločky hladkajú ťa, už ich nie je pár.

V nebi niekto ráta z lupienkov margariet
ľúbi, či neľúbi a sneží na svet.
Zimný anjel krídla na mesto ukladá,
mráz je cukor z torty a zima zosladla.

Tak spievaj, spievaj:
Vianoce, Vianoce, ticho sneží v nás,
Vianoce, Vianoce, konečne sú zas.Vianoce, Vianoce, ticho sneží v nás,
Vianoce, Vianoce, konečne sú zas.Vianoce, Vianoce, ticho sneží v nás,
Vianoce, Vianoce, konečne sú zas.Vianoce, Vianoce, ticho sneží v nás,
Vianoce, Vianoce, konečne sú zas.V nebi niekto ráta z lupienkov margariet
ľúbi, či neľúbi a sneží to na svet.
Je to celkom blízko, nastav k nebu tvár,
vločky hladkajú ťa, už ich nie je pár.

Tak spievaj, spievaj:
Vianoce, Vianoce, ticho sneží v nás,
Vianoce, Vianoce, konečne sú zas.Vianoce, Vianoce, ticho sneží v nás,
Vianoce, Vianoce, konečne sú zas.Interpret: Peter Nagy`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vianoce-vianoce/',
  },
  {
    id: 'song-sk-vianocna-rozpravka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vianočná rozprávka',
    description: 'Vianočná rozprávka je ako živá, všetko v tej rozprávke ozajstné býva.',
    materials: [],
    steps: [],
    lyrics: `Vianočná rozprávka je ako živá,
všetko v tej rozprávke ozajstné býva.
Oblátky, koláče, sviatočné šaty,
ozajstná mamička i ocko zlatý.

Ozajstný Ježiško v jasličkách leží
a zvony vianočné zvonia nám z veží.
Keď znejú koledy, spiežovce saní,
od šťastia zaspávam až na svitaní.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vianocna-rozpravka/',
  },
  {
    id: 'song-sk-vianocny-cas',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vianočný čas',
    description: 'Nebýva veľa tých zázračných dní, upradených zo snov,',
    materials: [],
    steps: [],
    lyrics: `Nebýva veľa tých zázračných dní,
upradených zo snov,
keď v každom okne hneď
po zotmení, prskavka
svieti tmou.

Malinké dieťa tu
spí v ihličí,
dušička detská od
šťastia kričí,
je v nás čas Vianoc,
je v nás čas Vianoc,
už Vianoce prichádzajú.

Ref.: Ježiško príde ku
každému z nás rozdávať
lásku vo vianočný čas.
Ježiško príde ku každému
z vás je tu čas Vianoc,
je vianočný čas,
v každom z nás.

Býva tak málo tých
dní zázračných, keď
v duši vládne mier
a z detských očí
čistých, priezračných,
radosť si každý ber.

Stromček už svieti
a zvonček zvoní
každý z nás veľkých
sa v dieťa zmení,
je v nás čas Vianoc,
je v nás čas Vianoc,
už Vianoce prichádzajú.

Ref.: Ježiško príde ku
každému z nás rozdávať
lásku vo vianočný čas.
Ježiško príde ku každému
z vás je tu čas Vianoc
je vianočný čas.

Malinké dieťa tu
spí v ihličí,
malým aj veľkým
už duša kričí,
je v nás čas Vianoc,
je v nás čas Vianoc,
už Vianoce prichádzajú.

Ref.:Ježiško prídi ku
každému z nás, rozdaj
nám lásku vo vianočný čas.
Ježiško prídi ku každému
z nás, veď je čas Vianoc
je vianočný čas.

Ježiško prídi ku
každému z nás, rozdaj
nám lásku vo vianočný čas.
Ježiško prídi ku každému
z nás, veď je čas Vianoc
je vianočný čas
v každom z nás (v každom z nás) Interpret: Noga a Skrúcaný`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vianocny-cas/',
  },
  {
    id: 'song-sk-vsetky-moje-kacatka',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Všetky moje káčatká',
    description: 'Všetky moje káčatká v mláke sa čľapkajú.',
    materials: [],
    steps: [],
    lyrics: `Všetky moje káčatká
v mláke sa čľapkajú.
Hlávky strčia do vody,
zadočky dvíhajú.

Všetky moje kuriatka
rozhrabujú slamu.
Krídelkami mávajú,
keď si zrno nájdu.

Všetky moje holuby
tie sa dobre majú.
Keď ich kocúr rozplaší,
na strom posadajú.

Všetky moje bábiky,
celý deň sa hrajú.
Ale v čistej postieľke,
očká zatvárajú.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vsetky-moje-kacatka/',
  },
  {
    id: 'song-sk-vstavajte-pastieri',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vstávajte pastieri',
    description: 'Vstávajte pastieri, berte sa hor, aká to novina, dajte pozor!',
    materials: [],
    steps: [],
    lyrics: `Vstávajte pastieri, berte sa hor,
aká to novina, dajte pozor!
Aké to zázraky javia sa na nebi.
Nikdy som nevidel jak som starý,
na nebi vysokom takej žiary.

Len sa ma nebojte pastuškovia,
prichádzam k vám ako anjel Slova.
Aby som vám zvestil, že sa vám narodil,
Mesiáš v Betleme, Ježiš malý,
ktorého oddávna ste čakali.

Iďte a nájdete Kráľa kráľov,
Ježiška malého, Pána pánov.
V mestečku Betleme, v jasličkách na slame,
leží náš Spasiteľ narodený,
v chudobných plienočkách položený.

Bratkovia rýchle sa pozberajme,
Ježiška navštíviť nemeškajme.
K nemu sa dostavme, pekne ho vítajme.
Čo ktorí môžeme a čo máme
najlepšie dary mu odovzdáme.

Vitaj o Ježiško Spasiteľ náš,
v maštali zrodený náš Mesiáš.
By si nás požehnal do svojej slávy vzal.
Prosiť ťa chceme dnes najvyšší Pán,
milosti svojej vždy udeľ nám.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vstavajte-pastieri/',
  },
  {
    id: 'song-sk-vyrastol-nam-stromcek',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Vyrástol nám stromček',
    description: 'Vyrástol nám stromček v izbe pod oknom, ihličím a sviatkom vonia celý dom.',
    materials: [],
    steps: [],
    lyrics: `Vyrástol nám stromček v izbe pod oknom,
ihličím a sviatkom vonia celý dom.
Striebro hviezdičiek sa na ňom ligoce,
aby každý vedel, že sú Vianoce.

Aké sú to zvesti, aké noviny?
Roztrhli sa v mrakoch biele periny.
Keď nám hlávky nôcka spánkom omoce,
bude sa nám snívať, že sú Vianoce.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/vyrastol-nam-stromcek/',
  },
  {
    id: 'song-sk-we-wish-you-a-merry-christmas',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'We Wish You a Merry Christmas',
    description: 'We wish you a Merry Christmas, We wish you a Merry Christmas,',
    materials: [],
    steps: [],
    lyrics: `We wish you a Merry Christmas,
We wish you a Merry Christmas,
We wish you a Merry Christmas
and a Happy New Year.

We wish you a Merry Christmas,
We wish you a Merry Christmas,
We wish you a Merry Christmas
and a Happy New Year.

Good tidings we bring to you and your kin;
We wish you a Merry Christmas
and a Happy New Year.

We all want some figgy pudding,
We all want some figgy pudding,
We all want some figgy pudding,
so bring some right here.

We won't go until we get some,
We won't go until we get some,
We won't go until we get some,
so bring some right here.

Good tidings we bring to you and your kin;
We wish you a Merry Christmas
and a Happy New Year.

Good tidings we bring to you and your kin;
We wish you a Merry Christmas
and a Happy New Year.

We wish you a Merry Christmas,
We wish you a Merry Christmas,
We wish you a Merry Christmas
and a Happy New Year.

We wish you a Merry Christmas,
We wish you a Merry Christmas,
We wish you a Merry Christmas
and a Happy New Year.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/we-wish-you-a-merry-christmas/',
  },
  {
    id: 'song-sk-whait-a-minute',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Whait a minute',
    description: 'Everybody listen all over the world I got a story ´bout my favorite girl (Wait a minute)',
    materials: [],
    steps: [],
    lyrics: `Everybody listen all over the world
I got a story ´bout my favorite girl (Wait a minute)

Oh, my baby´s sexy for sure
I had to have him when he walked through the door

(Wait a minute)
She was ´bout to drive me insane
She come with drama while I´m giving her chains (Wait a minute)

I´m focused but I´m losing control
He only wants me for my body is all (Wait a minute)

Girl, why you do me like that?
You take all my money
Can´t even call a player back
So wait a minute
Boy, why you trippin´ like that?
You think ´cause you trickin´
You get it just like that?
Wait a minute

Minding my business, I was doing my dance (go girl!)
Got my attention, so I gave him a chance (Wait a minute)
Did I mention he was buying the bar? (yes, you did)
Gave him my number, he was trying so hard (Wait a minute)
Bought me some things I didn´t want, didn´t need (yeah)
Dropped down his jeans like I´m supposed to drop to my knees (Wait a minute)
Now he been blowing up my phone like he know me (oh no)
Been leaving messages "You know what you owe me"
Oh no
(Wait a minute)

Girl, why you do me like that?
You take all my money
Can´t even call a player back
So wait a minute
Boy, why you trippin´ like that?
You think ´cause you trickin´
You get it just like that?
Wait a minute
Girl, why you do me like that?
You take all my money
Can´t even call a player back
So wait a minute
Boy, why you trippin´ like that?
You think ´cause you trickin´
You get it just like that?
Wait a minute

What is your problem daddy?
Slow your roll
Who you think you jivin´?
You disturbing my flow! (Wait a minute)
Why you be buggin´
Like I´m some kind of ho?
Got no more questions now I want you to go!
So break! ( Bu-bu-ba-duh!)

Hey, let me talk to you for a minute
Shut up... shut up

I love the way you strut
Girl, you already know
But, I´m feeling like you don´t want me
You just after my dough

Baby, please, I´m fine
I´m not one of these hos
Chasing dreams and diamond rings
So don´t call me no more

Hey
Oh
Hey
Oh
Wait a minute

Girl, why you do me like that?
You take all my money
Can´t even call a player back
So wait a minute
Boy, why you tripping like that?
You think ´cause you trickin´
You get it just like that?
Wait a minute
Girl, why you do me like that?
You take all my money
Can´t even call a player back
So wait a minute
Boy, why you trippin´ like that?
You think ´cause you trickin´
You get it just like that?
Wait a minute

See, I don´t want your money
Yeah, I´ve seen you rolling up here
In your Cadillac
But, I don´t need all that
It is a nice color though
(Wait a minute)

What they call you, Mr. Tin man or something?
See, I don´t want your cars
I don´t want your jewelry
You can´t buy this
So you can keep that
Wait a minute...
Uh yeah, you can give me that back`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/whait-a-minute/',
  },
  {
    id: 'song-sk-willy-fog-na-ceste-okolo-sveta',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Willy Fog na ceste okolo sveta',
    description: 'Už o mne správy máte, som známy cestovateľ, Willy Fog sa volám. Mám povesť džentlmena, môj život to je zmena, dôkaz na to mám.',
    materials: [],
    steps: [],
    lyrics: `Už o mne správy máte, som známy cestovateľ, Willy Fog sa volám.
Mám povesť džentlmena, môj život to je zmena, dôkaz na to mám.

Už som tu, som Baspartu, som Tico šampión.
Malá Romy, to som ja, som usmievavá, pôvabná.Ten, kto má kamarátov, ten vie, že s nimi môže za to,
do neznámych končín s nimi ísť,

My sme prosím pekne tí, čo plnia vaše sny, obísť svet za 80 dní,
vedz, že to nie je dlhý čas, na ceste plno nástrah čaká nás.

Ten, kto chce s nami obísť svet,
nech vie, že to nie je med,

nech vie, že to nie je maličkosť.
Vážne!

Nájdi si ten čas, skús odprevadiť nás!
Hej nájdi si ten čas, skús odprevadiť nás!`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/willy-fog-na-ceste-okolo-sveta/',
  },
  {
    id: 'song-sk-wonderful-dream-holidays-are-coming',
    type: 'song',
    category: 'songs',
    lang: 'EN',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Wonderful Dream (Holidays Are Coming)',
    description: 'When the world is ever changing Light a candle in the dark',
    materials: [],
    steps: [],
    lyrics: `When the world is ever changing
Light a candle in the dark
There's a source of inspiration in the air
Let the magic dry your tears and heal your heart

A wonderful dream of love and peace for everyone
Of living our lives in perfect harmony
A wonderful dream of joy and fun for everyone
To celebrate a life where all are free

Now the children's eyes are shining
Like they never shown before
Let their dreams and aspirations light our way
Living life in harmony forever more

Holidays are coming
Holidays are coming....
Celebrate a life where dreams come true
Love is the reason it's always the real thing
Watch out - look around

Lalala....
Lalala....
Celebrate a life where dreams come true
Love's the reason it's always the real thing Interpret: Melanie Thornton`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/wonderful-dream-holidays-are-coming/',
  },
  {
    id: 'song-sk-z-vychodnej-dievcata',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Z Východnej dievčatá',
    description: 'Z Východnej dievčatá, čím sa umývate?',
    materials: [],
    steps: [],
    lyrics: `Z Východnej dievčatá,
čím sa umývate?
Že vy svoje líčka
vždy červené máte.

My sa umývame
každý deň do rôčka
v studenej vodičke
z bystrého potôčka.

A ja sama prvá
ja sa nemaľujem.
Ja na svoje líčka
farby nekupujem.

Keby ja na líčka
farby kupovala,
kdeže by moja mať
peňazí nabrala.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/z-vychodnej-dievcata-1/',
  },
  {
    id: 'song-sk-zahrajte-mi-tichucko',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Zahrajte mi tichúčko',
    description: 'Zahrajte mi tichúčko, javorové husle.',
    materials: [],
    steps: [],
    lyrics: `Zahrajte mi tichúčko,
javorové husle.
Nech mi ten môj synáčik
na chvílenku usne.
Hajaj, búvaj Janíčku.

Hajajú hajajú
šla ti mať do háju.
Nazbiera tam kvietia,
odloží si dieťa.

Beliže mi beli,
môj anjelik biely,
nedám si ťa, nedám,
za tento svet celý.

Haju, haju, haju, haju.
A čože hrajú?
Veď ho radi majú.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/zahrajte-mi-tichucko/',
  },
  {
    id: 'song-sk-zajacik-usiacik',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Zajačik ušiačik',
    description: 'Zajačik zadupkaj, ušiačik zadupkaj. Hopi cupi zadupkaj.',
    materials: [],
    steps: [],
    lyrics: `Zajačik zadupkaj, ušiačik zadupkaj.
Hopi cupi zadupkaj.
Hopi cupi zadupkaj.

Zajačik utekaj, ušiačik utekaj.
Zajačik poskoč si, ušiačik poskoč si.
Zajačik zatlieskaj , ušiačik zatlieskaj.
Zajačik umy sa, ušiačik umy sa.
Zajačik učeš sa, ušiačik učeš sa.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/zajacik-usiacik/',
  },
  {
    id: 'song-sk-zala-som-travicku',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Žala som trávičku',
    description: 'Anička maličká, kde si bola, že si si čižmičky zarosila?',
    materials: [],
    steps: [],
    lyrics: `Anička maličká, kde si bola,
že si si čižmičky zarosila?
Bola som v hájičku,
žala som trávičku,
duša moja, duša moja.

A ja som pod horou jačmeň kosil,
ja som si čižmičky nezarosil.
A ja som hrabala,
teba som čakala,
duša moja, duša moja.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/zala-som-travicku-1/',
  },
  {
    id: 'song-sk-zlata-brana',
    type: 'song',
    category: 'songs',
    lang: 'SK',
    stages: ["6-9m","9-12m","12-15m","15-18m","18-21m","21-24m","24-27m","27-30m","30-33m","33-36m"],
    tags: ["no-prep","under-10"],
    title: 'Zlatá brána',
    description: 'Zlatá brána otvorená, zlatým kľúčom podoprená.',
    materials: [],
    steps: [],
    lyrics: `Zlatá brána otvorená,
zlatým kľúčom podoprená.
Kto do nej vojde,
hlava mu zojde,
či je ona, či je on,
nepustím ho z brány von.`,
    notes: 'Zdroj: https://hudba.zoznam.sk/akordy/piesen/zlata-brana-1/',
  },
]

export const songs = cleanSongTags(rawSongs)
