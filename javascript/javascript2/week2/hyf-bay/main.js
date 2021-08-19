console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
//---------------------------------------------------------------------------------------------
// Select the div element where the list will display
//---------------------------------------------------------------------------------------------
const list = document.querySelector(".list");

//---------------------------------------------------------------------------------------------
// Adding event listener to the search input and create a function to filter products by name
//---------------------------------------------------------------------------------------------
const searchProduct = document
  .getElementById("searchProduct")
  .addEventListener("input", showFilterProducts);

function showFilterProducts(e) {
  const searchValue = e.target.value.toLowerCase();

  const matchProducts = products.filter((product) =>
    product.name.toLowerCase().match(searchValue)
  );

  if (matchProducts) {
      list.innerHTML = "";
      
      matchProducts.map((product) => {
          let ul = document.createElement("ul");
          ul.innerHTML = `
          <li>${product.name}</li>
          <li>Price: ${product.price}</li>
          <li>Rating: ${product.rating}</li>
          <li>Product specification</li>
        `;
        list.appendChild(ul);
    });
  }
}
//---------------------------------------------------------------------------------------------
// Return a numeric value from the input element and filter by price and rating
//---------------------------------------------------------------------------------------------
function getFilterValue() {
  return filterValue.value;
}

function renderProducts(products) {
  let filterValue = getFilterValue();

  if (document.getElementById("price").selected && getFilterValue() !== "") {
    const checkPrices = products
      .filter((product) => product.price < filterValue)
      .map((product) => product);
    list.innerHTML = "";
    checkPrices.forEach((product) => {
      let ul = document.createElement("ul");
      ul.innerHTML = `
        <li>${product.name}</li>
        <li>Price: ${product.price}</li>
        <li>Rating: ${product.rating}</li>
        `;
      list.appendChild(ul);
    });
  } else if (
    document.getElementById("ratings").selected &&
    getFilterValue() == ""
  ) {
    const checkRatings = products
      .sort(function (a, b) {
        return b.rating - a.rating;
      })
      .filter((product) => product.rating >= 5)
      .map((product) => product);

    list.innerHTML = "";

    checkRatings.forEach((product) => {
      let ul = document.createElement("ul");
      ul.innerHTML = `
        <li>${product.name}</li>
        <li>Price: ${product.price}</li>
        <li>Rating: ${product.rating}</li>
        `;
      list.appendChild(ul);
    });
  } else if (
    document.getElementById("ratings").selected &&
    getFilterValue() !== ""
  ) {
    const checkRatings = products
      .sort(function (a, b) {
        return b.rating - a.rating;
      })
      .filter((product) => product.rating >= filterValue)
      .map((product) => product);
    list.innerHTML = "";
    checkRatings.forEach((product) => {
      let ul = document.createElement("ul");
      ul.innerHTML = `
        <li>${product.name}</li>
        <li>Price: ${product.price}</li>
        <li>Rating: ${product.rating}</li>
        `;
      list.appendChild(ul);
    });
  }
}

//renderProducts(products);