const url_estado = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")

estado.addEventListener('change', async function(){
    const url_cidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estado.value+'/municipios'
    const request = await fetch(url_cidades)
    const response = await request.json()
    console.log(response.length)

    let options = ''
    response.forEach(function(cidades){
        options += '<option>'+cidades.nome+'</option>'
    })
    cidade.innerHTML = options
})

window.addEventListener('load', async ()=> {
    const request = await fetch(url_estado)
    const response = await request.json()

    const options = document.createElement("optgroup")
    options.setAttribute('label','Estados')
    response.forEach(function(estado){
        options.innerHTML += '<option>'+estado.sigla+'</option>'
    })

    estado.append(options)

})

function enviarERedirecionar() {

    if (document.getElementById("form").checkValidity()) {

        document.getElementById("form").submit();
        window.location.href = "verificar_email.html";
    } else {
        alert("Preencha todos os campos corretamente!");
    }
}
const senhaInput = document.getElementById("senha");
const iconeSenha = document.getElementById("iconeSenha");

iconeSenha.onclick = function() {
   
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        iconeSenha.src = "/components/images/eye.svg";
    } else {
        senhaInput.type = "password";
        iconeSenha.src = "/components/images/eye-off.svg";

    }
}

const confirmarSenhaInput = document.getElementById("confirmarSenha");
const iconeConfirmarSenha = document.getElementById("iconeConfirmarSenha");

iconeConfirmarSenha.onclick= function() {

    if (confirmarSenhaInput.type === "password") {
        confirmarSenhaInput.type = "text";
        iconeConfirmarSenha.src = "/components/images/eye.svg";
    } else {
        confirmarSenhaInput.type = "password";
        iconeConfirmarSenha.src = "/components/images/eye-off.svg";

    }
}
let pesquisaInput = document.querySelector("#pesquisaInput");
pesquisaInput.addEventListener("input", function() {
    let searchTerm = this.value.toLowerCase();
    let cursos = document.querySelectorAll(".cursos");
    
    cursos.forEach(function(curso) {
        let summary = curso.querySelector("summary").textContent.toLowerCase();
        
        if (summary.includes(searchTerm)) {
            curso.style.display = "block"; 
        } else {
            curso.style.display = "none"; 
        }
    });
});

function solicitacaoEntrada(){
    alert("Entrada solicitada!");
}

