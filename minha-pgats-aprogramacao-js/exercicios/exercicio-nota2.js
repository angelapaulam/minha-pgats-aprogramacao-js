/**
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata . O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.  
 */

function contarVogais(texto) {
  const vogais = "aeiou";
  let contador = 0;

  for (let letra of texto) {
    contador += vogais.includes(letra) ? 1 : 0;
  }

  return contador;
}

console.log(
  contarVogais(
    "exercicio dois valendo nota na disciplina programacao para automacao de teste",
  ),
);
// Saída: 6

console.log(contarVogais("bom dia"));
// Saída: 3

console.log(contarVogais(" "));
// Saída: 0

console.log(contarVogais("javascript"));
// Saída: 3
