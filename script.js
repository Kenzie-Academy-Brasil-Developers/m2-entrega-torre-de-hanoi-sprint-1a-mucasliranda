let array = [1,2,3,4,5]
let on = false
let easy = document.getElementById("easy")
let medium = document.getElementById("medium")
let hard = document.getElementById("hard")
let resetButton = document.getElementById("reset")
let section = document.getElementById("section")
let stick = document.getElementsByClassName("stick")
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
    if(e.childElementCount === 0 || e.lastElementChild.clientWidth > lastChild.clientWidth){
      //console.log(e.lastElementChild.clientWidth)
      e.appendChild(lastChild)
      lastChild = ""
      counter += 1
      let count = document.getElementById("count").innerText = counter
      //console.log("colocando o disco")
    }
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

/*function validDisk(e) {
  if(e.childElementCount === 0 || e.lastElementChild.clientWidth === true ){
    console.log("Lucasss")
    moveDisk(e)
  }
}*/

easy.addEventListener("click", easyDifi)

medium.addEventListener("click", mediumDifi)

hard.addEventListener("click", hardDifi)

resetButton.addEventListener("click", reset)
 
for(let i = 0; i < stick.length; i++){
  stick[i].addEventListener("click", () =>{
    
    //validDisk(stick[i])
    moveDisk(stick[i])
  })
}
