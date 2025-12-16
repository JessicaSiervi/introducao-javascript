const formLogin = document.getElementById('form-login')
const nomeInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const sexoInput = document.querySelector("#sexo")
const dataInput = document.querySelector("#data")

function validaInformacoes(nome) {
    if(nome.length > 6 && password.length > 8) 
        return alert("Validado com sucesso !")
    
    return alert('Ocorreram erros em sua validação !')
}

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()
    validaInformacoes(nomeInput.value, emailInput.value, sexoInput.value, dataInput.value)

})