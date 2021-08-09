const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});

app.set('view engine', 'nunjucks');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index.html', {})

});

app.listen(3000);