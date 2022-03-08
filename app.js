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
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();

    //* HTML
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            compareCards(e);
        });
    });
};

const compareCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    // clickedCard.classList.add('flipped');
    // console.log(clickedCard);

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name')) {
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })
        } else {
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            })
        }
    };
};

cardGenerator();