const express = require('express');
const app = express();

// Используем переменную окружения PORT или, если она не задана, порт 4000
const PORT = process.env.PORT || 4000;

// Обработка корневого запроса
app.get('/', (req, res) => {
    res.send('<h1>Добро пожаловать на сервер генерации случайных чисел!</h1><p>Используйте /random для получения случайного числа.</p>');
});

// Обработка запросов на получение случайного числа
app.get('/random', (req, res) => {
    const randomValue = Math.floor(Math.random() * 37); // Генерация числа от 0 до 36 включительно
    res.json({ value: randomValue });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}. Перейдите на http://localhost:${PORT}/ для начала работы.`);
});
