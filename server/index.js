const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header(
    //     'Access-Control-Allow-Headers',
    //     'Origin, X-Requested-With, Content-Type, Accept'
    // );
    next();
});

app.use('/', require('./routes'));

app.listen(PORT, () => {
    console.log(`Listenig on port ${PORT}`);
});
