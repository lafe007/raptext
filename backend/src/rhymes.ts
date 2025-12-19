// Česká databáze rým a slov pro rapování - ROZŠÍŘENÁ VERZE
export const czechRhymes: Record<string, string[]> = {
  // Slova končící na -ak
  "ak": ["bak", "kak", "mak", "jak", "tak", "rak", "sak", "vak", "plak", "znak", "rok", "sok", "hak", "čak", "drak", "stan"],
  
  // Slova končící na -ám
  "ám": ["dám", "vám", "můžem", "jsi", "já", "jsou", "jsou tam", "mám", "znám", "vidím", "chci", "dělám"],
  
  // Slova končící na -et
  "et": ["ret", "het", "met", "set", "vet", "zet", "beat", "feet", "street", "heat", "jet", "net", "pet"],
  
  // Slova končící na -ice/-ica
  "ice": ["vice", "rice", "mice", "nice", "spice", "dice", "twice", "rice", "justice"],
  
  // Slova končící na -ní/-enie
  "ní": ["tuhý", "hlubý", "divoký", "volný", "krásný", "smutný", "hezký", "bezcenný", "silný", "svobodný"],
  
  // Slova končící na -aj/-ej
  "aj": ["raj", "staj", "gaj", "maj", "say", "way", "day", "play", "stay", "bay", "hay", "lay"],
  
  // Slova končící na -ot/-yt
  "ot": ["bot", "hot", "got", "not", "pot", "rot", "shot", "slot", "spot", "trot", "dot", "lot"],
  
  // Slova končící na -ůl/-ul
  "ůl": ["kůl", "půl", "cool", "pool", "tool", "school", "rule", "fuel", "duel"],
  
  // Slova končící na -ad
  "ad": ["grad", "brad", "chad", "clad", "glad", "mad", "sad", "pad", "tad", "bad", "had"],
  
  // Slova končící na -all
  "all": ["ball", "call", "fall", "hall", "mall", "tall", "wall", "small", "stall", "all"],
  
  // Slova končící na -ow
  "ow": ["bow", "cow", "how", "low", "now", "row", "show", "slow", "snow", "throw", "flow", "glow"],
  
  // Slova končící na -ing
  "ing": ["bing", "ding", "king", "ping", "ring", "sing", "ting", "wing", "bring", "spring", "string", "thing"],
  
  // Slova končící na -ame/-ami
  "ame": ["ame", "came", "dame", "fame", "game", "lame", "name", "same", "shame", "blame", "flame", "frame"],
  
  // Slova končící na -ound
  "ound": ["bound", "found", "ground", "hound", "mound", "pound", "round", "sound", "wound"],
  
  // Slova končící na -ay
  "ay": ["bay", "day", "gay", "hay", "jay", "lay", "may", "pay", "ray", "say", "way", "gray", "play", "stay"],
};

