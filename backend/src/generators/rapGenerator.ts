import { findRhyme, getRandomWord, getRandomSlang, getWordsForTheme } from "../rhymes";

export interface RapGeneratorOptions {
  theme?: string;
  lines?: number;
  tempo?: number;
}

export interface GeneratedRap {
  text: string;
  theme: string;
  lines: number;
  rhymeScheme: string;
}

// Struktury pro rýmování a stavbu vět
const rhymeEndings: Record<string, string[]> = {
  "ak": ["bak", "jak", "tak", "znak", "plak"],
  "ení": ["vidění", "chování", "dělání", "kouření", "tání"],
  "ej": ["si hrej", "hrej", "prej", "spěj", "stej"],
  "iny": ["klíčoviny", "maléřoviny", "věcí tuhleviny", "ty"],
  "ou": ["do", "duo", "mou", "nou", "zou"],
  "om": ["nom", "dom", "som", "tom", "vom"],
};

// Věty s místem pro slova
const sentenceTemplates = [
  "V {1} se rodí {2}, to je {3}",
  "{1} je můj cíl, {2} je můj soud, {3}",
  "Chci {1}, znám {2}, cítím {3}",
  "{1} na ulici, {2} v noci, {3} mám",
  "Jsem jako {1}, mám {2}, vidím {3}",
  "{1} to znamená, {2} jak slyšíš, {3}",
  "Tady {1}, tady {2}, tady {3}",
  "{1} je můj, {2} je tvůj, {3} pro nás",
];

const connectors = [
  "a pak",
  "protože",
  "ale zase",
  "totiž",
  "znamená",
  "takže",
  "a když",
];

const attitudes = [
  "já vim",
  "to vím",
  "slyšíš?",
  "jasně",
  "vážně",
  "věř mi",
  "послухej",
  "no co",
];

export class RapGenerator {
  private syllablesPerLine: number = 16; // Přibližně čtyřicet slabik za minutu
  
  constructor() {}
  
  /**
   * Generuje rap text na základě možností
   */
  public generate(options: RapGeneratorOptions = {}): GeneratedRap {
    const theme = options.theme || "city";
    const lines = options.lines || 8;
    
    // Vytvoření rapové struktury
    const verses = this.generateVerses(lines, theme);
    const hook = this.generateHook(theme);
    const outro = this.generateOutro();
    
    // Kombinace na finální text
    const text = [
      this.formatVerse(verses),
      "",
      this.formatHook(hook),
      "",
      this.formatVerse(verses),
      "",
      this.formatOutro(outro)
    ].join("\n");
    
    return {
      text,
      theme,
      lines,
      rhymeScheme: this.analyzeRhymeScheme(verses)
    };
  }
  
  /**
   * Generuje verše s správným rýmovacím schématem
   */
  private generateVerses(lineCount: number, theme: string): string[] {
    const verses: string[] = [];
    
    // Generuj verše po dvou řádcích (couplets) s rýmováním
    for (let i = 0; i < lineCount; i++) {
      if (i % 2 === 0) {
        const [line1, line2] = this.generateRhymingCouplet(theme);
        verses.push(line1);
        if (i + 1 < lineCount) {
          verses.push(line2);
          i++; // Skip next iteration since we added 2 lines
        }
      }
    }
    
    return verses.slice(0, lineCount);
  }
  
  /**
   * Generuje dva řádky se správným rýmováním (AABB schéma)
   */
  private generateRhymingCouplet(theme: string): string[] {
    const templates = [
      // A-A rým schéma
      (w1: string, w2: string, w3: string) => [
        `V ${w1} žiju, vidím ${w2}, ${w3}`,
        `To je můj styl, to je můj cíl`,
      ],
      (w1: string, w2: string, w3: string) => [
        `${w1} na ulici, ${w2} v noci, já`,
        `${w3} znamená náš klíč`,
      ],
      (w1: string, w2: string, w3: string) => [
        `Chci víc než ${w1}, víc než ${w2}`,
        `Ty ${w3} máš rád, já to znám`,
      ],
      (w1: string, w2: string, w3: string) => [
        `${w1} nebo ${w2}? Vůbec ne`,
        `${w3} je má správná cesta`,
      ],
      (w1: string, w2: string, w3: string) => [
        `Jsem jako ${w1}, silný jak ${w2}`,
        `${w3} tady dělám svůj styl`,
      ],
    ];
    
    const words = [getRandomWord(theme), getRandomWord(theme), getRandomWord(theme)];
    const template = templates[Math.floor(Math.random() * templates.length)];
    return template(words[0], words[1], words[2]);
  }

