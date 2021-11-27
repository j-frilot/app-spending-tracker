const pool = require('./db/dbconfig');

const queries = {
    table: 'spending_data',
    // ALL DATA - is ordered by date in descending
    allData: (req, res) => {
        try {
            pool.query(
                "SELECT id, DATE_FORMAT(day, '%Y/%m/%d') AS Day, CONCAT('$', FORMAT(price, 2)) AS Price, item, store, category FROM spending_data ORDER BY Day DESC",
                (error, results) => {
                    if (!error) {
                        if (results.length == 1) {
                            res.json(...results);
                            res.render(...results);
                        } else {
                            res.json(results);
                        }
                    } else {
                        console.log('Query Error', error);
                    }
                }
            );
        } catch (err) {
            console.error(err.message);
        }
    },
    // GET DATA BY DATE IN ASC ORDER
    dayAsc: (req, res) => {
        try {
            pool.query(
                "SELECT id, DATE_FORMAT(day, '%Y/%m/%d') AS Day, CONCAT('$', FORMAT(price, 2)) AS Price, item, store, category FROM spending_data ORDER BY Day ASC",
                (error, results) => {
                    if (!error) {
                        if (results.length == 1) {
                            res.json(...results);
                            res.render(...results);
                        } else {
                            res.json(results);
                        }
                    } else {
                        console.log('Query Error', error);
                    }
                }
            );
        } catch (err) {
            console.error(err.message);
        }
    },
    // new data
    addData: (req, res) => {
        const day = req.body.day;
        const price = req.body.price;
        const item = req.body.item;
        const store = req.body.store;
        const category = req.body.category;
        try {
            pool.query(
                'INSERT INTO spending_data (day, price, item, store, category) VALUES (?, ?, ?, ?, ?)',
                [day, price, item, store, category],
                (error, results) => {
                    if (!error) {
                        if (results.length == 1) {
                            res.json(...results);
                            res.render(...results);
                        } else {
                            res.json(results);
                        }
                    } else {
                        console.log('Query Error', error);
                    }
                }
            );
        } catch (err) {
            console.error(err.message);
        }
    }
};

module.exports = queries;
