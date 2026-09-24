function classificarIdade(idade) {
  if (idade < 0 || idade > 120) return "inválida";
  if (idade < 12) return "criança";
  if (idade < 18) return "adolescente";
  return "adulto";
}

module.exports = classificarIdade;
