//           Chave.  Valor.
var rafa = { nome: 'Rafa', vitorias: 2, empates: 1, derrotas: 1, pontos: 0 }
var thiago = {
  nome: 'thiago',
  vitorias: 4,
  empates: 8,
  derrotas: 06,
  pontos: 3
}
// O que está dentro de chaves são objetvos
// console.log(rafa)
// console.log(thiago)

console.log(thiago)
var resultadoDosPontos
calculaPontos(thiago)

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates
  return pontos
}
