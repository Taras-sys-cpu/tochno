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
