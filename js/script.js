// const N = 7;
// alert("Варіант: " +  N + "\nКравченко Поліна");

$(window).on('load', function() {
    
var firstgame = document.getElementById("ball");
firstgame.addEventListener('click', () => {
window.location.href='https://polinakravchenko.github.io/magic-ball/';
});

var secondgame = document.getElementById("numbers");
secondgame.addEventListener('click', () => {
window.location.href='https://polinakravchenko.github.io/whose-number-is-bigger/';
});

var thirdgame = document.getElementById("cards"); 
thirdgame.addEventListener('click', () => {
window.location.href='https://polinakravchenko.github.io/card-game-21/';
});

var fourthgame = document.getElementById("jackpot");
fourthgame.addEventListener('click', () => {
window.location.href='https://polinakravchenko.github.io/one-armed-bandit/';
});

var fifthgame = document.getElementById("language1");
fifthgame.addEventListener('click', () => {
window.location.href='https://polinakravchenko.github.io/learning-language-first-game/';
});

var sixthgame = document.getElementById("language2");
sixthgame.addEventListener('click', () => {
window.location.href='https://polinakravchenko.github.io/learning-language-second-game/';
});
});
