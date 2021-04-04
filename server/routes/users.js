const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const dbutils = require('../dbutil');

router.post('/create', async function (req, res, next) {
	const data = req.body;
	await dbutils.Users.create(data).then(response => {
		res.status(201).send(`New user created: ${JSON.stringify(response)}`);
	}).catch(error => {
		console.error(error);
		res.status(500).send(error);
	});
});

router.get('/getAll', async function (req, res, next) {
	dbutils.Users.getAll().then(users => {
		res.send(users);
	}).catch(error => {
		res.status(500).render('error');
	});
});

router.get('/get', async function(req, res, next) {
	const uID = req.query.uID;
	if (uID) {
		dbutils.Users.get(uID).then(user => {
			res.status(200).send(user);
		}).catch(error => {
			console.error(error);
			res.status(500).send(error);
		});
	} else {
		res.status(400).send("No uID specified");
	}
});

module.exports = router;

