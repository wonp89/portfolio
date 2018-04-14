var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path')

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("hello world")
})

var port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("App is running on port " + port);
});
