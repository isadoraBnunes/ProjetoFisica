var config = {
  apiKey: "AIzaSyArUYHyyLoKpQia4HNgIHhQ7azO1Ay0BHc",
  authDomain: "calckw-a53d0.firebaseapp.com",
  databaseURL: "https://calckw-a53d0.firebaseio.com",
  projectId: "calckw-a53d0",
  storageBucket: "calckw-a53d0.appspot.com",
  messagingSenderId: "164313977378"
}
firebase.initializeApp(config)

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault()
  const cadastro = {}
  cadastro.descricao = document.querySelector("#descricao").value
  cadastro.quantidade = document.querySelector("#quantidade").value
  cadastro.potencia = document.querySelector("#potencia").value
  cadastro.tempo = document.querySelector("#tempo").value
  firebase.database().ref().push(cadastro)
  document.getElementById("form").reset();
  lerCadastro()
})

function lerCadastro(){
  var rdcadastro = firebase.database().ref()
  rdcadastro.on('value', function(snapshot){
    document.getElementById("corpo").innerHTML = ''
    snapshot.forEach( childSnapshot => {
      const childKey = childSnapshot.key
      const childData = childSnapshot.val()
      mostrarDados(childKey, childData)
    })

  })
}

var totalPagar = 0
var resultadoConsumo = 0
var resultadoConsumoTotal = 0

function mostrarDados(key, rdcadastro) {

  resultadoConsumo = parseFloat(rdcadastro.quantidade * rdcadastro.potencia *  rdcadastro.tempo * 30) / 1000
  resultadoConsumoTotal += resultadoConsumo
  totalPagar = resultadoConsumoTotal * 0.45253

  var line = document.createElement("div")
  line.innerHTML = "<div class='card'>"
  + "<span>" + "Descricao: </span><span class='descricao'>" + rdcadastro.descricao + "</span>"
  + "<span>" + "Quantidade: </span><span class='quantidade'>" + rdcadastro.quantidade + "</span>"
  + "<span>" + "Potencia: </span><span class='potencia'>" +  rdcadastro.potencia + "</span>"
  + "<span>" + "Tempo: </span><span class='tempo'>" + rdcadastro.tempo + "</span>"
  + "<span>" + "Consumo: </span><span class='resultadoConsumo'>" + resultadoConsumo + "</span>"
  // + "<button class='first2' type='submit' data-key='"+key+"' onclick='updateItem(event);'>Editar</button>"
  + "<button class='first2' type='submit' data-key='"+key+"' onclick='deleteItem(event);'>Excluir</button>"+
  "</div>"

  document.getElementById("corpo").appendChild(line)
  document.getElementById("totalPagar").innerHTML = Math.round(totalPagar)
  // document.getElementById("resultadoConsumo").innerHTML = resultadoConsumoTotal;
}

function deleteItem(event){
  key = event.target.getAttribute("data-key")
  const excluir = confirm('Deseja excluir ?')
  if(excluir) {
    firebase.database().ref().child(key).remove()
  }
}


 // function updateItem(event){ // Função para editar item
//   const key = event.target.getAttribute("data-key")
//   const childrenList = event.target.parentNode.childNodes
//   console.log(childrenList[1].textContent);
//
//   childrenList.forEach(children => {
//     if(children.className === "descricao")
//       console.log(children.className["descricao"].textContent);
//   })
// firebase.database().ref().child(key).update(editar)
// }
