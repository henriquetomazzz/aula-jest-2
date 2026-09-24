const temperatura = require("../temperatura");

test("Classifica -10°C como temperatura inválida", () => {
  expect(temperatura(-10)).toBe("-10° é um valor inválido para temperatura.");
});

test("Classifica 60°C como temperatura inválida", () => {
  expect(temperatura(60)).toBe("60° é um valor inválido para temperatura.");
});

test("Classifica 10°C como temperatura baixa", () => {
  expect(Number.parseFloat(temperatura(10))).toBeCloseTo(10, 2);
  expect(temperatura(10)).toBe("10° é uma temperatura considerada baixa.");
});

test("Classifica 20°C como temperatura adequada", () => {
  expect(Number.parseFloat(temperatura(20))).toBeCloseTo(20, 2);
  expect(temperatura(20)).toBe("20° é uma temperatura considerada adequada.");
});

test("Classifica 35°C como temperatura alta", () => {
  expect(Number.parseFloat(temperatura(35))).toBeCloseTo(35, 2);
  expect(temperatura(35)).toBe("35° é uma temperatura considerada alta.");
});

test("Classifica 0°C como inválida no limite inferior", () => {
  expect(temperatura(0)).toBe("0° é um valor inválido para temperatura.");
});

test("Classifica 18°C como o início da faixa adequada", () => {
  expect(temperatura(18)).toBe("18° é uma temperatura considerada adequada.");
});

test("Classifica 29°C como adequada, um grau abaixo de 30°C", () => {
  expect(temperatura(29)).toBe("29° é uma temperatura considerada adequada.");
});

test("Classifica 30°C como o início da faixa alta", () => {
  expect(temperatura(30)).toBe("30° é uma temperatura considerada alta.");
});

test("Classifica 50°C como alta no limite superior válido", () => {
  expect(temperatura(50)).toBe("50° é uma temperatura considerada alta.");
});

test("Classifica 51°C como inválida, um grau acima do limite superior", () => {
  expect(temperatura(51)).toBe("51° é um valor inválido para temperatura.");
});
