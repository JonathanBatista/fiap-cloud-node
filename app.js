const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Fiap Cloud Node APP Deploy!</h1>");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('App is running on port 3000');
});
