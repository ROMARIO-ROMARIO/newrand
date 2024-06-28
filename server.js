const express = require('express');
const app = express();

// Используем переменную окружения PORT или, если она не задана, порт 4000
const PORT = process.env.PORT || 4000;

app.get('/random', (req, res) => {
    const randomValue = Math.floor(Math.random() * 37); // Генерация числа от 0 до 36 включительно
    res.json({ value: randomValue });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});