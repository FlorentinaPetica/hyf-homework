
console.log('first try')

const firstDiv = document.createElement('p');
firstDiv.innerHTML = 'Lore ipsum.'
const anyName = document.querySelector('body');
anyName.appendChild(firstDiv);
firstDiv.style.color = 'red';
const myButton = document.querySelector('#js-calling');

// myButton.addEventListener('click', function onClick() {
//     alert('You clicked the button!')
// });

myButton.addEventListener('click', function () {
    const para = document.createElement('p');
    para.innerText = 'You clicked me!';
    anyName.appendChild(para);
  });

  console.log('second try');