const tituloDaHome = document.getElementById("title-home")

tituloDaHome.innerHTML = "Jéssica"
tituloDaHome.style.color = "#c2c2c2"
tituloDaHome.setAttribute("style", "color #101010 ; font-size:80px")

const butoonHome = document.getElementById("btn-home")

buttonHome.innerHTML = "Clique aqui"
buttonHome.addEventListener('click', () => 
    { tituloDaHome.innerHTML = "Jéssica Siervi" })

const secondTitleId =document.getElementById ("second-title")
const secondTitleQuery = document.querySelector ("#second-title")
console.log('secondTitleQuery', secondTitleQuery)
console.log('')