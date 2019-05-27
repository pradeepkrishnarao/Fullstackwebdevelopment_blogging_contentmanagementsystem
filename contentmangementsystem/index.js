var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/cms', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

var blogRoute = require('./routes/blog');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/blogapi', blogRoute);

app.listen(8008, function () {
    console.log('The server is running at port 8008!!');
})