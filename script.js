// Отримуємо елементи
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCartBtn");

// Відкриваємо модальне вікно при натисканні на кнопку корзини
cartBtn.onclick = function() {
    cartModal.style.display = "flex";
}

// Закриваємо модальне вікно при натисканні на кнопку закриття
closeCartBtn.onclick = function() {
    cartModal.style.display = "none";
}

// Закриваємо модальне вікно, якщо користувач натискає поза модальним вікном
window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}







// Отримуємо посилання на корзину і модальне вікно
const caкtModal = document.getElementById("cartModal");
const cartItemsContainer = document.querySelector(".cart-items"); // контейнер для товарів у корзині
const cartTotal = document.querySelector(".cart-total p"); // елемент для загальної суми

// Масив для зберігання товарів у корзині
let cart = [];

// Функція для оновлення корзини
function updateCart() {
    // Очищаємо контейнер
    cartItemsContainer.innerHTML = '';

    // Перебираємо всі товари в корзині і додаємо їх в HTML
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>Ціна: $${item.price}</p>
            </div>
            <button class="remove-btn" data-product-id="${item.id}">Видалити</button>
        `;
        
        cartItemsContainer.appendChild(cartItemElement);
    });

    // Оновлюємо загальну суму
    let total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartTotal.textContent = `Загальна сума: $${total.toFixed(2)}`;

    // Додаємо події для кнопок видалення
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            removeFromCart(productId);
        });
    });
}

// Функція для додавання товару в корзину
function addToCart(name, price, image) {
    const productId = new Date().getTime(); // унікальний ідентифікатор товару
    cart.push({
        id: productId,
        name: name,
        price: price,
        image: image
    });
    updateCart(); // оновлюємо корзину після додавання товару
}

// Функція для видалення товару з корзини
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart(); // оновлюємо корзину після видалення товару
}

// Додаємо подію для кнопок "Купити"
document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product-name');
        const productPrice = this.getAttribute('data-product-price');
        const productImage = this.closest('.gallery-item').querySelector('img').src;
        
        addToCart(productName, productPrice, productImage); // додаємо товар в корзину
    });
});

// Відкриваємо корзину при натисканні на кнопку корзини
document.getElementById("cartBtn").onclick = function() {
    cartModal.style.display = "flex";
}

// Закриваємо корзину
document.getElementById("closeCartBtn").onclick = function() {
    cartModal.style.display = "none";
}

// Закриваємо корзину, якщо натискаємо поза модальним вікном
window.onclick = function(event) {
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}
