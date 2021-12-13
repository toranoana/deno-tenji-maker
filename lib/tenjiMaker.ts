import { Tenji,
  vowel,
  basicConsonant,
  TenjiYA,
  TenjiYU,
  TenjiYO,
  TenjiWA,
  TenjiWO,
  TenjiN } from "../interface/tenjiInterface.ts";

export default class TenjiMaker {

  toTenji = (text: string): string => {
    if (!text || text.length === 0) {
      return '';
    }

    const tenjiBitArray: number[] = [];
    text.split(' ').forEach(char => {
      const tenji = this.romajiToTenji(char);
      if (tenji.character.length !== 0) {
        if (tenji.prefixBit !== 0) {
          tenjiBitArray.push(tenji.prefixBit)
        }
        tenjiBitArray.push(tenji.bit)
      }
    });

    return this.bitToTenji(tenjiBitArray);
  }

  private bitToTenji = (tenjiBits: number[]): string => {
    const tenjiBitArray: Array<string[]> = [];
    tenjiBits.forEach(tenjiBit => {
      // 先頭のゼロが消えるのでゼロ埋めが必要
      const tenjiBitString = tenjiBit.toString(2).padStart(6, '0').split('');
      tenjiBitArray.push(tenjiBitString);
    });

    let top = '';
    let mid = '';
    let bot = '';
    tenjiBitArray.forEach(tenjiBit => {
      top += this.bitToTenjiDot(tenjiBit[0]);
      top += this.bitToTenjiDot(tenjiBit[3]);
      top += ' '
      
      mid += this.bitToTenjiDot(tenjiBit[1]);
      mid += this.bitToTenjiDot(tenjiBit[4]);
      mid += ' '

      bot += this.bitToTenjiDot(tenjiBit[2]);
      bot += this.bitToTenjiDot(tenjiBit[5]);
      bot += ' '
    });

    return `${top.trimEnd()}\n${mid.trimEnd()}\n${bot.trimEnd()}`;
  }

  private bitToTenjiDot = (tenjiBit: string) => {
    if (tenjiBit === '1') {
      return 'o';
    }
    return '-';
  }

  private romajiToTenji = (text: string): Tenji => {
    if (!text || text.length === 0) {
      return { character: '', prefixBit: 0, bit: 0 };
    }

    // 特定パターンに合致するなら
    switch (text.toUpperCase()) {
      case 'YA':
        return new TenjiYA;
      case 'YU':
        return new TenjiYU;
      case 'YO':
        return new TenjiYO;
      case 'WA':
        return new TenjiWA;
      case 'WO':
        return new TenjiWO;
      case 'N':
        return new TenjiN;
      default:
        break;
    }

    const textArray = text.split('');

    let textVowel: Tenji | undefined;
    let textConsonant: Tenji | undefined;
    if (textArray.length === 1) {
      const firstChar = textArray[0].toUpperCase();
      textVowel = vowel.filter((char: Tenji) => char.character === firstChar).pop()

    } else if (textArray.length === 2) {
      const firstChar = textArray[0].toUpperCase();
      const secondChar = textArray[1].toUpperCase();

      textConsonant = basicConsonant.filter((char: Tenji) => char.character === firstChar).pop()

      textVowel = vowel.filter((char: Tenji) => char.character === secondChar).pop()
    }

    return {
      character: text,
      prefixBit: textConsonant?.prefixBit ? textConsonant?.prefixBit : 0,
      bit: (textConsonant?.bit ? textConsonant?.bit : 0) | (textVowel?.bit ? textVowel?.bit : 0)
    }
  }
}
