const express = require('express');
const router = express.Router();
const queries = require('./queries');

router.get('/api/allData', queries.allData); //  ALL DATA - is ordered by date in descending
router.get('/api/dayasc', queries.dayAsc); // ordered by date in ascending order

//ROUTE FOR ADDING DATA
router.post('/api/addData', queries.addData);

module.exports = router;
