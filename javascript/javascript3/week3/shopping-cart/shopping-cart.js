const productsList = document.getElementById("productsList");
const searchProduct = document.getElementById("searchProduct");
const cart = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
let cartValue = 0;
let numberOfItems = 0;

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    const exchangeCurrency = currency.toUpperCase();
    fetch(
      `https://free.currconv.com/api/v7/convert?q=DKK_${exchangeCurrency}&compact=ultra&apiKey=887a84c9cd061cfbd5fa`
    )
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = Object.values(data)[0];
        const exchangeValue = (this.price * exchangeRate).toFixed(2) + currency;
        console.log(exchangeValue);
      })
      .catch((error) => {
        throw error;
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    //should add a product to the products array
    this.products.push(product);
  }

  removeProduct(product) {
    //should remove a product from the products array
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    //should return an array of product that match the productName parameter
    const index = this.products.indexOf(productName);
    let searchedProducts = [];
    if (index > -1) {
      searchedProducts.push(this.products[index]);
    }
    return (this.searchedProducts = searchedProducts);
  }

  getTotal() {
    //should get the total price of the products in the shoppingcart
    let totalAmount = 0;
    this.products.forEach((product) => (totalAmount += product.price));
    this.totalAmount = totalAmount;
  }

  renderProducts(products) {
    //function for how to render the products to html

    products.map((product) => {
      let ul = document.createElement("ul");
      let button = document.createElement("button");
      button.innerHTML = "Add to cart";
      ul.innerHTML = `
      <li>${product.name}</li>
      <li>Price: ${product.price}</li>
      `;
      productsList.appendChild(ul);
      ul.appendChild(button);

      button.addEventListener("click", () => {
        cartValue += product.price;
        numberOfItems++;
        cartItems.innerHTML = ` ${numberOfItems} items <br> Total price ${cartValue}`;
      });
    });
  }

  //extra method added for user to search on input
  inputSearch() {
    searchProduct.addEventListener("input", (e) => {
      const searchValue = e.target.value.toLowerCase();
      const matchProducts = allProducts.filter((product) =>
      product.name.toLowerCase().match(searchValue)
      );
      console.log(matchProducts)
        if (matchProducts.length != 0) {
        productsList.innerHTML = "";
        shoppingCart.renderProducts(matchProducts);
      } else {
        alert('No matches found')
      }
    });
  }

  //should return a promise with the data from this api: https://jsonplaceholder.typicode.com/users/1
  async getUser() {
    try {
      const user1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const response = await user1.json();
      this.user = response;
      const h2 = document.getElementById("user");
      h2.innerHTML = this.user.name;
    } catch (error) {
      console.log(error);
    }
  }
}

const shoppingCart = new ShoppingCart();

const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const smartWatch = new Product("smart-watch", 2500);
shoppingCart.addProduct(smartWatch);
const coffeemaker = new Product("coffee-maker", 1000);
shoppingCart.addProduct(coffeemaker);
const laptop = new Product("laptop", 10000);
shoppingCart.addProduct(laptop);
const plant = new Product("plant", 50);
shoppingCart.addProduct(plant);
plant.convertToCurrency("USD");
shoppingCart.removeProduct(flatscreen);
shoppingCart.searchProduct(laptop);

console.log(shoppingCart);

const allProducts = shoppingCart.products;

shoppingCart
  .getUser()
  .then(shoppingCart.inputSearch())
  .then(shoppingCart.renderProducts(allProducts))
  .then(shoppingCart.getTotal())
