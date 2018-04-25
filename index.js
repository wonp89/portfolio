var express = require('express');
var bodyParser = require('body-parser');
// var logger = require('morgan');
var path = require('path')

var app = express();

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')))
app.get("/", function (req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
  });
  
var port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("App is running on port " + port);
});
