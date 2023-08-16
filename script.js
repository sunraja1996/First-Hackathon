async function fetchAndDisplay() {
  const bname = document.getElementById("bar").value;
  try {
    const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${bname}`);
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(productsData) {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = ""; 

  productsData.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h1 class="name">${product.name}</h1>
      <h3 class="brand">Brand : ${product.brand}</h3>
      <img src="${product.image_link}" class="images" />
      <h3 class="price"><span>${product.price_sign}</span>${product.price}</h3>
      <p class="description">${product.description}</p>
      <a class="product-link" href="${product.product_link}">Product Link</a>
    `;

    cardsContainer.appendChild(card);
  });
}

fetchAndDisplay();



async function allDisplay() {
  try {
    const response = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.log(error);
  }
}

function displayallProducts(productsData) {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";

  productsData.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h1 class="name">${product.name}</h1>
      <h3 class="brand">Brand : ${product.brand}</h3>
      <img src="${product.image_link}" class="images" />
      <h3 class="price"><span>${product.price_sign}</span>${product.price}</h3>
      <p class="description">${product.description}</p>
      <a class="product-link" href="${product.product_link}">Product Link</a>
    `;

    cardsContainer.appendChild(card);
  });

}


allDisplay();
