/* Mine variabler*/
const articleOne = document.querySelector('.document__one');
const articleTwo = document.querySelector('.document__two');
const articleThree = document.querySelector('.document__three');

const linkOne = document.querySelector('.primaryNavigation__navigationItem:nth-child(1) a');
const linkTwo = document.querySelector('.primaryNavigation__navigationItem:nth-child(2) a');
const linkThree = document.querySelector('.primaryNavigation__navigationItem:nth-child(3) a');

/* styling til mine articles*/
articleOne.style.display = 'none';
articleTwo.style.display = 'none';
articleThree.style.display = 'none';

/* Mine 3 links med preventDefault der viser den artikel der skal være block alt efter hvilket link jeg har trykket */
linkOne.addEventListener('click', function (event) {
    event.preventDefault();
    articleOne.style.display = 'block';
    articleTwo.style.display = 'none';
    articleThree.style.display = 'none';
});

linkTwo.addEventListener('click', function (event) {
    event.preventDefault();
    articleOne.style.display = 'none';
    articleTwo.style.display = 'block';
    articleThree.style.display = 'none';
});

linkThree.addEventListener('click', function (event) {
    event.preventDefault();
    articleOne.style.display = 'none';
    articleTwo.style.display = 'none';
    articleThree.style.display = 'block';
});