// Toda vez que fomos usar chaves dentro de uma variavel, estamos nos referindo a objetos
// um objeto é formado por tipos diferentes
// Temos uma sequência de variáveis diferentes dentro, apontando para uma mesma referência, que aqui no caso temos a rafa
// O que está dentro de chaves são objetvos

// var rafa = { nome: 'Rafa', vitorias: 2, empates: 1, derrotas: 1, pontos: 0 }
// var thiago = { nome: 'thiago', vitorias: 4, empates: 8, derrotas: 6, pontos: 3 }
//           Chave.  Valor.
var rafa = { nome: 'Rafa', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var thiago = { nome: 'Thiago', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var ronaldo = {
  nome: 'Ronaldo',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var ramon = { nome: 'Ramon', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var arthur = { nome: 'Arthur', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }

rafa.pontos = calculaPontos(rafa)
thiago.pontos = calculaPontos(thiago)
ronaldo.pontos = calculaPontos(ronaldo)
ramon.pontos = calculaPontos(ramon)
arthur.pontos = calculaPontos(arthur)
//                        retorno da função
// var resultadoDosPontos = calculaPontos(thiago)
// calculaPontos(thiago) // Está chamando a função

/* Para executar a função abaixo, */
/* calculaPontos(thiago)  Passando o objeto que vai ser o jogador dentro da função */

/* Quando escrevemos uma função,estamos declarando um bloco de código que pode ser chamado
  Não chamamos essa função, apenas declaramos ela*/
function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas
  return pontos // está retornando o valor da variavel pontos
}

console.log(rafa)
console.log(thiago)

var jogadores = [rafa, thiago, ronaldo, ramon, arthur]

console.log(jogadores)

function exibeJogadoresNaTela(jogadores) {
  var elemento = ''
  //  em quanto i for menor que jogadores eu quero que execute esse for
  for (var i = 0; i < jogadores.length; i++) {
    elemento += '<tr><td>' + jogadores[i].nome + '</td>'
    elemento += '<td>' + jogadores[i].vitorias + '</td>'
    elemento += '<td>' + jogadores[i].empates + '</td>'
    elemento += '<td>' + jogadores[i].derrotas + '</td>'
    elemento += '<td>' + jogadores[i].pontos + '</td>'
    elemento +=
      "<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento +=
      "<td><button onclick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento +=
      "<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += '</tr>'
  }
  var tabelaJogadores = document.getElementById('Tabela__Jogadores')
  tabelaJogadores.innerHTML = elemento
}
// Lista de jogadores
exibeJogadoresNaTela(jogadores)
//                        i (indice do jogador)
function adicionarVitoria(i) {
  //         por meio do i vamos decobrir qual é o jogador
  //         e vamos decobrir qual objeto que estamos falando
  var jogador = jogadores[i]
  jogador.vitorias++ // somando + 1 nas vitorias
  jogador.pontos = calculaPontos(jogador) // calculando pontos
  exibeJogadoresNaTela(jogadores) // exibindo o que tem dentro da lista
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}
