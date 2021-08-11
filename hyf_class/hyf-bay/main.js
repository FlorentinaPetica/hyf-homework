console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let element = document.querySelector('ul')

function renderProducts(products) {
    for (let i=0; i<products.length; i++) {
        let list = document.createElement('li')
        element.appendChild(list);
        list.innerHTML = products[i].name
        list.addEventListener('click', openInfo)
        function openInfo() {
            let price = document.createElement('span')
            let ratings = document.createElement('span')
            price.innerHTML = `Price: ${products[i].price}`
            ratings.innerHTML = `Rating: ${products[i].rating}`
            list.append(price);
            list.append(ratings);
            list.removeEventListener('click', openInfo)
        }
    }
}

renderProducts(products); // This should create the ul and the li's with the individual products details