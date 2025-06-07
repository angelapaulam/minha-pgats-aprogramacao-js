/**
crie uma função em java script que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings
 */

function filtrarApenasNumeros(lista) {
  return lista.filter((item) => typeof item === "number");
}

const listaOriginal = [5, "a", 4, "n", 3, "gela", 2, 1];
const listaSomenteNumeros = filtrarApenasNumeros(listaOriginal);

console.log(listaSomenteNumeros);
