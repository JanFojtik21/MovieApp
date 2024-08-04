document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home-button');
    const moviesButton = document.getElementById('movies-button');
    const myList = document.getElementById('myList-button');
    const newsButton = document.getElementById('news-button');
    const getMeBack = document.getElementById('return-to-home');

    if (homeButton) {
        homeButton.addEventListener("click", event => {
            window.location.replace("homePage.html");
        });
    }

    if (getMeBack) {
        getMeBack.addEventListener('click', event => {
            window.location.replace("index.html");
        });
    }
});