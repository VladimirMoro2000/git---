const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circle = document.getElementsByClassName('circle');

console.log('circle');

const wrapper = document.querySelectorAll('.wrapper');

wrapper.forEach(item => {
    console.log(item);
});

const oneWrapper = document.querySelector('.wrapper');
console.log(oneWrapper);