var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));

var people = [
    {
    name:'Stephen',
    age: 10
    },
    {
        name:'Lin',
        age:2
    }
]
app.get('/', function(req, res) {
            res.json(people);
        })
app.listen(3000);