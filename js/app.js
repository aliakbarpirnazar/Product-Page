const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);
  products.forEach((product) => {
    const productCategory = product.children[0].dataset.category.toLowerCase();
    if (productCategory.includes(filter) || filter === "all") {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
  console.log(filter);
};

const searchPriceHandler = (event) => {
  const searchValue = +event.target.parentElement.children[0].value;
  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const finalPrice = +productPrice.split(" ")[1];
    if (!searchValue) {
      product.style.display = "block";
    } else {
      searchValue === finalPrice
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const start = () => {
  searchInput.addEventListener("keyup", searchHandler);

  priceButton.addEventListener("click", searchPriceHandler);

  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });
};

window.addEventListener("load", start);
