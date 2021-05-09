const express = require('express');
const router = express.Router();
const dbutils = require('../dbutil');


router.post('/create', async function (req, res, next) {
	// const kID = req.query.kID;
	const data = req.body;

	// if (kID) {
		await dbutils.Orders.create(data).then(result => {
			res.status(201).send(`New order created: ${JSON.stringify(result)}`);
		}).catch(error => {
            console.error(error);
			res.status(500).send(error);
		});
	// } else {
    //     res.status(400).send("No kID specified");
    // // }
});

router.get('/getAll', async function(req,res,next) {
    dbutils.Orders.getAll().then(orders => {
        res.status(200).send(orders);
    }).catch(error => {
        console.error(error);
        res.status(500).render('error');
    });
});

module.exports = router;

