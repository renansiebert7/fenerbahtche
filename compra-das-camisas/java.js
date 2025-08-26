const form = document.querySelector(".form-camisas")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharFormulario() {
    form.style.left = "-350px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden";
}

document.querySelector('.form-camisas').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão

    const form = this;
    const data = new FormData(form);

    // Envia os dados do formulário para o Formcarry
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(() => {
        // Redireciona para a página de pagamento
        window.location.href = "./pagamento";
    }).catch(() => {
        alert("Erro ao enviar o formulário. Tente novamente.");
    });
});