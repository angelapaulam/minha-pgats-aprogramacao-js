/**
Gerador de tags de identificação

Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo. 
O dono irá informar nome, idade, peso, raça e se é adotado ou não.

A tag deve ter:
  O nome em letras maiúsculas
  A raça com a primeira letra maiúscula
  Peso

*/

const nome = "Maylon", raca = "Pincher"
let idade = 16, peso = 7, adotado = "Sim"

let nameUpperCase = nome.toUpperCase()
let racaFirstLetter  = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()

const animal = [{nome: nameUpperCase, peso, raca: racaFirstLetter}]

console.log(animal)
