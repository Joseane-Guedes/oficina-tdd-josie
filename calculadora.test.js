const calculadora = require("./calculadora"); // Certifique-se de que o caminho está correto

describe("Calculadora", () => {
  it("Deverá retornar a soma de dois números", () => {
    expect(calculadora.soma(2, 3)).toBe(5); // Teste para soma
  });

  it("Deverá retornar a subtração de dois números", () => {
    expect(calculadora.subtracao(2, 1)).toBe(1); // Teste para subtração
  });

  it("Deverá retornar a multiplicação entre dois números", () => {
    expect(calculadora.multiplicacao(2, 3)).toBe(6); // Teste para multiplicação
  });

  it("Deverá retornar a divisão entre dois números", () => {
    expect(calculadora.divisao(6, 2)).toBe(3); // Teste para divisão
    expect(() => calculadora.divisao(6, 0)).toThrow(
      "Não é possível dividir por zero"
    ); // Teste para divisão por zero
  });
});
