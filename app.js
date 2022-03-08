const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 5;

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
    const toggleCard = document.querySelectorAll('.toggleCard');

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
            });

            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart('Too bad, try again!');
            };
        }
    };

    if (toggleCard.length === 16) {
        restart('Congrats, you won!')
    };
};

const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';

    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000);
    });
    playerLives = 5;
    playerLivesCount.textContent = playerLives;

    setTimeout(() => window.alert((text), 100))
};

cardGenerator();