const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 5;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: './img/blacksquare.jpg', name: 'black' },
    { imgSrc: './img/bluesquare.jpg', name: 'blue' },
    { imgSrc: './img/greensquare.jpg', name: 'green' },
    { imgSrc: './img/orangesquare.jpg', name: 'orange' },
    { imgSrc: './img/pinksquare.jpg', name: 'pink' },
    { imgSrc: './img/purplesquare.jpg', name: 'purple' },
    { imgSrc: './img/redsquare.jpg', name: 'red' },
    { imgSrc: './img/yellowsquare.jpg', name: 'yellow' },
    { imgSrc: './img/blacksquare.jpg', name: 'black' },
    { imgSrc: './img/bluesquare.jpg', name: 'blue' },
    { imgSrc: './img/greensquare.jpg', name: 'green' },
    { imgSrc: './img/orangesquare.jpg', name: 'orange' },
    { imgSrc: './img/pinksquare.jpg', name: 'pink' },
    { imgSrc: './img/purplesquare.jpg', name: 'purple' },
    { imgSrc: './img/redsquare.jpg', name: 'red' },
    { imgSrc: './img/yellowsquare.jpg', name: 'yellow' }
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    // console.log(cardData);
};

randomize();