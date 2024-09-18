// Lista de productos
const products = [
    { id: 1, name: "Crema Aceite de Oliva", price: 10.00, image: "img/producto1.jpg" },
    { id: 2, name: "Aceite de Almendras", price: 15.00, image: "img/producto2.jpg" },
    { id: 3, name: "Aloe Vera", price: 10.00, image: "img/producto3.jpg" },
    { id: 4, name: "Manteca de Karité", price: 15.00, image: "img/producto4.jpg" }
  ];
  
  // Carrito de compras
  let cart = [];
  
  // Función para mostrar los productos
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productCard = `
        <div class="col-md-3">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price.toFixed(2)}&euro;</p>
              <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
          </div>
        </div>
      `;
      productList.innerHTML += productCard;
    });
  }
  
  // Función para añadir productos al carrito
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} ha sido añadido al carrito.`);
  }
  
  // Función para actualizar el conteo del carrito
  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = `(${cart.length})`;
  }
  
  // Ejecutar la función para mostrar los productos al cargar la página
  window.onload = displayProducts;