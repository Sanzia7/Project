const product_add_form_elem = document.querySelector(".product_form");
let products = [];

function render() {
  const container = document.querySelector(".product-container");
  container.innerText = "";
  products.forEach(({ title, price }) => {
    const product = document.createElement("div");
    const titleElem = document.createElement("p");
    const priceElem = document.createElement("p");
    titleElem.innerText = title;
    priceElem.innerText = price;
    product.append(titleElem, priceElem);
    container.append(product);
  });
}

product_add_form_elem.addEventListener("submit", (event) => {
  event.preventDefault();
  const { title, price } = event.target;
  
  products.push({
    title: title.value,
    price: price.value,
  });
  title.value = "";
  price.value = "";
  render();
});
