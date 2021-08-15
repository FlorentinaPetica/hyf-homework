console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let list = document.querySelector('.hyf-bay')

function renderProducts(products) {
    for (let i=0; i<products.length; i++) {
        let ul = document.createElement('ul')
        
        ul.innerHTML = `
        <li>${products[i].name}</li>
        <li>Price: ${products[i].price}</li>
        <li>Rating: ${products[i].rating}</li>`

        list.appendChild(ul);
    }
}

renderProducts(products); // This should create the ul and the li's with the individual products details