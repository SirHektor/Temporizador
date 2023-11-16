document.addEventListener('DOMContentLoaded', function () {
    // Data do Natal
    const christmasDate = new Date('December 25, 2023 00:00:00').getTime();

    // Atualiza o contador a cada segundo
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = christmasDate - now;

        // Calcula dias, horas, minutos e segundos restantes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o HTML com os valores
        document.getElementById('days').innerHTML = days + 'd';
        document.getElementById('hours').innerHTML = hours + 'h';
        document.getElementById('minutes').innerHTML = minutes + 'm';
        document.getElementById('seconds').innerHTML = seconds + 's';

        // Verifica se a data do Natal foi atingida
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Merry Christmas!';
        }
    }, 1000);
});
