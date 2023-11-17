document.addEventListener('DOMContentLoaded', function () {
    // Defina a data do Natal
    const christmasDate = new Date('December 25, 2023 00:00:00').getTime();
    
    // Defina a data inicial dois meses antes do Natal
    const startDate = new Date(christmasDate);
    startDate.setMonth(startDate.getMonth() - 2);
    
    let progresso = 0;

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

        // Calcule o progresso com base no intervalo de dois meses
        const totalDays = (christmasDate - startDate.getTime()) / (1000 * 60 * 60 * 24);
        const daysPassed = (now - startDate.getTime()) / (1000 * 60 * 60 * 24);
        progresso = (daysPassed / totalDays) * 100;

        document.getElementById('progresso').style.width = progresso + '%';

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Feliz Natal!';
        }
    }, 1000);

    const button = document.querySelector('.countdown-button');
    const countdownContainer = document.querySelector('#countdown');
    const progressBar = document.querySelector('#barraProgresso');
    const loadingText = document.querySelector('h3'); // Seleciona o elemento h3

    button.addEventListener('click', function () {
        // Oculta o botão
        button.style.display = 'none';
        // Mostra o container do temporizador e a barra de progresso
        countdownContainer.style.display = 'block';
        progressBar.style.display = 'block';
        loadingText.style.display = 'block'; // Adiciona esta linha para mostrar o h3
    });
    });
