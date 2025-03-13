// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
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

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array
  let productOnCart = cart.find((product) => product.id === id); //vemos si el producto que queremos comprar ya hay del mismo tipo en el array cart

  if (!productOnCart) {
    console.log("no esta"); //si no está añadimos la propiedad quantity i fijamos en 1
    let currentProduct = products.find((product) => product.id === id); //
    currentProduct.quantity = 1;
    cart.push(currentProduct);
  } else {
    //el producto que quiero comprar ya hay en el carrito asi que solo hay que incrementar cantidad
    console.log("ya está!");
    productOnCart.quantity += 1;
  }

  console.log(cart); //para ver que funciona borra despues
}

// Exercise 2
function cleanCart() {
  cart.length = 0;
  printCart();
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let importeProducto = 0;
  let total = 0;
  for (let producto of cart) {
    if (producto.subtotalWithDiscount == null) {
      console.log("hola desde 109" ,producto);
      importeProducto = producto.price * producto.quantity;
      total = total + importeProducto;
    }else{
      importeProducto = producto.subtotalWithDiscount * producto.quantity;
      total = total + importeProducto;
    }
  }

  console.log("el total es" + total);
  let totalPrice = document.getElementById("total_price");

  totalPrice.innerHTML = total.toFixed(2);
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  //primero iteramos sobre el array cart para ver que productos tienen campo "offer"

  for (let producto of cart) {
    if (producto.offer != null) {
      //tiene campo offerta , luego puede ser que hay que apliacarle , vamos a ver el numero de prodcutos comprados
      console.log("tiene");
      if (producto.quantity >= producto.offer.number) {
        //se han comprado suficientes unidades
        producto.subtotalWithDiscount =
          producto.price * (1 - producto.offer.percent / 100);
        console.log("tienes una promo " + producto.subtotalWithDiscount);
      }
    }
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  //cuaando le das al boton de ver carrito se dispara una funcion , y esta llama a esta de aqui...

  let contenidoCart=document.getElementById("cart_list");
  contenidoCart.innerHTML="";
  
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
}

function open_modal() {
  printCart();
}
