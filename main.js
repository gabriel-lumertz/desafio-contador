let input = document.querySelector('h2')
let contador = 0

function increment() {
    contador = contador + 1
    input.innerHTML = contador
}

function decrement() {
    contador = contador - 1
    input.innerHTML = contador
}