//Giphy app

const searchInput = document.getElementById("searchInput");
const searchNumber = document.getElementById("numberInput");
const searchButton = document.getElementById("searchButton");
const giphArea = document.getElementById("giphArea");

function getInputNumber() {
  searchNumber.value;
}

function getInputSearch() {
  const inputSearch = searchInput.value;
  let url;
  if (searchNumber.value === "") {
    url = `https://api.giphy.com/v1/stickers/search?api_key=UgmywZJ9nZlGgedyMvIBS9bW8PHezGhr&q=${inputSearch}&limit=1&offset=0&rating=g&lang=en`;
  } else if (searchNumber.value >= 1) {
    url = `https://api.giphy.com/v1/stickers/search?api_key=UgmywZJ9nZlGgedyMvIBS9bW8PHezGhr&q=${inputSearch}&limit=${searchNumber.value}&offset=0&rating=g&lang=en`;
  }
  if (inputSearch === "") {
    alert("Enter a gif name");
  }
  catchGiphy(url);
}

function catchGiphy(url) {
  fetch(`${url}`).then(function (response) {
    response.json().then(function (data) {
      data.data.forEach((element) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = `${element.images.downsized_medium.url}`;
        giphArea.appendChild(div);
        div.appendChild(img);
      });
    });
  });
  giphArea.innerHTML = "";
}

searchButton.addEventListener("click", getInputSearch);
