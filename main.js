let keyboard = document.querySelectorAll('.keyboard');
let inp = document.querySelector('.inp-one');
let reset = document.querySelector('.inp-reset');

keyboard.forEach (elem => {
    elem.onmousedown = () => {
        elem.classList.add('active');
    }
    elem.onmouseup = () => {
        elem.classList.remove('active')
    }
})

function getKeyboard (event) {
    keyboard.forEach (elem => {
        if (elem.classList.contains('active')) {
            elem.classList.remove('active');
        };

        if (event.key == elem.getAttribute('data')) {
            elem.classList.add('active');
        } 
    });
}
document.querySelector('.inp-one').onkeydown = getKeyboard;

keyboard.forEach (elem => {
    elem.onclick = () => {
        inp.value += elem.textContent;
    } 
})

reset.onclick = () => {
    inp.value = '';
}



