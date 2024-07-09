const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Указываем Express использовать папку 'public' для статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Обработка запроса на корневой URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
