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
	// mongodb collecting the quotes and translate it to array
	db.collection('quotes').find().toArray((err, result) => {
		if (err) return console.log(err)
		// render index ejs
		res.render('index.ejs', {quotes: result})
	})
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').find().toArray(function(err, result) {
		console.log(result)
	})

	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log("saved to database")
	res.redirect('/')
	})
})