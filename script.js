const form = document.querySelector('form');
const cardList = document.getElementById('cards');
const resetButton = document.getElementById('reset-cards');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const cardValue = document.getElementById('card-value').value;

  if (cardValue) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = cardValue;
    cardList.appendChild(card);
    document.getElementById('card-value').value = '';
  }
});

resetButton.addEventListener('click', () => {
  cardList.innerHTML = '';
});