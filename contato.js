document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-contato");

    if(form) {
        form.addEventListener("submit", function (event){
            event.preventDefault();

            const nome = form.nome.value;
            const email = form.email.value;
            const mensagem = form.mensagem.value;

            console.log("Nome: ", nome);
            console.log("Email: ", email);
            console.log("Mensagem: ", mensagem);
        });
    } else {
        console.warn("Formulario com id 'form-contato' não encontrado.")
    }
})