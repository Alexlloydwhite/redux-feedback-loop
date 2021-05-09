const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    // assigning req body for reabability 
    const feedback = req.body;
    console.log(req.body);
    // sql query to send to db
    const sqlText = `INSERT INTO feedback(feeling, understanding, support, comments)
                        VALUES($1,$2,$3,$4);`;
    // Sending query to the db
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(result => {
            console.log('added feedback to db:', feedback);
            res.sendStatus(201);
        })
        .catch( error => {
            console.log(`error making db query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;