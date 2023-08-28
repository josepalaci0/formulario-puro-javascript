const express = require('express');
const path = require('path');

// Rutas
const {usersRouter} = require('./routes/user.routers');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'src', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'register.html'));
});



app.use('/api/v1/users',usersRouter);



module.exports = {app};
