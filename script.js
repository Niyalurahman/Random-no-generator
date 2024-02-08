 function gen() {
    var randomNumber = Math.floor(Math.random()*(10**Math.floor(Math.random()*10))); 
    document.getElementById('random').innerHTML = 'Random Number: ' + randomNumber;
}
