function calculateTax() {
    // Получаем введенную цену автомобиля
    let price = document.getElementById("tax-price").value;
    let taxRate = 0;

    // Условия для расчета налоговой ставки
    if (price > 10000) {
        taxRate = 0.25;
    } else if (price >= 5000 && price <= 10000) {
        taxRate = 0.20;
    } else {
        taxRate = 0.15;
    }

    // Вычисляем налог
    let taxAmount = price * taxRate;
    let totalPrice = parseFloat(price) + taxAmount;

    // Выводим результат
    document.getElementById("tax-result").innerHTML = `Tax: $${taxAmount.toFixed(2)} <br> Total Price with Tax: $${totalPrice.toFixed(2)}`;
}
