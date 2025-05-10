const Queue = require("./queue");

describe("Queue", () => {
  it("Deve iniciar com uma fila vazia", () => {
    const fila = new Queue();
    expect(fila.items).toEqual([]);
  });

  it("Deve retornar o tamanho correto da fila", () => {
    const fila = new Queue();
    fila.add("a");
    fila.add("b");
    expect(fila.size()).toBe(2);
  });

  it("Deve adicionar um item ao final da fila", () => {
    const fila = new Queue();
    fila.add("x");
    expect(fila.items).toEqual(["x"]);
  });

  it("Deve retornar o primeiro item sem removê-lo", () => {
    const fila = new Queue();
    fila.add("primeiro");
    fila.add("segundo");
    expect(fila.peek()).toBe("primeiro");
    expect(fila.items.length).toBe(2); // garante que não removeu
  });

  it("Deve remover e retornar o primeiro item da fila", () => {
    const fila = new Queue();
    fila.add("um");
    fila.add("dois");
    const removido = fila.dequeue();
    expect(removido).toBe("um");
    expect(fila.items).toEqual(["dois"]);
  });
});
