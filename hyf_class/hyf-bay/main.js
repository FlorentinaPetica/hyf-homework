console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let element = document.getElementById('list')

function renderProducts(products) {

    for (let i=1; i<products.length; i++) {

        let list = document.createElement('ul')
        list.innerHTML =  `
        <li>${products[i].name}</li>
        <li>Price: ${products[i].price}</li>
        <li>Ratings: ${products[i].rating}</li>`;
        element.appendChild(list);
    }

}

renderProducts(products); // This should create the ul and the li's with the individual products details