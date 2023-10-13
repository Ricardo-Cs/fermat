const indexButton = document.querySelector('#index-start');

indexButton.addEventListener('click', (event) => {
    event.preventDefault();

    window.location = './pages/playerInfo.html';
});