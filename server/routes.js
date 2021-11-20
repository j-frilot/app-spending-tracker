const express = require('express');
const router = express.Router();
const queries = require('./queries');

router.get('/api/allData', queries.allData);
router.get('/api/dayAsc', queries.dayAsc);
router.get('/api/dayDesc', queries.dayDesc);

module.exports = router;
