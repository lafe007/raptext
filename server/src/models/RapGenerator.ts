import {
  rhymeDict,
  rapThemes,
  adjectivesZ,
  nounsZ,
  pointers,
  verbs,
  prepositions,
  rapRefrains,
  intensifiers,
  slangWords,
  czechSwears
} from '../data/dictionary';

export interface RapLine {
  text: string;
  rhyme: string;
  syllables: number;
}

export interface RapVerse {
  lines: RapLine[];
  theme: string;
}

export interface RapSong {
  title: string;
  intro: string;
  verses: RapVerse[];
  chorus: string;
  outro: string;
}

export class RapGenerator {
  private seed: number;

  constructor(seed?: number) {
    this.seed = seed || Math.floor(Math.random() * 1000000);
  }

  private seededRandom(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  private getRandomFromArray<T>(arr: T[]): T {
    const index = Math.floor(this.seededRandom() * arr.length);
    return arr[index];
  }

  private getMultipleFromArray<T>(arr: T[], count: number): T[] {
    const result: T[] = [];
    const shuffled = [...arr].sort(() => this.seededRandom() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  generateTitle(): string {
    const themes = this.getMultipleFromArray(rapThemes, 2);
    const adjectives = this.getMultipleFromArray(adjectivesZ, 2);
    
    const titles = [
      `${adjectives[0]} ${themes[0]}`,
      `${themes[0]} vs ${themes[1]}`,
      `Cesta přes ${themes[0]}`,
      `${adjectives[0]} ${adjectives[1]}`,
      `Město ${themes[0]}`,
      `Noc bez ${themes[0]}`,
      `${adjectives[0].charAt(0).toUpperCase()}${adjectives[0].slice(1)} ${themes[0].toLowerCase()}`
    ];
    
    return this.getRandomFromArray(titles);
  }

  generateLine(rhymeKey?: string): RapLine {
    const syllables = 8 + Math.floor(this.seededRandom() * 4);
    
    // Použití rhyming dictonary
    const selectedRhyme = rhymeKey || this.getRandomFromArray(Object.keys(rhymeDict));
    const rhymeWords = rhymeDict[selectedRhyme] || [];
    const endWord = this.getRandomFromArray(rhymeWords);
    
    const adjective = this.getRandomFromArray(adjectivesZ);
    const noun = this.getRandomFromArray(nounsZ);
    const verb = this.getRandomFromArray(verbs);
    const intensifier = this.getRandomFromArray(intensifiers);
    const slang = this.getRandomFromArray(slangWords);
    
    const lineTemplates = [
      `${intensifier} ${adjective} ${noun}, ${verb} skrz ten ${endWord}`,
      `Jsem ${adjective}, ${slang} a ${endWord}`,
      `V noci ${verb} a mysli na ${endWord}`,
      `${noun} se ${verb} v rytmu, to je ${endWord}`,
      `Tvůj ${noun} není ${adjective} jak můj ${endWord}`,
      `Srdce ${verb}, energie ${endWord}`,
      `Nikdo se nerovná, to je ${endWord}`,
      `Vítr nese zvuk, zvuk je ${endWord}`,
      `${verb.charAt(0).toUpperCase()}${verb.slice(1)} v noci bez ${endWord}`,
      `Realita versus ${noun}, to je ${endWord}`
    ];
    
    const line = this.getRandomFromArray(lineTemplates);
    
    return {
      text: line,
      rhyme: selectedRhyme,
      syllables
    };
  }

  generateVerse(lineCount: number = 4): RapVerse {
    const theme = this.getRandomFromArray(rapThemes);
    const rhymeKey = this.getRandomFromArray(Object.keys(rhymeDict));
    const lines: RapLine[] = [];
    
    for (let i = 0; i < lineCount; i++) {
      lines.push(this.generateLine(rhymeKey));
    }
    
    return {
      lines,
      theme
    };
  }

  generateChorus(): string {
    const theme = this.getRandomFromArray(rapThemes);
    const adjective = this.getRandomFromArray(adjectivesZ);
    const refrain = this.getRandomFromArray(rapRefrains);
    
    const chorusTemplates = [
      `${refrain}\n${theme.charAt(0).toUpperCase()}${theme.slice(1)}, ${adjective} a silný\nVěří v sebe, cítí to, to je jedinečný`,
      `Slyšíš beat? To je ${theme}\n${adjective} slova v noci\n${refrain}`,
      `${theme.charAt(0).toUpperCase()}${theme.slice(1)}, ${theme}, to je pravda\nNaposledy vidíš tmu\n${refrain}`,
      `V ${theme} se cítím doma\n${adjective} srdce, ${adjective} duše\n${refrain}`
    ];
    
    return this.getRandomFromArray(chorusTemplates);
  }

  generateIntro(): string {
    const adjective = this.getRandomFromArray(adjectivesZ);
    const noun = this.getRandomFromArray(nounsZ);
    
    const intros = [
      `Ahoj, poslouchej mě, tady je ${adjective} ${noun}`,
      `Otevři uši, tady je pravda`,
      `Znáš ten ${noun}? Znáš ten ${adjective} cit?`,
      `Začínáme, ready nebo ne?`,
      `To je tvůj čas, tvůj ${noun}, tvůj moment`
    ];
    
    return this.getRandomFromArray(intros);
  }

  generateOutro(): string {
    const outros = [
      `To bylo všechno, díky že jsi poslouchal`,
      `Pamatuj si, co jsem řekl, to je pravda`,
      `Konec, ale zvuk zůstává`,
      `To je finále, tady je konec`,
      `Slyšíš to ještě? To byl beat...`
    ];
    
    return this.getRandomFromArray(outros);
  }

  generateSong(verseCount: number = 3): RapSong {
    const title = this.generateTitle();
    const intro = this.generateIntro();
    const chorus = this.generateChorus();
    const outro = this.generateOutro();
    
    const verses: RapVerse[] = [];
    for (let i = 0; i < verseCount; i++) {
      verses.push(this.generateVerse());
    }
    
    return {
      title,
      intro,
      verses,
      chorus,
      outro
    };
  }

  generateFormattedSong(verseCount: number = 3): string {
    const song = this.generateSong(verseCount);
    
    let formatted = `🎤 ${song.title} 🎤\n`;
    formatted += `${'='.repeat(50)}\n\n`;
    formatted += `[INTRO]\n${song.intro}\n\n`;
    
    song.verses.forEach((verse, index) => {
      formatted += `[VERSE ${index + 1}] - Téma: ${verse.theme}\n`;
      verse.lines.forEach(line => {
        formatted += `  ${line.text}\n`;
      });
      formatted += `\n`;
      
      if (index < song.verses.length - 1) {
        formatted += `[CHORUS]\n${song.chorus}\n\n`;
      }
    });
    
    formatted += `[OUTRO]\n${song.outro}\n`;
    
    return formatted;
  }
}
