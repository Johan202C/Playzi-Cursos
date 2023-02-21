const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const inputUno = document.querySelector("#calculo1");
const inputDos = document.querySelector("#calculo2");
const btnInteractive = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");


//2️.Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

function recibirArrray(arr) {
  console.log(arr[0]);
}

//recibirArrray(["mi amor", "hermoso", "rico", "precioso", "de mi vida"]);

//3️.Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprintElemntByElement (arr){
    for (let i = 0; i < arr.length ; i++){
        console.log(arr[i])
    }
}

//imprintElemntByElement(["mi amor", "hermoso", "rico", "precioso", "de mi vida"]);


//................AddEventListener ........................

form.addEventListener('submit',sumarInputsValues);

function sumarInputsValues(event){
  event.preventDefault();
  
  const sumaInputs = inputUno.value + inputDos.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}