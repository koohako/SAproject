var jogadores = new Array();

function register() {
    
    jogadores = JSON.parse(localStorage.getItem("Jogadores"))
    if(jogadores == null)
        jogadores = new Array()
    
    var usuario = {
      nome: document.getElementById("nome").value ,
      serie: document.getElementById("serie").value,
      pontuacao: document.getElementById("pontos").value
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
            th.innerHTML = (i+1)
            tr.appendChild(th);
            
            var tdNome = document.createElement("td")
            tdNome.innerHTML = jogadores[i].nome
            tr.appendChild(tdNome);
            
            var tdTurma = document.createElement("td")
            tdTurma.innerHTML = jogadores[i].serie
            tr.appendChild(tdTurma);
            
                var tdPontuacao = document.createElement("td")
                tdPontuacao.innerHTML = jogadores[i].pontuacao
                tr.appendChild(tdPontuacao);
                        
            tabela.appendChild(tr)
        }
    }	

  }



  
  function ordenar(a, b){
  return b.pontuacao - a.pontuacao  ;
  }
  
  function imprimirArray(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';
  
    for (let i = 0; i < array.length; i++) {
      span.innerHTML += array[i].nome + ', idade ' + array[i].idade + ' anos.<br/>';
    }
  }