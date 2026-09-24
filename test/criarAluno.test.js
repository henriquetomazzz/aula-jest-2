const criarAluno = require("../criarAluno");

test("Cria aluno com nome e matrícula", () => {
  const esperado = { nome: 'Ana', matricula: 202601 };
  const recebido = criarAluno('Ana', 202601);

  expect(recebido).toEqual(esperado);
});

