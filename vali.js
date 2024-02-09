const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const cartoonDiv = document.getElementById('cartoon');

yesButton.addEventListener('click', () => {
    cartoonDiv.style.display = 'block';
});

noButton.addEventListener('click', () => {
    alert('That\'s okay, maybe next time!');
});
