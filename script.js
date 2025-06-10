// A data em que tudo começou ❤️
const dataInicio = new Date('2023-06-10T00:00:00');

const elementoCronometro = document.getElementById('cronometro');

function atualizarCronometro() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    // Cálculos de tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Formata o texto para exibição
    elementoCronometro.innerHTML = `
        ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos
    `;
}

// Atualiza o cronômetro a cada segundo
setInterval(atualizarCronometro, 1000);

// Chama a função uma vez ao carregar para não ficar em branco no início
atualizarCronometro();