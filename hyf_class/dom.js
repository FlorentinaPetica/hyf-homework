const rootDiv = document.getElementById('root');
rootDiv.innerText = 'Hello world!';

const myButton = document.createElement('button');
myButton.innerText = 'Click Me!'
rootDiv.appendChild(myButton);
myButton.setAttribute('id', 'my-button');

document.getElementById('root').addEventListener('mouseover', myTry)

function myTry() {
    this.style.backgroundColor = 'red'
}

function removecolor() {
    document.getElementById('root').removeEventListener('mouseover', myTry)
}

myButton.addEventListener('click', function () {
    const para = document.createElement('p');
    para.innerHTML = 'You clicked me!';
    rootDiv.appendChild(para);
})

const div = document.createElement('div');

div.innerHTML = 'This div was created using Js'
const addDiv = document.querySelector('body')
addDiv.appendChild(div);
div.style.backgroundColor = 'blue'


