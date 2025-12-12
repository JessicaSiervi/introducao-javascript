const mainElement = document.createElement('main')
const h1Element = document.createElement('h1')
const pElement = document.createElement('p')
const spanElement = document.createElement('span')

const bodyElement = document.querySelector('body')
h1Element.innerHTML = "Jéssica Silva Siervi"
pElement.innerHTML = "Estudante de DEV"
spanElement.innerHTML = "Cataguases-MG"

mainElement.classList.add('flex','flex-col','gap-4')
h1Element.style.fontSize = '2.4rem'
pElement.style.fontSize = '1.8rem'
spanElement.style.fontSize = '1.4rem'

bodyElement.appendChild(mainElement)
mainElement.appendChild(h1Element)
mainElement.appendChild(pElement)
mainElement.appendChild(spanElement)

const cardFiat = document.getElementById("fiat")
const cardFerrari = document.getElementById("ferrari")
const cardJeep = document.getElementById("jeep")
const cardRam = document.getElementById("ram")


cardFiat.addEventListener('click', () => {
    cardFiat.style.backgroundColor = '#202020'
    cardFerrari.style.backgroundColor = '#202020'
    cardJeep.style.backgroundColor = '#202020'
    cardRam.style.backgroundColor = '#202020'
    cardFiat.style.backgroundColor = 'red'
    
})

cardFerrari.addEventListener('click', () => {
    cardFiat.style.backgroundColor = '#202020'
    cardFerrari.style.backgroundColor = '#202020'
    cardJeep.style.backgroundColor = '#202020'
    cardRam.style.backgroundColor = '#202020'
    cardFerrari.style.backgroundColor = 'red'
   
})

cardJeep.addEventListener('click', () => {
    cardFiat.style.backgroundColor = '#202020'
    cardFerrari.style.backgroundColor = '#202020'
    cardJeep.style.backgroundColor = '#202020'
    cardRam.style.backgroundColor = '#202020'
    cardJeep.style.backgroundColor = 'red'
    
})

cardRam.addEventListener('click', () => {
    cardFiat.style.backgroundColor = '#202020'
    cardFerrari.style.backgroundColor = '#202020'
    cardJeep.style.backgroundColor = '#202020'
    cardRam.style.backgroundColor = '#202020'
    cardRam.style.backgroundColor = 'red'
    
})

