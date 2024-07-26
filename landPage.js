// script.js
const scrolLeft= document.querySelector('.icon_left');
scrolLeft.addEventListener('click', () => {
    document.querySelector('.element').scrollBy({
        left: -300, // Ajustez la valeur selon la distance de défilement souhaitée
        behavior: 'smooth'
    });
});
console.log(scrolLeft);
document.querySelector('.icon_right').addEventListener('click', () => {
    document.querySelector('.element').scrollBy({
        left: 300, // Ajustez la valeur selon la distance de défilement souhaitée
        behavior: 'smooth'
    });
});
