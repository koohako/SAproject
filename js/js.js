function esquerda(resposta){
    var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
      carta.className = "form animated slideOutLeft"
      setTimeout(function(){
        carta.className = "form animated fadeInDown"
        var img = document.getElementById("personagem")
        img.src = linkImg
        //chama a função que sorteia o evento e retorna o valor um para variavel opcao assim fazendo a ação da escolha
        resposta = 1
        cartas()
        
        return resposta
        setTimeout(function(){
          carta.classList += fimanimacao
          
        }, 1000)
      }, 1000)
      
   }
   function direita(){
      var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
      carta.className = "form animated slideOutRight"
      setTimeout(function(){
        carta.className = "form animated fadeInDown"
        var img = document.getElementById("personagem")
        img.src = linkImg
        //chama a função que sorteia o evento e retorna o valor um para variavel opcao assim fazendo a ação da escolha
        cartas()
        setTimeout(function(){
          carta.classList += fimanimacao
          
        }, 1000)
      }, 1000)
      
   }
document.onkeyup = function (e){
  if (e.which == 37) {
    var carta = document.getElementById("baixo")
    var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    carta.className = "form animated slideOutLeft"

    setTimeout(function () {
      carta.className = "form animated fadeInDown"
      var img = document.getElementById("personagem")
      //img.src = linkImg
      resposta("esquerda", NovaCarta())
      setTimeout(function () {
        carta.classList += fimanimacao
      }, 1000)
    }, 1000)

  }else if (e.which == 39) {
    var carta = document.getElementById("baixo")
    var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    carta.className = "form animated slideOutRight"

    setTimeout(function () {
      carta.className = "form animated fadeInDown"
      var img = document.getElementById("personagem")
      //img.src = linkImg
      resposta("direita", NovaCarta())
      setTimeout(function () {
        carta.classList += fimanimacao
      }, 1000)
    }, 1000)
  }
};


var economia = 50, recursos = 50, coroa = 50, maoDeObra = 50
var divFala = document.getElementById("fala")
var divNome = document.getElementById("personagemNome")
var divButonD = document.getElementById("direita")
var divButonE = document.getElementById("esquerda")

function cartas() {
    var maxEventos = 4
    var evento = Math.floor(Math.random() * maxEventos + 1)
    var opcao = 0
    if(evento==1){
        divNome.innerHTML = "cleidomiro"
        divFala.innerHTML = "teste 1"
        divButonD.innerHTML = "opção1"
        divButonE.innerHTML = "opção2"
        
        resposta(evento)

    }
    if(evento==2){
        divNome.innerHTML = "miro do cleido"
        divFala.innerHTML = "teste 2"
        divButonD.innerHTML = "opção1"
        divButonE.innerHTML = "opção2"
    }
    if(evento==3){
        divNome.innerHTML = "do miro cleido"
        divFala.innerHTML = "teste 3"
        divButonD.innerHTML = "opção1"
        divButonE.innerHTML = "opção2"
    }
    if(evento==4){
        divNome.innerHTML = "cleido miro do"
        divFala.innerHTML = "teste 4"
        divButonD.innerHTML = "opção1"
        divButonE.innerHTML = "opção2"
    }

}


function resposta(respostaAux, evento) {
  if (evento == 1) {
    if (respostaAux == "esqueda")
      economia -= 20
    if (respostaAux == "direita")
      recursos -= 20
  }
  if (evento == 2) {
    if (respostaAux == "esquerda") {
      coroa += 20
      recursos -= 20
    }
    if (respostaAux == "direita") {
      coroa -= 20
      recursos += 20
    }
  }
  if (evento == 3) {
    if (respostaAux == "esquerda") {
      economia += 20
      recursos -= 20
    }
    if (respostaAux == "direita") {
      maoDeObra -= 20
      recursos += 20
    }
  }
  if (evento == 4) {
    if (respostaAux == "esquerda") {
      economia += 20
      recursos -= 20
    }
    if (respostaAux == "direita") {
      maoDeObra -= 20
      recursos += 20
    }
  }

}