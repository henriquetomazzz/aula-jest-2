function temperatura(celsius) {
  if (celsius <= 0 || celsius > 50) {
    return `${celsius}° é um valor inválido para temperatura.`;
  } else if (celsius > 0 && celsius < 18) {
    return `${celsius}° é uma temperatura considerada baixa.`;
  } else if (celsius >= 18 && celsius < 30) {
    return `${celsius}° é uma temperatura considerada adequada.`;
  } else {
    return `${celsius}° é uma temperatura considerada alta.`;
  }
}

module.exports = temperatura;
