const express = require('express');
const app = express();


app.get('/color/:hex?/:secs?', (req, res) => {
    const hexCode = req.params.hex || '00ff00';
    const secs = req.params.secs || 3;
    setTimeout( () => {
        res.send({color: `#${hexCode}`});
    }, (secs * 1000));
});


app.get('/callback', (req, res) => {
    res.sendFile(__dirname + '/views/callback.html');
});

app.get('/promise', (req, res) => {
    res.sendFile(__dirname + '/views/promise.html');
});

app.get('/await', (req, res) => {
    res.sendFile(__dirname + '/views/await.html');
});

app.get('/callback/crazy', (req, res) => {
    res.sendFile(__dirname + '/views/callback-crazy.html');
});

app.get('/promise/crazy', (req, res) => {
    res.sendFile(__dirname + '/views/promise-crazy.html');
});

app.get('/await/crazy', (req, res) => {
    res.sendFile(__dirname + '/views/await-crazy.html');
});

app.get('/await/warning', (req, res) => {
    res.sendFile(__dirname + '/views/await-warning.html');
});

app.get('*', (req, res) => {
    res.status(404).send();
});

let PORT = 3000;
app.listen (PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
