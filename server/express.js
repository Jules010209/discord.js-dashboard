const express = require('express');
const app = express();
const path = require('path');

const { port } = require('./config.json');

const routes = require('./index.r.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/')));

app.use('/', routes);

app.listen(port, async () => {
    console.log(`DASHBOARD IN http://localhost:${port}/?graphType=graph?theme=dark-mode?`);
});