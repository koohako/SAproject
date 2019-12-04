function comeco(){
  Swal.fire({
    title: 'Bem vindo, imperador.',
    text: "Para jogar esse jogo vou lhe fazer propostas e você terá que responde-lás da maneira que você achar melhor. Lembrando que, você deve manter um equilibrio no seu imperio, deixando recursos, mão de obra, coroa e economia estaveis.",
    showCancelButton: false,
    confirmButtonColor: '#987b48',
    cancelButtonColor: '#987b48',
    confirmButtonText: 'Continuar'
  }).then((result) => {
    if (result.value) {
      tocarmusica()
    }
  })
}
var musica = new Audio()
musica.src="../src/faun.mp3"

  function tocarmusica(){
  musica.play();
  musica.volume = 0.03
  musica.loop = true 
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
  
        resposta("esquerda", NovaCarta(auxEvento))
        
        
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
        resposta("direita", NovaCarta(auxEvento))
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
      resposta("esquerda", NovaCarta(auxEvento))
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
      resposta("direita", NovaCarta(auxEvento))
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
var aniEco = document.getElementById("aniEco"), aniRec = document.getElementById("aniRec"), aniMao = document.getElementById("aniMao"), aniCor = document.getElementById("aniCor")
var divFala = document.getElementById("fala")
var divNome = document.getElementById("personagemNome")
var divButonD = document.getElementById("respostaD")
var divButonE = document.getElementById("respostaE")
var divBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var auxDivBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var divBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var auxDivBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
var morte= false
var auxEvento =0  


function NovaCarta(evento) {
  
  divPontos.innerHTML = ("anos sobrevividos: " + anosSobrevividos.toFixed(0) +"<br>ano atual: " +ano.toFixed(0));
  var img = document.getElementById("personagem")
  
  
  if(evento==0){
      img.src = "../img/rei.png"
      divNome.innerHTML = "cleidomiro"
      divFala.innerHTML = "não chegamos a muito tempo e os nativos parecem amigaveis, não acha que seria uma boa pedirmos favores em troca de algo?"
      divButonD.innerHTML = "ofereça o catolisismo"
      divButonE.innerHTML = "ofereça espelhos"
      divBolinhaE = [false/*economia*/,false/*recursos*/,false/*coroa*/,true/*mao de obra*/ ]
      divBolinhaD = [false/*economia*/,false/*recursos*/,false/*coroa*/,true/*mao de obra*/ ]
  }
  if(evento==1){
    //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
    divNome.innerHTML = "juliana"
    divFala.innerHTML = "esquerda aumenta coroa e diminui recursos e direita aumenta recursos e diminui coroa"
    divButonD.innerHTML = "colocar opção direita"
      divButonE.innerHTML = "colocar opção esquerda"
      divBolinhaD = [false/*economia*/,false/*recursos*/,true/*coroa*/,false/*mao de obra*/ ]
      divBolinhaE = [false/*economia*/,true/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
}
  if(evento==2){
  //var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
  divNome.innerHTML = "sebastian"
  divFala.innerHTML = " esquerda aumenta economia diminui recursos e direita aumenta recursos e diminui mao de obra"
  divButonD.innerHTML = "colocar opção direita"
  divButonE.innerHTML = "colocar opção esquerda"
  divBolinhaE = [true/*economia*/,true/*recursos*/,false/*coroa*/,false/*mao de obra*/ ]
  divBolinhaD = [false/*economia*/,true/*recursos*/,false/*coroa*/,true/*mao de obra*/ ]

  
}

 

auxDivBolinhaE = divBolinhaE;
auxDivBolinhaD = divBolinhaD;
  anosSobrevividos +=6.6
  ano +=6.6
  console.log("\neconomia: "+economia+"\nrecursos: "+recursos+"\ncoroa: "+coroa+"\nmao de obra: "+maoDeObra)


  return evento;

}
var nome =""
function resposta(respostaAux,evento){
  
  if(morte==true){
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Ok.',
      showCancelButton: false,
      confirmButtonColor: '#987b48',
    }).queue([
      {
        title: 'Você morreu!',
        text: 'Coloque seu nome para salvar sua pontuação'
      },
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        nome = result.value
        Swal.fire({
          title: 'Obrigado por ter jogado.',
          html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
          confirmButtonText: 'Pronto.',
          confirmButtonColor: '#987b48'
        })
        register()
        window.location.href = "../html/tabela.html"
      }
    })
  }else{
  if (evento==1){
    if(respostaAux=="esquerda"){
      maoDeObra += 5
      aniMao.style.backgroundColor = "lawngreen";
      aniMao.style.height = maoDeObra.toString()+"%"
      setTimeout(function voltacor(){
        aniMao.style.backgroundColor = "#efd292";
      }, 1500)
    }
    if(respostaAux=="direita"){
      maoDeObra -= 5
      aniMao.style.backgroundColor = "red";
      aniMao.style.height = maoDeObra.toString()+"%"
      setTimeout(function voltacor(){
        aniMao.style.backgroundColor = "#efd292";
      }, 1500)
    }   
    Swal.fire({
      title: 'Descoberta!!',
      text: 'O Brasil foi descoberto em 1500, no dia 22 de abril. Por frotas comandadas por Pedro Alvares Cabral.',
      imageUrl: '../img/descoberta.jpg',
      confirmButtonColor: '#987b48',
      imageWidth: 400,
      imageHeight: 200,})
      console.log("direita")
  }

  if (evento==2){
    if(respostaAux=="esquerda"&&morte==false){
      coroa += 10
      recursos -= 5
      aniCor.style.backgroundColor = "lawngreen";
      aniRec.style.backgroundColor = "red";
      aniCor.style.height = coroa.toString()+"%"
      aniRec.style.height = recursos.toString()+"%"
      setTimeout(function voltacor(){
        aniCor.style.backgroundColor = "#efd292";
        aniRec.style.backgroundColor = "#efd292";
      }, 1500)
      
    }
    if(respostaAux=="direita"){
      coroa -= 5
      recursos += 10
      aniCor.style.backgroundColor = "red";
      aniRec.style.backgroundColor = "lawngreen";
      aniCor.style.height = coroa.toString()+"%"
      aniRec.style.height = recursos.toString()+"%"
      setTimeout(function voltacor(){
        aniCor.style.backgroundColor = "#efd292";
        aniRec.style.backgroundColor = "#efd292";
      }, 1500)
    }
  }
  if (evento==3){
    if(respostaAux=="esquerda"){
      economia += 10
      recursos -= 15
      aniRec.style.backgroundColor = "red";
      aniEco.style.backgroundColor = "lawngreen";
      aniEco.style.height = economia.toString()+"%"
      aniRec.style.height = recursos.toString()+"%"
      setTimeout(function voltacor(){
        aniRec.style.backgroundColor = "#efd292";
        aniEco.style.backgroundColor = "#efd292";
      }, 1500)
    }
    if(respostaAux=="direita"){
      maoDeObra -= 6
      recursos += 9
      aniMao.style.backgroundColor = "red";
      aniRec.style.backgroundColor = "lawngreen";
      aniMao.style.height = maoDeObra.toString()+"%"
      aniRec.style.height = recursos.toString()+"%"
      setTimeout(function voltacor(){
        aniRec.style.backgroundColor = "#efd292";
        aniMao.style.backgroundColor = "#efd292";
      }, 1500)
    }
  }
  auxEvento++
}
if(maoDeObra>=100){
  maoDeObra = 100
  morte=true
}else if(maoDeObra<=0){
  maoDeObra = 0
  morte = true
}

