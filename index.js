const express = require('express');
const app = express();

const http = require('http');
const fs = require('fs');

app.get('/', function (req, res) {


    res.sendFile('/angular.html', { root: __dirname });

});

app.get('/user', function (req, res) {

    res.sendFile('/user.json', { root: __dirname });

});


app.get('/about', function (req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.get('/file', function (req, res) {

    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

});

app.listen(process.env.PORT || 8888, function () {
    console.log('Listening on port 8888');
});