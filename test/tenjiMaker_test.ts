import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import TenjiMaker from '../lib/tenjiMaker.ts'

const tenjiMaker = new TenjiMaker();

Deno.test('test_a_hi_ru', () => {
  const tenji = tenjiMaker.toTenji('A HI RU');
  assertEquals(tenji,
    `o- o- oo
-- o- -o
-- oo --`.trimEnd());
});

Deno.test('test_ki_ri_n', () => {
  const tenji = tenjiMaker.toTenji('KI RI N');
  assertEquals(tenji,
    `o- o- --
o- oo -o
-o -- oo`.trimEnd());
});

Deno.test('test_si_ma_u_ma', () => {
  const tenji = tenjiMaker.toTenji('SI MA U MA');
  assertEquals(tenji,
    `o- o- oo o-
oo -o -- -o
-o oo -- oo`.trimEnd());
});

Deno.test('test_ni_wa_to_ri', () => {
  const tenji = tenjiMaker.toTenji('NI WA TO RI');
  assertEquals(tenji,
    `o- -- -o o-
o- -- oo oo
o- o- o- --`.trimEnd());
});

Deno.test('test_hi_yo_ko', () => {
  const tenji = tenjiMaker.toTenji('HI YO KO');
  assertEquals(tenji,
    `o- -o -o
o- -o o-
oo o- -o`.trimEnd());
});

Deno.test('test_ki_tu_ne', () => {
  const tenji = tenjiMaker.toTenji('KI TU NE');
  assertEquals(tenji,
    `o- oo oo
o- -o o-
-o o- o-`.trimEnd());
});

Deno.test('test_bit_to_string_to_ra_no_a_na_ra_bo', () => {
  const tenji = tenjiMaker.toTenji('TO RA NO A NA RA BO')
  assertEquals(tenji,
    `-o o- -o o- o- o- -- -o
oo -o o- -- -- -o -o o-
o- -- o- -- o- -- -- oo`.trimEnd());
});