  /**
   * Generuje jeden řádek rapu se smyslem
   */
  private generateLine(theme: string): string {
    const attitudes = [
      "Slyšíš?",
      "Já vím",
      "Věř mi",
      "Jasně",
      "No co",
    ];
    
    const actions = [
      "mám",
      "znám",
      "chci",
      "vidím",
      "cítím",
      "dělám",
      "jezdím",
    ];
    
    const adjectives = [
      "silný",
      "svobodný",
      "divoký",
      "hrdý",
      "originální",
      "autentický",
      "pravý",
    ];
    
    const word1 = getRandomWord(theme);
    const word2 = getRandomWord(theme);
    
    const templates = [
      `${attitudes[Math.floor(Math.random() * attitudes.length)]}, ${actions[Math.floor(Math.random() * actions.length)]} ${word1}`,
      `Tady ${word1}, tam ${word2}, já jsem ${adjectives[Math.floor(Math.random() * adjectives.length)]}`,
      `${word1} je můj, ${word2} znám, to je fakt`,
      `V ${word1} vidím, v ${word2} žiju, víc potřebuju`,
      `${word1} nebo ne, ${word2} je cíl, já to chci`,
    ];
    
    return templates[Math.floor(Math.random() * templates.length)];
  }
  
  /**
   * Generuje hook s opakováním jako v hudebních klipech
   */
  private generateHook(theme: string): string[] {
    const word = getRandomWord(theme);
    const hookStarters = [
      `Yo, ${word}, to je to`,
      `Yeah, vidíš ${word}?`,
      `Hej, já mám ${word}`,
      `Poslouchej, ${word}`,
      `Tady ${word}, tady`,
    ];
    
    const hook = hookStarters[Math.floor(Math.random() * hookStarters.length)];
    // Opakuj hook 3x pro refrén efekt
    return [hook, hook, hook];
  }
  
  /**
   * Generuje outro
   */
  private generateOutro(): string {
    const outros = [
      "To je vše",
      "Je to hotovo",
      "Díky za poslech",
      "Slyšeli jste?",
      "To je můj text",
      "Na svidanou",
    ];
    
    return outros[Math.floor(Math.random() * outros.length)];
  }
  
  /**
   * Formátuje verše do textu
   */
  private formatVerse(verses: string[]): string {
    return verses.map(v => `  ${v}`).join("\n");
  }
  
  /**
   * Formátuje hook
   */
  private formatHook(hook: string[]): string {
    return hook.map(h => `[Hook] ${h}`).join("\n");
  }
  
  /**
   * Formátuje outro
   */
  private formatOutro(outro: string): string {
    return `[Outro] ${outro}...`;
  }
  
  /**
   * Analyzuje rýmové schéma
   */
  private analyzeRhymeScheme(verses: string[]): string {
    if (verses.length === 0) return "N/A";
    
    const lastWords = verses.map(line => {
      const words = line.trim().split(" ");
      return words[words.length - 1].toLowerCase();
    });
    
    const scheme: string[] = [];
    const charMap: Record<string, string> = {};
    let charCode = 97; // 'a'
    
    for (const word of lastWords) {
      if (!charMap[word]) {
        charMap[word] = String.fromCharCode(charCode++);
      }
      scheme.push(charMap[word]);
    }
    
    return scheme.join("");
  }
  
  /**
   * Generuje rap s více detaily
   */
  public generateDetailed(options: RapGeneratorOptions = {}): GeneratedRap & { bpm: number; duration: string } {
    const rap = this.generate(options);
    const tempo = options.tempo || 95;
    const duration = this.calculateDuration(rap.text, tempo);
    
    return {
      ...rap,
      bpm: tempo,
      duration
    };
  }
  
  /**
   * Spočítá přibližnou dobu trvání
   */
  private calculateDuration(text: string, bpm: number): string {
    const words = text.split(/\s+/).length;
    const wordsPerMinute = bpm * 0.5; // Přibližně půl slova za ráz
    const minutes = Math.ceil(words / wordsPerMinute);
    
    return `${minutes}:00`;
  }
}

// Export instance pro jednoduché použití
export const rapGenerator = new RapGenerator();
