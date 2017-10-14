var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var users = [
    {
        id: 1,
        firstName: "Jone",
        lastName: "Z"
    },
    {
        id: 2,
        firstName: "Jill",
        lastName: "Z"
    },
    {
        id: 3,
        firstName: "Susan",
        lastName: "Z"
    }
]
app.get('/', function (req, res) {
    res.render('index', {
        title: 'name',
        users: users
    });
})

app.post('/users/add', function(req, res) {

    var result = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    console.log(result);
    res.redirect('/complete');
    
})
app.listen(3000);