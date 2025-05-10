class Calculadora {
  soma(a, b) {
    return a + b;
  }

  subtracao(a, b) {
    return a - b;
  }

  multiplicacao(a, b) {
    return a * b;
  }

  divisao(a, b) {
    if (b === 0) throw new Error("Não é possível dividir por zero");
    return a / b;
  }
}

module.exports = new Calculadora(); // Exporta a instância da classe
