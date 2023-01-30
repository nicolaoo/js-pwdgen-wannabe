// 1.Chiedere il nome all'utente
    let firstName = prompt ('Inserisci il tuo nome');
    console.log(firstName);

// 2.Chieder il cognome all'utente
    let surname = prompt ('inserisci il cognome');
    console.log(surname);

// 3. Chiedere il colore preferito 
    const color = prompt('inserisci il tuo colore preferito');
    console.log(color);

// 4.Chieder un numero a caso
    const number = prompt ('inserisci un numero');
    console.log(number);

// 5.Con i dati dell'utente creare una password
    const passwordElement = document.getElementById('password-title');
    passwordElement.innerHTML = firstName + surname + color + number;