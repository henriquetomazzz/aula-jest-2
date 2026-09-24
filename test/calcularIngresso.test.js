const calcularIngresso = require('../calcularIngresso');

test('Pessoa de 8 anos paga R$ 10', () => {
  expect(calcularIngresso(8)).toBe(10);
});

test('Pessoa de 20 anos paga R$ 20', () => {
  expect(calcularIngresso(20)).toBe(20);
});

test('Pessoa de 12 anos paga R$ 20', () => {
  expect(calcularIngresso(12)).toBe(20);
});
