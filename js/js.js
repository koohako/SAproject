function esquerda(){
    var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      carta.className = "form animated slideOutLeft"
      divButonD.className = "respostasD animated fadeOut faster"
      divButonE.className = "respostasE animated fadeOut faster"
      setTimeout(function(){
        
        carta.className = "form animated fadeInDown"
        var img = document.getElementById("personagem")
        
        //chama a função que sorteia o evento e retorna o valor um para variavel opcao assim fazendo a ação da escolha
  
        resposta("esquerda", NovaCarta())
        
        
        setTimeout(function(){
          carta.classList += fimanimacao
          divButonD.className = "respostasD animated fadeIn faster"
          divButonE.className = "respostasE animated fadeIn faster"
        }, 1000)
      }, 1000)
      
   }
   function direita(){
      var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      divButonE.className = "respostasE animated fadeOut faster"
      divButonD.className = "respostasD animated fadeOut faster"
      carta.className = "form animated slideOutRight"
      setTimeout(function(){
        carta.className = "form animated fadeInDown"       
        
        //chama a função que sorteia o evento e retorna o valor um para variavel opcao assim fazendo a ação da escolha
        resposta("direita", NovaCarta())
        setTimeout(function(){
          carta.classList += fimanimacao
          divButonE.className = "respostasE animated fadeIn faster"
          divButonD.className = "respostasD animated fadeIn faster"
        }, 1000)
      }, 1000)
      
   }
document.onkeyup = function (e){
  if (e.which == 37) {
    var carta = document.getElementById("baixo")
    var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    carta.className = "form animated slideOutLeft"
    divButonD.className = "respostasD animated fadeOut faster"
    divButonE.className = "respostasE animated fadeOut faster"
    setTimeout(function () {
      carta.className = "form animated fadeInDown"
      
      var img = document.getElementById("personagem")
      //img.src = linkImg
      resposta("esquerda", NovaCarta())
      setTimeout(function () {
        divButonE.className = "respostasE animated fadeIn faster"
          divButonD.className = "respostasD animated fadeIn faster"
        carta.classList += fimanimacao
      }, 1000)
    }, 1000)

  }else if (e.which == 39) {
    var carta = document.getElementById("baixo")
    var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
    carta.className = "form animated slideOutRight"
    divButonE.className = "respostasE animated fadeOut faster"
    divButonD.className = "respostasD animated fadeOut faster"
    setTimeout(function () {
      carta.className = "form animated fadeInDown"
      var img = document.getElementById("personagem")
      //img.src = linkImg
      resposta("direita", NovaCarta())
      setTimeout(function () {
        divButonE.className = "respostasE animated fadeIn faster"
        divButonD.className = "respostasD animated fadeIn faster"
        carta.classList += fimanimacao
      }, 1000)
    }, 1000)
  }
};


var economia = 50, recursos = 50, coroa = 50, maoDeObra = 50
var divFala = document.getElementById("fala")
var divNome = document.getElementById("personagemNome")
var divButonD = document.getElementById("respostaD")
var divButonE = document.getElementById("respostaE")

function NovaCarta() {
  var maxEventos = 3
  var evento = Math.floor(Math.random() * maxEventos + 1)
  
  if(evento==1){
      //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
      divNome.innerHTML = "cleidomiro"
      divFala.innerHTML = "ai chef ja vou avisando que vai dar merda isso aqui em, mas vc pode escolher a merda que vai dar, quer merda na economia ou nos recursos?, esqueda para economia e direita para recursos"
      divButonD.innerHTML = "colocar opção direita"
      divButonE.innerHTML = "colocar opção esquerda"
      
      
  }
  if(evento==2){
    //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
    divNome.innerHTML = "juliana"
    divFala.innerHTML = "esquerda aumenta coroa e diminui recursos e direita aumenta recursos e diminui coroa"
    divButonD.innerHTML = "colocar opção direita"
      divButonE.innerHTML = "colocar opção esquerda"
      
}
  if(evento==3){
  //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
  divNome.innerHTML = "sebastian"
  divFala.innerHTML = " esquerda aumenta economia diminui recursos e direita aumenta recursos e diminui mao de obra"
  divButonD.innerHTML = "colocar opção direita"
      divButonE.innerHTML = "colocar opção esquerda"
      
}
  return evento;
  console.log("\neconomia: "+economia+"\nrecursos: "+recursos+"\ncoroa: "+coroa+"\nmao de obra: "+maoDeObra)
}

function resposta(respostaAux,evento){
if (evento==1){
  if(respostaAux=="esquerda")
    economia -= 20
  if(respostaAux=="direita")
    recursos -= 20
}
if (evento==2){
  if(respostaAux=="esquerda"){
    coroa += 20
    recursos -= 20
  }
  if(respostaAux=="direita"){
    coroa -= 20
    recursos += 20
  }
}
if (evento==3){
  if(respostaAux=="esquerda"){
    economia += 20
    recursos -= 20
  }
  if(respostaAux=="direita"){
    maoDeObra -= 20
    recursos += 20
  }
}

}
var checkbox = document.getElementById("pause")
document.onkeyup(function(e){
  if(e.which==	27){
    checkbox.checked = true
  }
  if(e.which==	27 ){
    checkbox.checked = false
  }
})