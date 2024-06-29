const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Добро пожаловать на сервер генерации случайных чисел!</h1><p>Используйте /random для генерации числа.</p>');
});

app.get('/random', async (req, res) => {
    try {
        // Получение текущего времени с World Time API
        const timeResponse = await axios.get('http://worldtimeapi.org/api/timezone/Etc/UTC');
        const now = new Date(timeResponse.data.utc_datetime);
        const mm = String(now.getUTCMinutes()).padStart(2, '0');
        const ss = String(now.getUTCSeconds()).padStart(2, '0');
        const hh = String(now.getUTCHours()).padStart(2, '0');
        const dd = String(now.getUTCDate()).padStart(2, '0');
        const yyyy = now.getUTCFullYear();
        const rr = Math.floor(Math.random() * 37) + 10; // Генерация числа от 10 до 46 включительно 

        const formattedOutput = `${mm}${ss}${hh}${dd}${yyyy}${rr}`;
        res.json({ value: formattedOutput });
    } catch (error) {
        console.error('Ошибка при получении данных с World Time API:', error);
        res.status(500).send('Ошибка при получении данных с World Time API');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}. Перейдите на http://localhost:${PORT}/ для начала работы.`);
});
