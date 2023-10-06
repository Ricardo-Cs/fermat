const form = document.querySelector('#player-form');
const inputForm = document.querySelector('#player-form input');
const formButton = document.querySelector('#player-info-button');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    localStorage.setItem("player", inputForm.value);
    window.location = "./pages/game.html";
});