export const czechWords: Record<string, string[]> = {
  // Slova na téma města - ROZŠÍŘENO
  "city": [
    "Praha", "ulice", "byt", "dům", "řeka", "most", "park", "město", "západ", "východ", "střed", "centrum",
    "Vinohradinice", "Vinohrady", "Žižkov", "Libeň", "Smíchov", "Karlov", "Nové Město", "Staré Město",
    "Petřín", "Vltava", "Nerudova", "Nebeská", "kostel", "brána", "hrad", "zámek", "galerie", "muzeum",
    "metro", "tramvaj", "autobus", "taxi", "auto", "kolo", "cesta", "cyklista", "chodec", "turist",
    "restaurace", "kavárna", "hospoda", "bar", "klub", "diskotéka", "kino", "divadlo", "opera",
    "obchod", "tržnice", "trh", "ulička", "třída", "náměstí", "alej", "stezka", "schodiště", "výtah",
    "okno", "dveře", "vchod", "střecha", "fasáda", "zahrada", "balkon", "terasa", "plaza",
    "Pražáci", "Pražský", "občan", "místní", "emigrant", "návštěvník", "žák", "student"
  ],
  
  // Slova na téma peněz - ROZŠÍŘENO
  "money": [
    "koruna", "balík", "kešta", "hastra", "pasta", "chci", "mám", "nemám", "kolik", "stojí",
    "dej", "vezmi", "prodej", "cena", "mzda", "plat", "honorář", "penze", "podpora", "bohatství",
    "chudina", "majetek", "půjčka", "dluh", "úrok", "úspora", "vklad", "výběr", "bankomat", "banka",
    "peníze", "haléř", "dolar", "euro", "yuan", "libra", "rubl", "bitcoin", "krypto",
    "zisk", "ztráta", "obchod", "prodej", "nákup", "cena", "sleva", "výprodej", "akce",
    "investice", "akcie", "obligace", "pojištění", "daň", "poplatek", "clo", "tarif",
    "boháč", "milionář", "miliardář", "chudák", "chuďas", "špinavé peníze", "prachy", "forinta",
    "kejčal", "flus", "grešle", "hastrman", "kejklíř", "zednář", "zloděj", "lupič"
  ],
  
  // Slova na téma lásky - ROZŠÍŘENO
  "love": [
    "láska", "srdce", "polibek", "objetí", "oči", "tvář", "milá", "miláček", "miluju",
    "nezbývá", "chybí", "touha", "vášeň", "cit", "city", "rozum", "rozumění", "soulad",
    "jemnost", "něžnost", "něha", "něžný", "jemný", "hřívka", "vlasy", "tetování",
    "romantika", "romance", "vztah", "partnerství", "manželství", "sňatek", "svatba",
    "muž", "žena", "chlapec", "dívka", "kluk", "holka", "partner", "partnerka",
    "cit", "emoci", "pocit", "euforie", "osamocenost", "deprese", "smutek", "radost",
    "vernost", "věrnost", "zrada", "podvod", "lhání", "pravda", "upřímnost", "čestnost",
    "život", "společně", "spolu", "pospolu", "navždy", "věčnost", "osud", "setkání",
    "první pohled", "zamilování", "vztyčení", "vzrušení", "vášeň", "chuť"
  ],
  
  // Slova na téma party - ROZŠÍŘENO
  "party": [
    "diskotéka", "hudba", "tanec", "tančit", "písničky", "hra", "vtip", "zábava", "veselí",
    "pivo", "alkohol", "víno", "panák", "shot", "koktejl", "rum", "vodka", "whiskey", "gin",
    "tequila", "champagne", "sekt", "becherovka", "slivovice", "medovina",
    "párty", "slavnost", "oslava", "koncert", "festival", "hudební", "lístek", "vstupné",
    "dj", "dj-ing", "mix", "remix", "beat", "ritmus", "hudebník", "zpěvák", "zpěvačka",
    "reproduktor", "mikrofon", "ozvučení", "osvětlení", "efekty", "kouř", "pyrotechnika",
    "tanečník", "tanečnice", "balet", "hudba", "písně", "text", "slova", "melodie", "harmonie",
    "karaoke", "kabar", "cabaret", "divadlo", "představení", "show", "program",
    "legrační", "vtipný", "zábavný", "veselý", "radostný", "okouzlující", "úchvatný"
  ],
  
  // Slova na téma sebeprezentace - ROZŠÍŘENO
  "bragging": [
    "boss", "king", "sultan", "pán", "vůdce", "král", "cár", "magnát", "šéf", "ředitel",
    "jsem", "já", "můj", "moje", "náš", "naše", "tady", "tady doma", "tady v domě", "tady v ulici",
    "best", "nejlepší", "nejrychlejší", "nejpomaleší", "nejsilnější", "nejslabší", "nejmoudřejší",
    "vítěz", "vítězství", "triumf", "úspěch", "zvítězení", "dominace", "nadvláda", "nadřazenost",
    "sláva", "proslulost", "renomé", "pověst", "prestiž", "čest", "čestné", "honorární",
    "bohatství", "luxus", "noblesní", "vážný", "důležitý", "znamenitý", "záslužný",
    "zručnost", "schopnost", "talent", "dar", "vloha", "dovednost", "umění", "uměleckost",
    "odvaha", "kuráž", "statečnost", "hrdinství", "bezelstnost", "férovost", "čestnost"
  ],
  
  // Slova na téma hnevu - ROZŠÍŘENO
  "anger": [
    "zuřím", "jsem naštvaný", "vztek", "hněv", "mrtvý", "zabijak", "padouch", "zrůda",
    "čert", "demons", "peklo", "ďábel", "satan", "běs", "démón", "příšera", "strašidlo",
    "agrese", "útok", "nápad", "střet", "konflikt", "spor", "svar", "hádka", "pozn",
    "biják", "násilník", "útočník", "zločinec", "lupič", "vrah", "atentátor", "sabotátor",
    "nenávist", "opovržení", "pohrdání", "převrácení", "rozpouštění", "rozpuštění",
    "zuřit", "běsnit", "bouřit", "trhat", "vytrhat", "strhat", "roztrhání", "roztrháni",
    "smrtelný", "vraždící", "zabíjející", "smrtonosný", "destruktivní", "zkazy", "záhuba",
    "temný", "temnotný", "čerňý", "černý", "černočerný", "černosčerný", "tumenný",
    "bouře", "bouřlivý", "vichřice", "hurikán", "tornádo", "záplava", "potopa"
  ],
  
  // Slova na téma úspěchu - ROZŠÍŘENO
  "success": [
    "vítězství", "úspěch", "jsem nejlepší", "titul", "cena", "medaile", "sláva", "proslulost",
    "známost", "populární", "rebel", "vůdce", "champion", "šampion", "mistr", "expert",
    "profesionál", "odborník", "specialista", "geniální", "geniální", "senzační", "fantastický",
    "převratný", "revoluční", "inovativní", "originální", "unikátní", "jedinečný", "bezprecedentní",
    "boom", "expanze", "růst", "vzestup", "postup", "povýšení", "promoce", "kariéra",
    "postavení", "pozice", "funkce", "místo", "cíl", "plán", "strategie", "taktika",
    "peníze", "majetek", "bohatství", "luxus", "komfort", "pohodlí", "bezpečí", "jistota",
    "moč", "možnost", "schopnost", "talent", "dar", "vloha", "instinkt", "intuice",
    "věda", "technologie", "inovace", "objevy", "výzkum", "laborato", "experiment"
  ],
  
  // Slova na téma hip-hopu - ROZŠÍŘENO
  "hiphop": [
    "beat", "rým", "mikrofon", "hudebník", "DJ", "vinyl", "klip", "text", "refřén", "verš",
    "rapuji", "zpívám", "slyšíš", "poslouchej", "poslechni", "uslyš", "počkej", "ouej",
    "flow", "freestyl", "freestyle", "cypher", "cipher", "battle", "duel", "souboj",
    "hip-hop", "hip hop", "hip-hopový", "raper", "rapperem", "rapující", "zpěvák",
    "turntable", "mixer", "sampler", "effekt", "echo", "reverb", "distortion", "chorus",
    "album", "deska", "nahrávka", "singl", "EP", "mixtape", "kompilace", "best of",
    "skladba", "skladbička", "stopa", "track", "písnička", "hymna", "anthem", "theme",
    "věc", "věci", "věcička", "věcka", "věci", "věciček", "věcek", "věcko",
    "graffiti", "street art", "street", "street life", "ulice", "město", "metropole"
  ],
};

