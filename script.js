import "./style.css";
window.onload = async function () {
  const container = document.querySelector(".container");
  const navProducts = document.getElementById("navProducts");
  const navContacts = document.getElementById("navContacts");
  const productsElement = document.getElementById("products");
  const contactsElement = document.getElementById("contacts");
  navProducts.addEventListener("click", () => {
    container.scrollTo({
      behavior: "smooth",
      top: productsElement.offsetTop,
    });
  });
  navContacts.addEventListener("click", () => {
    container.scrollTo({
      behavior: "smooth",
      top: contactsElement.offsetTop,
    });
  });
  try {
    const res = await fetch("https://api.npoint.io/9e5188f459ca27a8100c");
    const data = await res.json();
    const { products } = data;
    productsElement.querySelector(".items").innerHTML = [...products].reduce(
      (cur, item) =>
        cur +
        `<a href="${item.url}">
        <div class="item">
            <img src="${item.image}" alt="${item.title}" />
            <div class="item-title">${item.title}</div>
        </div>
    </a>`,
      ""
    );
    document.querySelector(".loading").style.display = "none";
    productsElement.querySelector(".items").style.display = "block";
  } catch (err) {}
};
