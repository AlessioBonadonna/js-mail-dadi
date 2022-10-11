// <!-- Gioco dei dadi
//   Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//   Stabilire il vincitore, in base a chi fa il punteggio più alto. -->
let user = document.getElementById("user");
let pc = document.getElementById("pc");
let start = document.getElementById('startGame')
start.addEventListener('click', function(){

    let pcGame = Math.ceil(Math.random() * 6);
    let userGame = Math.ceil(Math.random() * 6);
    let risultato = document.getElementById('esito')
    console.log(risultato);
    console.log(pcGame);
    console.log(userGame);
    if(pcGame < userGame){
      risultato.innerHTML = 'Hai vinto!!! <br> Complimenti!!';
      console.log(risultato);
    }else if(pcGame == userGame){
      risultato.innerHTML = 'Hai pareggiato. <br> Riprova.'
      console.log(risultato);
    }else{
      risultato.innerHTML = 'Hai perso... <br> Andrà meglio la prossima volta!!'
      console.log(risultato);
    }
});