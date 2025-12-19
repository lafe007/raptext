// Česká databáze rým a slov pro rapování
export const czechRhymes: Record<string, string[]> = {
  // Slova končící na -ak
  "ak": ["bak", "kak", "mak", "jak", "tak", "rak", "sak", "vak", "plak", "znak"],
  
  // Slova končící na -ám
  "ám": ["dám", "vám", "můžem", "jsi", "já", "já máme", "jsou", "jsou tam"],
  
  // Slova končící na -et
  "et": ["ret", "het", "met", "set", "vet", "zet", "beat", "feet", "street", "heat"],
  
  // Slova končící na -ice/-ica
  "ice": ["vice", "rice", "mice", "nice", "spice", "dice", "twice"],
  
  // Slova končící na -ní/-enie
  "ní": ["tuhý", "hlubý", "divoký", "volný", "krásný", "smutný", "hezký", "bezcenný"],
  
  // Slova končící na -aj/-ej
  "aj": ["raj", "staj", "gaj", "maj", "maj", "say", "way", "day", "play", "stay"],
  
  // Slova končící na -ot/-yt
  "ot": ["bot", "hot", "got", "not", "pot", "rot", "shot", "slot", "spot", "trot"],
  
  // Slova končící na -ůl/-uł
  "ůl": ["kůl", "půl", "múl", "dúl", "búl", "cool", "pool", "tool", "school"],
  
  // Slova končící na -ad
  "ad": ["grad", "brad", "chad", "clad", "glad", "mad", "sad", "pad", "tad"],
  
  // Slova končící na -all
  "all": ["ball", "call", "fall", "hall", "mall", "tall", "wall", "small", "stall"],
  
  // Slova končící na -ow/-au
  "ow": ["bow", "cow", "how", "low", "now", "row", "show", "slow", "snow", "throw"],
  
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
  // Slova na téma města
  "city": ["Praha", "ulice", "byt", "dům", "řeka", "most", "park", "město", "západ", "východ", "střed", "centrum", "Vinohradinice", "Vinohrady", "Žižkov", "Libeň"],
  
  // Slova na téma peněz
  "money": ["koruna", "balík", "kešta", "hastra", "pasta", "bla bla", "chci", "mám", "nemám", "kolik", "stojí", "dej", "vezmi", "prodej"],
  
  // Slova na téma partnerství
  "love": ["láska", "srdce", "polibek", "objetí", "oči", "tvář", "milá", "miláček", "miluju", "nezbívá", "chybí", "touha", "vášeň"],
  
  // Slova na téma party
  "party": ["diskotéka", "hudba", "tanec", "tančit", "písničky", "hra", "vtip", "zábava", "veselí", "pivo", "alkohol", "víno", "panák", "shot"],
  
  // Slova na téma sebeprezentace
  "bragging": ["король", "boss", "king", "stojím", "jsem", "já", "můj", "moje", "náš", "naše", "tady", "tady doma", "tady v domě", "tady v ulici"],
  
  // Slova na téma hnevu
  "anger": ["zuřím", "jsem naštvaný", "vztek", "hněv", "mrtvý", "zabijak", "padouch", "zrůda", "čert", "demons", "peklo", "ďábel"],
  
  // Slova na téma úspěchu
  "success": ["vítězství", "úspěch", "jsem nejlepší", "titul", "cena", "medaile", "sláva", "sláva", "známost", "populární", "rebel", "vůdce"],
  
  // Slova na téma hip-hopu
  "hiphop": ["beat", "rým", "mikrofon", "hudebník", "DJ", "vinyl", "klip", "text", "refřén", "verš", "rapuji", "zpívám", "slyšíš", "poslouchej"],
};

export const czechSlang: string[] = [
  "blbě", "bomba", "buzna", "čáro", "čivocha", "čuňo", "debil", "decko", "děkuju",
  "facka", "fejťák", "flastr", "foukej", "frajer", "frajerina", "fuckup", 
  "gangster", "ganef", "geniální", "gero", "gestapák", "gladiátor", "granule",
  "hádej", "hajlovat", "halabala", "hallás", "havíř", "hazena", "hejna", "heroine",
  "hlasitě", "hlava", "hloupý", "hmota", "hniť", "hodina", "holand", "hole",
  "honička", "horko", "hotovost", "houby", "houká", "houpačka", "houpej",
  "chára", "chasa", "chata", "chcípl", "chce", "chemie", "cherubín", "chestie",
  "chezí", "chichot", "chiesa", "chlapisko", "chlastá", "chlemtá", "chlupatec",
  "indián", "injekce", "input",
  "jáchymu", "jančí", "jarovství", "jarní", "jasmín", "jáva", "jářní",
  "jeby", "jedinkrát", "jedu", "jeest", "jejda", "jejím", "jejž", "jela",
  "jelata", "jelení", "jelimánka", "jelito", "jemný", "jen", "jenom", "jensa",
  "jente", "jerabiště", "jerami", "jeranina", "jerbáň", "jeremáda", "jeřmen",
  "jeřtej", "jes", "jesaň", "jesech", "jeseň", "jeseny", "jeseň", "jeseni",
  "jestě", "jestem", "jestli", "jestuň", "jesuiti", "jesulin", "jesulin",
  "jesulit", "jesuš", "jesutovo", "jesut", "jésutů",
  "kouč", "koupě", "kulička", "kumel", "kumšt", "kung-fu", "kuňka", "kuňkat",
  "kupě", "kupeliště", "kupeluška", "kupelna", "kupeluše", "kupel", "kupen",
  "kupena", "kupeni", "kuper", "kuperia", "kuperin", "kuperkej", "kuperlina",
  "kupelucha", "kupelušek", "kupelušinka",
];

export function findRhyme(word: string, excludeWord?: string): string | null {
  const lastSyllable = word.slice(-2);
  
  if (czechRhymes[lastSyllable]) {
    const candidates = czechRhymes[lastSyllable].filter(w => w !== excludeWord && w !== word);
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
  }
  
  // Fallback - vrátit náhodné slovo
  const allWords = Object.values(czechRhymes).flat();
  return allWords[Math.floor(Math.random() * allWords.length)] || "slovo";
}

export function getWordsForTheme(theme: string): string[] {
  return czechWords[theme] || czechWords["city"] || [];
}

export function getRandomSlang(): string {
  return czechSlang[Math.floor(Math.random() * czechSlang.length)];
}

export function getRandomWord(theme: string = "city"): string {
  const words = getWordsForTheme(theme);
  return words.length > 0 ? words[Math.floor(Math.random() * words.length)] : "slovo";
}
