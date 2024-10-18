// Функция для сортировки чисел
function sortNumbers(event) {
    event.preventDefault();  // Предотвращаем перезагрузку страницы

    // Получаем значения из формы
    const numbersInput = document.getElementById('numbersInput').value;
    const sortOrder = document.getElementById('sortOrder').value;
    const inputError = document.getElementById('inputError');
    const sortedNumbersDisplay = document.getElementById('sortedNumbers');
    
    // Очищаем возможные предыдущие ошибки
    inputError.textContent = '';
    sortedNumbersDisplay.textContent = '';

    // Валидация: проверяем, что введены только числа, разделённые запятыми
    const numbersArray = numbersInput.split(',').map(num => num.trim());  // Разделяем числа и удаляем пробелы
    if (!validateInput(numbersArray)) {
        inputError.textContent = 'Please enter a valid sequence of numbers separated by commas.';
        return;
    }

    // Преобразуем строки в числа
    const validNumbersArray = numbersArray.map(Number);

    // Сортируем числа
    if (sortOrder === 'asc') {
        validNumbersArray.sort((a, b) => a - b);
    } else {
        validNumbersArray.sort((a, b) => b - a);
    }

    // Отображаем отсортированные числа
    sortedNumbersDisplay.textContent = validNumbersArray.join(', ');
}

// Функция валидации ввода
function validateInput(numbersArray) {
    return numbersArray.every(num => !isNaN(num) && num !== '');
}

// Привязываем событие на форму
document.getElementById('sortingForm').addEventListener('submit', sortNumbers);
