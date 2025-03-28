let products = [
  {
    img: "https://iciparis.ge/uploads/image/2024-07-02/14659.png",
    title: "Rabanne",
    description: "MILLION GOLD FOR HIM",
    price: "461",
    discount: "356",
    size: "100",
    numberPrice: 356,
  },
  {
    img: "https://iciparis.ge/uploads/image/2021-09-15/5573.jpg",
    title: "VERSACE",
    description: "EROS FLAME",
    price: "396",
    discount: "297",
    size: "100",
    numberPrice: 297,
  },
  {
    img: "https://iciparis.ge/uploads/image/2022-08-14/8947.jpg",
    title: "BURBERRY",
    description: "HERO EDP",
    price: "465",
    discount: "349",
    size: "100",
    numberPrice: 349,
  },
  {
    img: "https://iciparis.ge/uploads/image/2021-11-09/5914.jpg",
    title: "MAUBOUSSIN",
    description: "CRISTAL OUD",
    price: "154",
    discount: "108",
    size: "100",
    numberPrice: 108,
  },
  {
    img: "https://iciparis.ge/uploads/image/2021-08-12/5074.jpg",
    title: "BURBERRY",
    description: "HERO",
    price: "629",
    discount: "397",
    size: "100",
    numberPrice: 397,
  },
  {
    img: "https://iciparis.ge/uploads/image/2021-08-12/5074.jpg",
    title: "BURBERRY",
    description: "HERO",
    price: "629",
    discount: "397",
    size: "100",
    numberPrice: 397,
  },
  {
    img: "https://iciparis.ge/uploads/image/2021-08-12/5074.jpg",
    title: "BURBERRY",
    description: "HERO",
    price: "629",
    discount: "397",
    size: "100",
    numberPrice: 397,
  },
];

function renderProducts(a) {
  document.getElementById("products").innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    document.getElementById("products").innerHTML += `<div class="card">
        <div class="top">
          <img src="${a[i].img}" alt="...loading" />
        </div>
        <h1>${a[i].title}</h1>
        <h3>${a[i].description}</h3>
        <div class="price-container">
          <div class="price"><strike>${a[i].price}₾ </strike></div>
          <div class="discount">${a[i].discount}₾ <span>/ ${a[i].size}ML</span></div>
        </div>
        <div class="rating">
          <ul>
            <li><img src="./stR.svg" alt="" /></li>
            <li><img src="./stR.svg" alt="" /></li>
            <li><img src="./stR.svg" alt="" /></li>
            <li><img src="./stR.svg" alt="" /></li>
            <li><img src="./stR.svg" alt="" /></li>
          </ul>
        <button onclick=(addToCart('${a[i].title}',${a[i].price}))>Add To Cart</button>
        </div>
      </div> `;
  }
}

let cart = [];

function addToCart(title, price) {
  cart.push({ title, price });

  displayCart();
}

function displayCart() {
  let cartItems = document.getElementById("cartItems");
  let totalPrice = 0;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    let del = document.createElement("span");
    del.textContent = "⨉";
    li.textContent = `${item.title} - ${item.price}  ლარი `;


    li.appendChild(del);
    cartItems.appendChild(li);
    del.onclick = function () {
      delitem(index);
    };

    totalPrice += parseInt(item.price);
  });

  console.log(totalPrice);

  document.getElementById("totalPrice").textContent = totalPrice;
}

function delitem(index) {
  cart.splice(index, 1);
  displayCart();
}

function toggleCartDetails() {
  let cartItems = document.getElementById("cartItems");

  if (cartItems.style.display === "none" || cartItems.style.display === "") {
    cartItems.style.display = "block";
  } else {
    cartItems.style.display = "none";
  }
}

renderProducts(products);