if(recursos>=100){
  recursos = 100
  morte=true
}else if(recursos<=0){
  recursos = 0
  morte = true
}

if(economia>=100){
  economia = 100
  morte=true
}else if(economia<=0){
  economia = 0
  morte = true
}

if(coroa>=100){
  coroa = 100
  morte=true
}else if(coroa<=0){
  coroa = 0
  morte = true
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

var jogadores = new Array();

function register() {
    
    jogadores = JSON.parse(localStorage.getItem("Jogadores"))
    if(jogadores == null)
        jogadores = new Array()
    
    var usuario = {
      nome: nome,
      pontos: anosSobrevividos
    };
    

    jogadores.push(usuario)
    //serieAux.push(serie)

    localStorage.setItem("Jogadores",JSON.stringify(jogadores));
    //localStorage.setItem("serie",serieAux);


  }

  function tabela(){
    jogadores = JSON.parse(localStorage.getItem("Jogadores"))
    jogadores.sort(ordenar)
    if(jogadores != null){
        var tabela = document.getElementById("tabela")
        
        for(var i=0; i<jogadores.length; i++){
            var tr = document.createElement("tr")
            
            var th = document.createElement("th")
            th.setAttribute("class","thNumero")
            th.innerHTML = (i+1)
            tr.appendChild(th);
    
            var tdNome = document.createElement("td")
            tdNome.setAttribute("class","tdNome")
            tdNome.innerHTML = jogadores[i].nome
            tr.appendChild(tdNome);
            
            
                var tdPontuacao = document.createElement("td")
                tdPontuacao.setAttribute("class","tdPontos")
                tdPontuacao.innerHTML = jogadores[i].pontos.toFixed(0)
                tr.appendChild(tdPontuacao);
                if((i+1)%2==0){
                  tdNome.style.backgroundColor = "#d6b671"
                  tdPontuacao.style.backgroundColor = "#d6b671"
                }     
            tabela.appendChild(tr)
        }
    }	

  }



  
  function ordenar(a, b){
  return b.pontos - a.pontos  ;
  }
  
  function imprimirArray(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';
  
    for (let i = 0; i < array.length; i++) {
      span.innerHTML += array[i].nome + ', idade ' + array[i].idade + ' anos.<br/>';
    }
  }