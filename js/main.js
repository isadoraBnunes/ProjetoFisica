//
// var resultadoEnergia = "";
// var resultadoConsumo = "";
//
// function enviar(){
//     //value é a informação que será enviado para o servidor
//     var descricao = document.querySelector("#descricao").value; //Retorna o primeiro elemento dentro do documento que corresponde ao grupo especificado de seletores.
//     var quantidade = document.querySelector("#quantidade").value;
//     var potencia = document.querySelector("#potencia").value;
//     var tempo = document.querySelector("#tempo").value;
//     var valor = document.querySelector("#valor").value;
//
//     if(resultadoEnergia == "" && resultadoConsumo == ""){
//         resultadoEnergia = 0;
//         resultadoConsumo = 0;
//         resultadoConsumoTotal = 0;
//         totalPagar = 0;
//     }
//
//     resultadoConsumo = (parseFloat(quantidade) * parseFloat(potencia) *  parseFloat(tempo) * 30) / 1000; //parseInt() analisa um argumento string e retorna um inteiro na base especificada.
//     resultadoConsumoTotal = resultadoConsumo + resultadoConsumoTotal;
//     totalPagar = resultadoConsumoTotal * valor;
//
//
//     var line = document.createElement("p"); //Document.createElement() cria o elemento HTML especificado
//     line.innerHTML = "<div class='card'>" //  innerHTMML coloca dentro da dive oq ele recebe;
//                         + "<span>" + "Descricao:" + "</span>" + descricao // <span> é um elemento em linha.
//                         + "<span>" + "Quantidade:" + "</span>" + quantidade
//                         + "<span>" + "Potencia:" + "</span>" +  potencia
//                         + "<span>" + "Tempo:" + "</span>" + tempo
//                         + "<span>" + "Consumo:" + "</span>" + resultadoConsumo +
//                     "</div>";
//
//     // A função appendChild() insere um elemento filho (children) ao elemento pai (parent) na última posição
//     document.getElementById("corpo").appendChild(line);  // getElementById é uma função do JavaScript que serve para retornar um elemento do DOM que é identificado por um ID específico
//     document.getElementById("resultadoConsumo").innerHTML = resultadoConsumoTotal;
//     document.getElementById("totalPagar").innerHTML = totalPagar;
//
// }
