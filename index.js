var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));

app.get('/', function(req, res) {
            res.send('this is the other');
        })
app.listen(3000);