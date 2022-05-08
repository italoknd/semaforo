let red = document.getElementById('red')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')
let semaforo = document.getElementById('semaforo')
let automatic = document.getElementById('automatic')

red.addEventListener('click', vermelho)
yellow.addEventListener('click', amarelo)
green.addEventListener('click', verde)
automatic.addEventListener('click', automatico)

function vermelho() {
  semaforo.src = './imgs/vermelho.png'
}

function amarelo() {
  semaforo.src = './imgs/amarelo.png'
}

function verde() {
  semaforo.src = './imgs/verde.png'
}

function automatico() {
  
}
