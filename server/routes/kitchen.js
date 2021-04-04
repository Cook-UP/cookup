const express = require('express');
const router = express.Router();
const Kitchen = require('../models/kitchenModel');
const dbutils = require('../dbutil');

//Create a new kitchen
router.post('/create', async function (req, res, next) {
	const uID = req.query.uID;
	console.log(uID);
	const data = req.body;
	console.log(data);
	if (uID) {
		dbutils.Kitchen.create(uID, data).then(result => {
			res.status(201).send(result);
		}).catch(error => {
			console.log(error);
			res.status(500).send(error);//render('error');
		});
	} else {
        res.status(400).send("No uID specified");
    }
});


//Get all kitchens
router.get('/getAll', async function(req, res, next) {
	await Kitchen.find()
	.then(kitchens => {
		res.status(200).send(kitchens);
	}).catch(error => {
		console.log(error);
		res.status(500).send(error);
	});
});

module.exports = router;

