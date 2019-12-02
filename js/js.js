window.onload = function(){
  Swal.fire({
    title: 'Bem vindo, imperador.',
    text: "Para jogar esse jogo vou lhe fazer propostas e você terá que responde-lás da maneira que você achar melhor. Lembrando que, você deve manter um equilibrio no seu imperio, deixando recursos, mão de obra, coroa e economia estaveis.",
    showCancelButton: false,
    confirmButtonColor: '#987b48',
    cancelButtonColor: '#987b48',
    confirmButtonText: 'Continuar'
  }).then((result) => {
    if (result.value) {

    }
  })
  }

function esquerda(){
    var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      carta.className = "form animated slideOutLeft"
      divButonD.className = "respostasD animated fadeOut faster"
      divButonE.className = "respostasE animated fadeOut faster"
      setTimeout(function(){
        
        carta.className = "form animated fadeInDown"
        

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

var ano = 1500;
var anosSobrevividos=0
var divPontos = document.getElementById("anosSobrevividos")
var economia = 50, recursos = 50, coroa = 50, maoDeObra = 50
var divFala = document.getElementById("fala")
var divNome = document.getElementById("personagemNome")
var divButonD = document.getElementById("respostaD")
var divButonE = document.getElementById("respostaE")
var divBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var auxDivBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var divBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var auxDivBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]

function NovaCarta() {
  divPontos.innerHTML = ("anos sobrevividos: " + anosSobrevividos.toFixed(0) +"<br>ano atual: " +ano.toFixed(0));
  var maxEventos = 3
  var evento = Math.floor(Math.random() * maxEventos + 1)
  var img = document.getElementById("personagem")
  //if(ano == ano do evento especifico || ano == ano do evento especifico)
  //if(ano == ano evento especifico)
//}else
  if(evento==1){
      img.src = "../img/rei.png"
      divNome.innerHTML = "cleidomiro"
      divFala.innerHTML = "não chegamos a muito tempo e os nativos parecem amigaveis, não acha que seria uma boa pedirmos favores em troca de algo?"
      divButonD.innerHTML = "ofereça o catolisismo \n(menos mão de obra)"
      divButonE.innerHTML = "ofereça espelhos  (mais mão de obra)"
      divBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,true/*mao de obra*/ ]
      divBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,true/*mao de obra*/ ]
  }
  if(evento==2){
    //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
    divNome.innerHTML = "juliana"
    divFala.innerHTML = "esquerda aumenta coroa e diminui recursos e direita aumenta recursos e diminui coroa"
    divButonD.innerHTML = "colocar opção direita"
      divButonE.innerHTML = "colocar opção esquerda"
      divBolinhaD = [false/*economia*/,false/*recursos*/,true/*coroa*/,false/*mao de obra*/ ]
      divBolinhaE = [false/*economia*/,true/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
}
  if(evento==3){
  //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
  divNome.innerHTML = "sebastian"
  divFala.innerHTML = " esquerda aumenta economia diminui recursos e direita aumenta recursos e diminui mao de obra"
  divButonD.innerHTML = "colocar opção direita"
  divButonE.innerHTML = "colocar opção esquerda"
  divBolinhaE = [true/*economia*/,true/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
  divBolinhaD = [false/*economia*/,true/*recursos*/,false/*coroa*/,true/*mao de obra*/ ]
}
//}
 
auxDivBolinhaE = divBolinhaE;
auxDivBolinhaD = divBolinhaD;

  anosSobrevividos +=6.6
  ano +=6.6

  return evento;
  
  console.log("\neconomia: "+economia+"\nrecursos: "+recursos+"\ncoroa: "+coroa+"\nmao de obra: "+maoDeObra)
  
}

function resposta(respostaAux,evento){
if (evento==1){
  if(respostaAux=="esquerda")
    maoDeObra += 20
  if(respostaAux=="direita")
    maoDeObra -= 20
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
function alertMenu(){
  Swal.fire({
    title: 'MENU',
    showCancelButton: true,
    confirmButtonColor: '#987b48',
    cancelButtonColor: '#987b48',
    confirmButtonText: 'Sair'
  }).then((result) => {
    if (result.value) {
      setTimeout(function(){
        window.location.href="../index.html"
      },350)
    }
  })
}

function apareceBolinhaE() {
  if(auxDivBolinhaE[0] == true){
      document.getElementById("economia").style.display ="block"
  }
  if(auxDivBolinhaE[1] == true){
    document.getElementById("recursos").style.display ="block"
  }
  if(auxDivBolinhaE[2] == true){
    document.getElementById("coroa").style.display ="block"
  }
  if(auxDivBolinhaE[3] == true){
    document.getElementById("maoDeObra").style.display ="block"
  }
  
}
function apareceBolinhaD() {
  if(auxDivBolinhaD[0] == true){
    document.getElementById("economia").style.display ="block"
}
if(auxDivBolinhaD[1] == true){
  document.getElementById("recursos").style.display ="block"
}
if(auxDivBolinhaD[2] == true){
  document.getElementById("coroa").style.display ="block"
}
if(auxDivBolinhaD[3] == true){
  document.getElementById("maoDeObra").style.display ="block"
}
  
}

function desapareceBolinha() {
  
      document.getElementById("coroa").style.display ="none"
 
 
    document.getElementById("maoDeObra").style.display ="none"
  
 
    document.getElementById("recursos").style.display ="none"
  
 
    document.getElementById("economia").style.display ="none"
  
    auxdivBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
    auxdivBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
    auxdivBolinhaD = divBolinhaD
    auxdivBolinhaE = divBolinhaE
}