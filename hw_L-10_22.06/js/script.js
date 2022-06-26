const product_add_form_elem = document.querySelector(".products_form");
let productsArr = [];

function render() {
   const productsContainer = document.querySelector(".products_container");
   // productsContainer.innerText = "";
   productsArr.forEach(({ title, price }) => {
      const product = document.createElement("div");
      const titleElem = document.createElement("p");
      const priceElem = document.createElement("p");
      titleElem.innerText = title;
      priceElem.innerText = price;
      product.classList.add('product');
      product.append(titleElem, priceElem);
      productsContainer.append(product);
   });
}

product_add_form_elem.addEventListener("submit", (event) => {
   event.preventDefault();
   const { title, price } = event.target;

   productsArr.push({
      title: title.value,
      price: price.value,
   });
   title.value = "";
   price.value = "";
   render();
});
