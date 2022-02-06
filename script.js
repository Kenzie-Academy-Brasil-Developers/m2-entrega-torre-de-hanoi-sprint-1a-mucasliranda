let array = [1,2,3,4,5]
let on = false
let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let resetButton = document.getElementById("reset")
let section = document.getElementById("section")
let stick = document.getElementsByClassName("stick")
let semaforo = document.getElementById("semaforo")
let button = document.querySelectorAll("button")
let contador = document.getElementsByClassName("contador")
let winCondition = 0
let lastChild = ""



let counter = 0



function easyDifi() {

  if(on === false){

    //               Criando as div

    //let diskFive = document.createElement("div")
    //let diskFour = document.createElement("div")
    let diskThree = document.createElement("div")
    let diskTwo   = document.createElement("div")
    let diskOne   = document.createElement("div")


    //               Adicionando as classes

    //diskFive.classList.add("diskFive")
    //diskFour.classList.add("diskFour")
    diskThree.classList.add("diskThree")
    diskTwo.classList.add("diskTwo")
    diskOne.classList.add("diskOne")


    //               Botando os filhos com os pais
    
    stick[0].appendChild(diskOne)
    stick[0].appendChild(diskTwo)
    stick[0].appendChild(diskThree)
    //stick.appendChild(diskFour)
    //stick.appendChild(diskFive)
    

    on = true
    winCondition = 3
  } 
}

function mediumDifi() {

  if(on === false){

    //               Criando as div

    //let diskFive = document.createElement("div")
    let diskFour = document.createElement("div")
    let diskThree = document.createElement("div")
    let diskTwo   = document.createElement("div")
    let diskOne   = document.createElement("div")


    //               Adicionando as classes

    //diskFive.classList.add("diskFive")
    diskFour.classList.add("diskFour")
    diskThree.classList.add("diskThree")
    diskTwo.classList.add("diskTwo")
    diskOne.classList.add("diskOne")


    //               Botando os filhos com os pais
    
    stick[0].appendChild(diskOne)
    stick[0].appendChild(diskTwo)
    stick[0].appendChild(diskThree)
    stick[0].appendChild(diskFour)
    //stick.appendChild(diskFive)
    

    on = true
    winCondition = 4
  } 
}

function hardDifi() {

  let inicio = document.getElementById("inicio")

  if(on === false){

    //               Criando as div

    let diskFive = document.createElement("div")
    let diskFour = document.createElement("div")
    let diskThree = document.createElement("div")
    let diskTwo   = document.createElement("div")
    let diskOne   = document.createElement("div")


    //               Adicionando as classes

    diskFive.classList.add("diskFive")
    diskFour.classList.add("diskFour")
    diskThree.classList.add("diskThree")
    diskTwo.classList.add("diskTwo")
    diskOne.classList.add("diskOne")


    //               Botando os filhos com os pais
    
    stick[0].appendChild(diskOne)
    stick[0].appendChild(diskTwo)
    stick[0].appendChild(diskThree)
    stick[0].appendChild(diskFour)
    stick[0].appendChild(diskFive)
    

    on = true
    winCondition = 5
  } 
}

function moveDisk(e) {
  if(lastChild === ""){
    if(e.childElementCount >= 1){
      lastChild = e.lastElementChild
      //console.log("pegando o disco")
    }
  }
  else{                      //  
    if(lastChild === e.lastElementChild){
      lastChild = ""
    }
    else if(e.childElementCount === 0 || e.lastElementChild.clientWidth > lastChild.clientWidth){
      //console.log(e.lastElementChild.clientWidth)
      e.appendChild(lastChild)
      lastChild = ""
      counter += 1
      let count = document.getElementById("count").innerText = counter
      //console.log("colocando o disco")
    }
  }
}

function win() {
  if(stick[2].childElementCount === winCondition){
    //console.log("venceu porra")
    alert("VICTORY")
    setTimeout(reset(), 5000)
  }
}

function reset() {

  for(let i = 0; i < stick.length; i++){
    while (stick[i].firstChild) {
      stick[i].removeChild(stick[i].firstChild)
    }
  }
  on = false
  counter = 0
  let count = document.getElementById("count").innerText = counter
  lastChild = ""
}

function semaforoTrocaCor() {
  if(lastChild !== ""){
    semaforo.style.backgroundColor = "black"
    button.forEach( (e) => {
      e.style.color = "white"
    })
    contador[0].style.color = "white"
  }
  else{
    semaforo.style.backgroundColor = "white"
    button.forEach( (e) => {
      e.removeAttribute("style")
    })
    contador[0].removeAttribute("style")
  }
}

/*function win() {
  if(stick[2])
}*/

easy.addEventListener("click", easyDifi)

medium.addEventListener("click", mediumDifi)

hard.addEventListener("click", hardDifi)

resetButton.addEventListener("click", reset)
 
for(let i = 0; i < stick.length; i++){
  stick[i].addEventListener("click", () =>{
    
    //validDisk(stick[i])
    moveDisk(stick[i])
    semaforoTrocaCor()
    win()
  })
}
