const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Fiap Cloud Node APP Deploy!</h1>");
});

const port = process.env.port || 8081;
app.listen(port, () => {
    console.log('App is running on port 8081');
});
