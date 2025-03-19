// If you have time, you can move this variable "products" to a json or js file and load
// the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

var cart = [];

var total = 0;

let count_product = document.getElementById("count_product");
count_product.textContent = cart.length;

function cartQ() {
  count_product.textContent = cart.length;
}

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  let productOnCart = cart.find((product) => product.id === id);

  if (!productOnCart) {
    let currentProduct = products.find((product) => product.id === id);
    let addProduct = { ...currentProduct, quantity: 1 };
    cart.push(addProduct);
  } else {
    productOnCart.quantity += 1;
  }
  cartQ();
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  cartQ();
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let importeProducto = 0;
  let total = 0;
  for (let producto of cart) {
    if (producto.subtotalWithDiscount == null) {
      importeProducto = producto.price * producto.quantity;
      total = total + importeProducto;
    } else {
      importeProducto = producto.subtotalWithDiscount * producto.quantity;
      total = total + importeProducto;
    }
  }

  let totalPrice = document.getElementById("total_price");

  totalPrice.innerHTML = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  //primero iteramos sobre el array cart para ver que productos tienen campo "offer"

  for (let producto of cart) {
    if (producto.offer != null) {
      if (producto.quantity >= producto.offer.number) {
        producto.subtotalWithDiscount =
          producto.price * (1 - producto.offer.percent / 100);
      }
    }
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom

  let contenidoCart = document.getElementById("cart_list");
  contenidoCart.innerHTML = "";

  applyPromotionsCart();

  for (let product of cart) {
    let cartList = document.getElementById("cart_list");
    let newProduct = document.createElement("tr");
    cartList.appendChild(newProduct);

    let productName = document.createElement("th");
    productName.textContent = product.name;
    newProduct.appendChild(productName);

    let productPrice = document.createElement("td");
    productPrice.textContent = product.price;
    newProduct.appendChild(productPrice);

    let productQuantity = document.createElement("td");
    productQuantity.textContent = product.quantity;
    newProduct.appendChild(productQuantity);

    let productTotal = document.createElement("td");
    productTotal.textContent = calculateTotalModal(product);
    newProduct.appendChild(productTotal);

    let removeItem = document.createElement("img");
    removeItem.src = "../images/trash.png";
    newProduct.appendChild(removeItem);

    removeItem.addEventListener("click", function () {
      removeFromCart(product.id);
    });
  }

  function calculateTotalModal(product) {
    if (product.subtotalWithDiscount != null) {
      return (product.subtotalWithDiscount * product.quantity).toFixed(2);
    } else {
      return product.price * product.quantity;
    }
  }

  calculateTotal();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  let productoToRemove = cart.find((product) => id == product.id);

  productoToRemove.quantity -= 1;

  checkRemoveOffer(productoToRemove);
  checkRemoveProduct(productoToRemove, id);

  cartQ();
  printCart();
}

function checkRemoveOffer(product) {
  if (product.subtotalWithDiscount != null)
    if (product.quantity < product.offer.number)
      delete product.subtotalWithDiscount;
}

function checkRemoveProduct(product, idToRemove) {
  if (product.quantity == 0) {
    let indexProductToRemove = cart.findIndex(
      (producto) => producto.id == idToRemove
    );
    cart.splice(indexProductToRemove, 1);
  }
}

function open_modal() {
  printCart();
}
