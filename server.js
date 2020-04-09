const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./dist/test'));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/test/index.html'));
});


app.post('/api/form', (req, res) => {
    console.log(req.body);
    setTimeout(() => {
        res.json('response from server');
    }, 1000)    
});


app.listen(8080, () => {
    console.log('Server run on 8080 port');
});