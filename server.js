const express = require('express');
const app = express();

app.get('/color/:hex?/:secs?', (req, res) => {
    const hexCode = req.params.hex || '00ff00';
    const secs = req.params.secs || 3;
    setTimeout( () => {
        res.send({color: `#${hexCode}`});
    }, (secs * 1000));
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let PORT = 3000;
app.listen (PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
