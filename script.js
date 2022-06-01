var res = fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
console.log(res);
res.then((data) => {
  return data.json()})
.then((data1) => {console.log(data1)
  // let makeup ="";
  // data1.map((values) => {
  //   makeup=`<div id="products">
  //   <h1 id="name">${values.name}</h1>
  //   <h3 id="brand">${values.brand}</h3>
  //   <img
  //   src="${values.image_link}"
  //   id="images"
  //   />
  //   <h3 id="price"><span>${values.price_sign}</span>${values.price}</h3>
  //   <p id="description">${values.description}
  //   </p>
  //   <a
  //   id="productlink"
  //   href="${values.product_link}"
  //   >Product Link</a
  //   >
  //   </div>`;
  // })
  document.getElementById("products").innerHTML=makeup;
}).catch((err) => console.log(err));



var section = document.createElement(section);
document.body.append(section);
section.setAttribute("id", "nav");
var header = (section.innerHTML = `<div id="logoname">
<img src="images/makeup.png" alt="" srcset="" id="icon" />
<h1 id="heading">Makeup API</h1>
</div>
<div id="search">
<input
type="text"
placeholder="Search products & Product type"
id="bar"
/>
<input type="button" value="search" onclick="foo()" id="button" />
</div>`);

var div = document.createElement(div);
div.setAttribute("id", "cards");
// var products = document.createElement(div);
// products.setAttribute("id", "products");
document.body.append(div)

// (div.innerHTML = `<div id="products">
// <h1 id="name"></h1>
// <h3 id="brand"></h3>
// <img
//   src=""
//   alt=""
//   srcset=""
//   id="images"
// />
// <h3 id="price"><span></span></h3>
// <p id="description">
// </p>
// <a
//   id="productlink"
//   href=""
//   >Product Link</a
// >
// </div>`);
// document.body.append(div);

const container = document.createElement("div");
document.body.append(container);
container.setAttribute("id", "cards");

container.innerHTML = `<div id="products">
<h1 id="name"></h1>
<h3 id="brand"></h3>
<img
src=""
id="images"
/>
<h3 id="price"><span></span></h3>
<p id="description">
</p>
<a
id="productlink"
href=""
>Product Link</a
>
</div>`

async function foo() {
let bname = document.getElementById("bar").value;
let make = await fetch(
  `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${bname}`
);
let make1 = await make.json();
console.log(make1);

for (let value of make1) {
  console.log(value.brand);
  let brandname = value.brand;
  console.log(value.name);
  let nameofprod = value.name;
  console.log(value.price);
  let price = value.price;
  console.log(value.description);
  let description = value.description;
  console.log(value.image_link);
  let image = value.image_link;
  console.log(value.product_link);
  let productLink = value.product_link;
  
  document.getElementById("brand").innerText = `${brandname}`;
  document.getElementById("name").innerText = `${nameofprod}`;
  document.getElementById("price").innerText = `$ ${price}`;
  document.getElementById(
    "description"
  ).innerText = `description:${description}`;

  document.getElementById(
    "images").innerHTML = `<img
    src="$(image)"
    id="images"
    />`;

  document.getElementById(
    "product-link"
  ).innerHTML = `<a
  id="productlink"
  href="${productLink}"
  >Product Link</a
  >`;
}
}

// make1.forEach((make1, index) => {
//   let brandname = make1.brand;
//   let nameofprod = make1.name;
//   let price = make1.price;
//   let description = make1.description;
//   let image = make1.image_link;
//   let productLink = make1.product_link;


//   document.getElementById("brand").innerText = `${brandname}`;
//   document.getElementById("name").innerText = `${nameofprod}`;
//   document.getElementById("price").innerText = `$ ${price}`;
//   document.getElementById(
//     "description"
//   ).innerText = `${description}`;

//   document.getElementById(
//     "images").innerHTML = `<img
//     src="$(image)"
//     id="images"
//     />`;

//   document.getElementById(
//     "product-link"
//   ).innerText = `${productLink}`;


// }).map((values) => {
//    return make1;
// })
// };
