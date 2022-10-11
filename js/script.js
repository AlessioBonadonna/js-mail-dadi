// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

/* il mio M.O.
 attravero il Promt chiedo l'email al utente 
 attraverso un ciclo FOR controllo se email data e valida 
 se e valida stampo in console email valida 
 invece stampo in console email non valida 
*/
var emailUtente=prompt("Inserisci la tua email");
console.log(emailUtente);
let emailValide =["mail1@mail.com","mail2@mail.com","mail3@mail.com"];
for(i=0;i<emailValide.length;i++){
    if(emailUtente==emailValide[i]){
        let login=true;
    }}

    if(login=true){
        console.log("email non valida ");
    }else{
        console.log("email non valida ");
    }
