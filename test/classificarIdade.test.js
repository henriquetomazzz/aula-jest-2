const classificarIdade = require('../classificarIdade');

test('Classifica idade -1 como inválida', () => {
  expect(classificarIdade(-1)).toBe('inválida');
});

test('Classifica idade 121 como inválida', () => {
  expect(classificarIdade(121)).toBe('inválida');
});

test('Classifica idade 0 como criança', () => {
  expect(classificarIdade(0)).toBe('criança');
});

test('Classifica idade 12 como criança', () => {
  expect(classificarIdade(12)).toBe('criança');
});

test('Classifica idade 18 como adolescente', () => {
  expect(classificarIdade(18)).toBe('adolescente');
});

test('Classifica idade 30 como adulto', () => {
  expect(classificarIdade(30)).toBe('adulto');
});

test('Classifica idade 13 como adolescente', () => {
    expect(classificarIdade(13)).toBe('adolescente');
});

test('Classifica idade 19 como adulto', () => {
    expect(classificarIdade(19)).toBe('adulto');
});