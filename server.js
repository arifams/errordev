'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

var db

// mongodb://<dbuser>:<dbpassword>@ds129593.mlab.com:29593/errordev_db
MongoClient.connect('mongodb://errordev:123errordev@ds129593.mlab.com:29593/errordev_db', (err, database) => {
	// start the server at mongolab
	if (err) return console.log(err)
	db = database
	app.listen(3000, () => {
		console.log('listening on port 3000')
	})


})

app.use(bodyParser.urlencoded({extended: true}))

// routing app.get(path, callback);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/view/index.html')
	var cursor = db.collection('quotes').find()
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log("saved to database")
	res.redirect('/')
	})
})