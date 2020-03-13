const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf```
 */
router.get('/', (req, res) => {
    res.sendStatus(200); // For testing only, can be removed
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('req.user:', req.user);
    if(req.isAuthenticated()){
        queryString = ('INSERT into "item"(description, image_url) VALUES($1, $2)')
        pool.query(queryString, [req.body.description, req.body.image_url])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
    }else{
        res.sendStatus(403);
    }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log('req.user:', req.user);
    if(req.isAuthenticated()){
        queryString = (`DELETE from "item" WHERE "item"."user_id" = '${req.user.id}';`)
        pool.query(queryString, [req.body.description, req.body.image_url])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
    }else{
        res.sendStatus(403);
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;