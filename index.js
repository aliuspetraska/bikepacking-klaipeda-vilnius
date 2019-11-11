const rateLimit = require('express-rate-limit');
const secure = require('express-secure-only');
const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const path = require('path');
const cors = require('cors');

const app = express();

app.enable('strict routing');
app.enable('trust proxy');

if (process.env.NODE_ENV === 'production') {
    app.use(secure());
}

app.use(cors());
app.use(helmet({ frameguard: false }));
app.use(compression());
app.use(
    rateLimit({
        windowMs: 60000,
        max: 0,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
    console.log('Works!');
});
