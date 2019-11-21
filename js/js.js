function esquerda(){
    var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      carta.className = "form animated slideOutLeft"
      resposta("esquerda",NovaCarta())
      setTimeout(function(){
        carta.className = "form animated fadeInDown"
        var img = document.getElementById("personagem")
        //img.src = linkImg
        setTimeout(function(){
          carta.classList += fimanimacao
        }, 1000)
      }, 1000)
   }
   function direita(){
      var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      carta.className = "form animated slideOutRight"
      resposta("direita",NovaCarta())
      setTimeout(function(){
        carta.className = "form animated fadeInDown"
        var img = document.getElementById("personagem")
        //img.src = linkImg
        setTimeout(function(){
          carta.classList += fimanimacao
        }, 1000)
      }, 1000)
   }


   
var economia=50, recursos=50, coroa=50, maoDeObra=50
var divFala = document.getElementById("fala")
var divNome = document.getElementById("personagemNome")

function NovaCarta() {
    var maxEventos = 3
    var evento = Math.floor(Math.random() * maxEventos + 1)
    if(evento==1){
        //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
        divNome.innerHTML = "cleidomiro"
        divFala.innerHTML = "ai chef ja vou avisando que vai dar merda isso aqui em, mas vc pode escolher a merda que vai dar, quer merda na economia ou nos recursos?, esqueda para economia e direita para recursos"
        
    }
    if(evento==2){
      //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
      divNome.innerHTML = "juliana"
      divFala.innerHTML = "ai chef ja vou avisando que vai dar merda isso aqui em, mas vc pode escolher a merda que vai dar, quer merda na economia ou nos recursos?, esqueda para economia e direita para recursos"
      
  }
    if(evento==3){
    //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
    divNome.innerHTML = "sebastian"
    divFala.innerHTML = " esquerda aumenta economia diminui recursos"
    
}
    return evento;

}

function resposta(respostaAux,evento){
  if (evento==1){
    if(respostaAux=="esqueda")
      economia -= 20
    if(respostaAux=="direita")
      recursos -= 20
  }
  if (evento==2){
    if(respostaAux=="esquerda")
      economia -= 20
    if(respostaAux=="direita")
      recursos -= 20
  }
  if (evento==3){
    if(respostaAux=="esquerda")
      economia -= 20
    if(respostaAux=="direita")
      recursos -= 20
  }
  
}




