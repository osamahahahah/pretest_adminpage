const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const db = require("./models");
const routes = require('./routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/main');


app.use('/', routes);




db.sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil.');
        return db.sequelize.sync();
    })
    .then(() => {
        console.log('Database siap digunakan.');
    })
    .catch(err => {
        console.error('Error:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
