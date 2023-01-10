const numero = document.getElementById('number');
const select = document.getElementById('choice');
const bottone = document.getElementById('button');
const risultato = document.getElementById('result');

function getRandomNumber(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(number) {
    return number % 2 === 0;
}

bottone.addEventListener('click',
    function() {
        const userNumero = parseInt(numero.value);
        const userScelta = select.value;

        if(!userNumero || userNumero < 1 || userNumero > 5) {
            alert('ERRORE! Numero inserito non valido');
            return;
        }

        if(!userScelta || (userScelta !== 'even' && userScelta !== 'odd')) {
            alert('ERRORE! Scelta non valida');
            return;
        }

        const cpuNumero = getRandomNumber(1, 5);
        console.log(cpuNumero);

        const sum = userNumero + cpuNumero;
        console.log(sum);

        const rightChoice = isEven(sum) ? 'even' : 'odd';

        const winner = userScelta === rightChoice ? 'User' : 'Cpu';

        risultato.innerText = 'Il vincitore è: ' + winner;
    }
)