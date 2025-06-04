const form = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

function calcular_idade(ano) {
    const ano_atual = new Date().getFullYear();
    return ano_atual - ano;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = form.elements['nome'].value;
    const ano = +form.elements['ano'].value;

    let idade;
    try {
        idade = calcular_idade(ano);
    } catch (error) {
        alert(error.message);
        return;
    }
    
    resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos.`;
});


