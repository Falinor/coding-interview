import test from 'ava';

import isUnique from './index';

test('"Rest" should have all unique characters', (t) => {
  t.true(isUnique('Rest'));
});

test('"Soap" should have all unique characters', (t) => {
  t.true(isUnique('Soap'));
});

test('"Toto" should have duplicate characters', (t) => {
  t.false(isUnique('Toto'));
});

test('"Tata" should have duplicate characters', (t) => {
  t.false(isUnique('Tata'));
});
