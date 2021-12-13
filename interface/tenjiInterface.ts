export interface Tenji {
  character: string;
  prefixBit: number;
  bit: number;
}

// 母音の定義
class VowelA implements Tenji {
  character = 'A';
  prefixBit = 0b000000;
  bit = 0b100000;
}

class VowelI implements Tenji {
  character = 'I';
  prefixBit = 0b000000;
  bit = 0b110000;
}

class VowelU implements Tenji {
  character = 'U';
  prefixBit = 0b000000;
  bit = 0b100100;
}

class VowelE implements Tenji {
  character = 'E';
  prefixBit = 0b000000;
  bit = 0b110100;
}

class VowelO implements Tenji {
  character = 'O';
  prefixBit = 0b000000;
  bit = 0b010100;
}

// 母音配列
export const vowel: Array<Tenji> = [new VowelA, new VowelI, new VowelU, new VowelE, new VowelO];

// 子音の定義
class ConsonantK implements Tenji {
  character = 'K';
  prefixBit = 0b000000;
  bit = 0b000001;
}

class ConsonantS implements Tenji {
  character = 'S';
  prefixBit = 0b000000;
  bit = 0b000011;
}

class ConsonantT implements Tenji {
  character = 'T';
  prefixBit = 0b000000;
  bit = 0b001010;
}

class ConsonantN implements Tenji {
  character = 'N';
  prefixBit = 0b000000;
  bit = 0b001000;
}

class ConsonantH implements Tenji {
  character = 'H';
  prefixBit = 0b000000;
  bit = 0b001001;
}

class ConsonantM implements Tenji {
  character = 'M';
  prefixBit = 0b000000;
  bit = 0b001011;
}

class ConsonantR implements Tenji {
  character = 'R';
  prefixBit = 0b000000;
  bit = 0b000010;
}

// 濁音
class ConsonantG implements Tenji {
  character = 'G';
  prefixBit = 0b000010;
  bit = 0b000001;
}

class ConsonantZ implements Tenji {
  character = 'Z';
  prefixBit = 0b000010;
  bit = 0b000011;
}

class ConsonantD implements Tenji {
  character = 'D';
  prefixBit = 0b000010;
  bit = 0b001010;
}

class ConsonantB implements Tenji {
  character = 'B';
  prefixBit = 0b000010;
  bit = 0b001001;
}

// 半濁音
class ConsonantP implements Tenji {
  character = 'P';
  prefixBit = 0b000001;
  bit = 0b001001;
}


// 子音配列
export const basicConsonant: Array<Tenji> = [new ConsonantK, new ConsonantS, new ConsonantT, new ConsonantN, new ConsonantH, new ConsonantM, new ConsonantR
  ,new ConsonantG, new ConsonantZ, new ConsonantD, new ConsonantB, new ConsonantP];

// 子音と母音の組み合わせでは表現できない点字
export class TenjiYA implements Tenji {
  character = 'YA';
  prefixBit = 0b000000;
  bit = 0b001100;
}

export class TenjiYU implements Tenji {
  character = 'YU';
  prefixBit = 0b000000;
  bit = 0b001101;
}

export class TenjiYO implements Tenji {
  character = 'YO';
  prefixBit = 0b000000;
  bit = 0b001110;
}

export class TenjiWA implements Tenji {
  character = 'WA';
  prefixBit = 0b000000;
  bit = 0b001000;
}

export class TenjiWO implements Tenji {
  character = 'WO';
  prefixBit = 0b000000;
  bit = 0b001010;
}

export class TenjiN implements Tenji {
  character = 'N';
  prefixBit = 0b000000;
  bit = 0b001011;
}