export const czechSlang: string[] = [
  // Základní slang
  "blbě", "bomba", "buzna", "čáro", "čivocha", "čuňo", "debil", "decko", "děkuju",
  "facka", "fejťák", "flastr", "foukej", "frajer", "frajerina", "fuckup",
  "gangster", "ganef", "geniální", "gero", "gestapák", "gladiátor", "granule",
  
  // Pokračování
  "hádej", "hajlovat", "halabala", "hallás", "havíř", "hazena", "hejna", "heroine",
  "hlasitě", "hlava", "hloupý", "hmota", "hniť", "hodina", "holand", "hole",
  "honička", "horko", "hotovost", "houby", "houká", "houpačka", "houpej",
  "chára", "chasa", "chata", "chcípl", "chce", "chemie", "cherubín", "chestie",
  "chezí", "chichot", "chiesa", "chlapisko", "chlastá", "chlemtá", "chlupatec",
  
  // Další slova
  "indián", "injekce", "input", "inspirovatko",
  "jáchymu", "jančí", "jarovství", "jarní", "jasmín", "jáva", "jářní",
  "jeby", "jedinkrát", "jedu", "jeest", "jejda", "jejím", "jejž", "jela",
  "jelata", "jelení", "jelimánka", "jelito", "jemný", "jen", "jenom", "jensa",
  "jente", "jerabiště", "jerami", "jeranina", "jerbáň", "jeremáda", "jeřmen",
  "jeřtej", "jes", "jesaň", "jesech", "jeseň", "jeseny", "jeseň", "jeseni",
  "jestě", "jestem", "jestli", "jestuň", "jesuiti", "jesulin", "jesulin",
  "jesulit", "jesuš", "jesutovo", "jesut", "jésutů",
  
  // Nová slova
  "kouč", "koupě", "kulička", "kumel", "kumšt", "kung-fu", "kuňka", "kuňkat",
  "kupě", "kupeliště", "kupeluška", "kupelna", "kupeluše", "kupel", "kupen",
  "kupena", "kupeni", "kuper", "kuperia", "kuperin", "kuperkej", "kuperlina",
  "kupelucha", "kupelušek", "kupelušinka", "kupelušela",
  
  // Více slangových výrazů
  "krucálek", "kruciálek", "krucíš", "krucina", "krule", "krutě", "kruta",
  "lahvanda", "lakonický", "lakota", "lamůra", "lament", "lamenta", "landra",
  "lapidární", "lápo", "lapod", "lapotí", "lapoun", "lapos", "lapouch", "lapota",
  "larda", "lardata", "lardy", "larko", "larna", "larva", "larvacha",
  
  // Experimentálnější slova
  "mačeta", "macho", "machoman", "machura", "machu", "machunda", "machunda",
  "machuň", "machur", "machuranda", "machurčo", "machurko", "machuta", "machutě",
  "madona", "madonna", "madžo", "madžolík", "madžoun", "madžuňa",
  
  // Ultra slang
  "nadrč", "nadrchle", "nadrchlý", "nadrchnout", "nadrchruj", "nadrchnuli",
  "nadržka", "nadržkovat", "nadržkování", "nadržkovaný", "nadržkářka",
  "nadválka", "nadválkanina", "nadválkář", "nadválení", "nadválej",
  
  // Mix všeho
  "obchod", "obchódek", "obchodíkátor", "obchodník", "obchodnice",
  "páce", "páceňa", "páceň", "pácer", "páceř", "pacerka", "pacerko",
  "padour", "padour", "padourka", "padourek", "padoura", "padourovina",
  
  // Hardcore slang
  "punk", "punk-rockeř", "punk-rockuje", "punk-rockující", "punk-rocker",
  "rajcenka", "rajcenka", "rajce", "rajčí", "rajčeň", "rajčeňa", "rajčenku",
  "raketa", "raketář", "raketák", "raketanda", "raketařka", "raketário",
  
  // Finální batch
  "sracha", "sračka", "sračkouna", "sračkoun", "sračkami", "sračení",
  "srachouna", "srachoun", "sranda", "srandovní", "srandovník",
  "tájo", "tajle", "tajlů", "tajlucha", "tajlůcká", "tajluška",
  "ubejcha", "ubejchanda", "ubejchar", "ubejcharek", "ubejchlo", "ubejchna",
  
  // Velmi netypický a crazy slang
  "vůbě", "vůbela", "vůbeňa", "vůbeň", "vůber", "vůbeř", "vůbě",
  "žebrák", "žebrákek", "žebračka", "žebračenka", "žebračina", "žebračisko",
  "žechranda", "žechranda", "žechrandy", "žechrandička", "žechrandítko"
];

export function findRhyme(word: string, excludeWord?: string): string | null {
  const lastSyllable = word.slice(-2);
  const rhymes = czechRhymes[lastSyllable];
  
  if (!rhymes || rhymes.length === 0) {
    return null;
  }
  
  let rhyme = rhymes[Math.floor(Math.random() * rhymes.length)];
  
  // Pokud se má vyhnout slovu, zkus znovu
  let attempts = 0;
  while (rhyme === excludeWord && attempts < 10) {
    rhyme = rhymes[Math.floor(Math.random() * rhymes.length)];
    attempts++;
  }
  
  return rhyme;
}

export function getWordsForTheme(theme: string): string[] {
  return czechWords[theme] || czechWords["city"];
}

export function getRandomWord(theme: string = "city"): string {
  const words = getWordsForTheme(theme);
  return words[Math.floor(Math.random() * words.length)];
}

export function getRandomSlang(): string {
  return czechSlang[Math.floor(Math.random() * czechSlang.length)];
}
