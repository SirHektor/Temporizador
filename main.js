document.addEventListener('DOMContentLoaded', function () {
    const christmasDate = new Date('December 25, 2023 00:00:00').getTime();

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = christmasDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days + 'd';
        document.getElementById('hours').innerHTML = hours + 'h';
        document.getElementById('minutes').innerHTML = minutes + 'm';
        document.getElementById('seconds').innerHTML = seconds + 's';

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Feliz Natal!';
        }
    }, 1000);

    const button = document.querySelector('.countdown-button');
    const countdownContainer = document.querySelector('#countdown');

    button.addEventListener('click', function () {
        // Oculta o botão
        button.style.display = 'none';
        // Mostra o container do temporizador
        countdownContainer.style.display = 'block';
    });
});
