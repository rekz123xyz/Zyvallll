let cart = JSON.parse(localStorage.getItem("cart")) || [];

function buy(name, price) {
  cart.push({ name: name, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " ditambahkan ke keranjang 🛒");
}