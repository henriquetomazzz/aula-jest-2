const criarAluno = require("../criarAluno");

test("Cria aluno com nome e matrícula", () => {
  const esperado = { nome: 'Ana', matricula: 202601 };
  const recebido = criarAluno('Ana', 202601);

  // toBe falhou porque compara se os objetos são a mesma referência.
  // recebido e esperado são objetos diferentes, mesmo com nome e matrícula iguais.
  // Usamos toEqual para comparar o conteúdo dos objetos.
  expect(recebido).toEqual(esperado);
});

