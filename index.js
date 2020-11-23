const menu = document.querySelector('.options');
const btn = document.querySelector('.signBtn');
const span = document.querySelector('.material-icons');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menu.classList.contains('active') ? span.innerHTML = 'keyboard_arrow_up' : span.innerHTML = 'expand_more';
});