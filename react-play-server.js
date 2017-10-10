/**
 * Created by jeffersonwu on 10/9/17.
 * ES6 Syntax basic server.
 */

// EXPRESS
const express           = require('express');
const app               = express();
const http              = require('http').Server(app);

// UTILITIES
const chalk             = require('chalk');
const clear             = require('clear');

// CUSTOM MODULES
const promise_db        = require('./reactbook/models/promise-db');

// CONFIG
const port = process.env.PORT || 3000;


// MIDDLEWARE
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'GO Team');
    next();
});

app.use((req, res, next) => {
    console.log(`${new Date()} ${req.method} ${req.ip} ${req.url}`);
    console.log(`Browser default language: ${chalk.green(req.headers['accept-language'])}`);
    next();
});

app.get('/', (req, res) => {
    res.status(200);
    res.send({status: 'success', payload: {message: 'Root route hit.'}});
});

app.get('/promise', (req, res) => {
    promise_db.timed_promise_gen(10, 3000).then((val) => {

        res.status(200);
        console.log(val);
        res.json(val);

    }).catch((reason) => {

        res.status(200);
        console.log(reason);
        res.json(reason);
    });

});

// CATCHALL
app.use(express.static('reactbook/public/'));

// 404
app.use((req, res, next) => {
    res.status(404);
    res.send('404: Page not found!');
});

app.use((req, res, next) => {
    res.status(500);
    res.render('500: Server error!');
});

http.listen(port, (err) => {
    if (err) {
        console.log(Error(`Error: ${err}`));
    } else {
        clear();
        console.log(chalk.yellow(`React-Play Server started on ${port}`));
    }
});


