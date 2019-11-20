function esquerda(){
    var carta = document.getElementById("baixo")
      var fimanimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"
      var linkImg = "COLOCAR O LINK DA IMAGEM DO PESOMAGEM QUE ESTA NA CARTA!!"
      var textoNome = "Campista"
      var textoFala = "tdxfchgvjhgfthydrfcgv nbkhgiyuftydfhcv bnkgiuyuftydfxgc gftcvbhgfcv buytgfv bnjhytgfcv bnhgfcv bnhgfc bnhgtrfedfcvbnhjuytfrvbnjuytf"
      var paragrafo = document.getElementById("personagemNome")
      var fala = document.getElementById("fala")
      carta.className = "form animated slideOutLeft"
      setTimeout(function(){
        paragrafo.innerHTML = textoNome
        fala.innerHTML = textoFala
        carta.className = "form animated fadeInDown"
        var img = document.getElementById("personagem")
        img.src = linkImg
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
        setTimeout(function(){
          carta.classList += fimanimacao
        }, 1000)
      }, 1000)
   }