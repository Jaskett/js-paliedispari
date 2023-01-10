const inputParola = document.getElementById('name');
const bottone = document.getElementById('button');
const risultato = document.getElementById('result');

function isPalindrome(word) {
    let final = '';

    for(let i = word.length - 1; i >= 0; i--) {
        final += word[i];
    }

    return final;
}

bottone.addEventListener('click',
    function() {
        const parolaUtente = inputParola.value;

        if(!parolaUtente) {
            risultato.classList.add('text-danger');
            risultato.innerText = "ERRORE! Inserire la parola";
            return;
        }

        const reverse = isPalindrome(parolaUtente);

        if(parolaUtente === reverse) {
            risultato.innerText = 'COMPLIMENTI! La tua parola è palindroma';
        }
        else {
            risultato.innerText = 'Mi spiace, la tua parola non è palindroma';
        }
    }
)