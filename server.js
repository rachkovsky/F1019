const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    // request to db .....

    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/api/form', (req, res) => {
    console.log(req.body);
    setTimeout(() => {
        res.send(req.body);
    }, 5000)    
   
});


app.listen(8080, () => {
    console.log('Server run on 8080 port');
});