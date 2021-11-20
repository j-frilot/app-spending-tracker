const pool = require('./db/dbconfig');

const queries = {
    table: 'spending_data',
    // ALL DATA
    allData: (req, res) => {
        try {
            pool.query('SELECT * FROM spending_data', (error, results) => {
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
            });
        } catch (err) {
            console.error(err.message);
        }
    },
    // GET DATA BY DATE IN ASC ORDER
    dayAsc: (req, res) => {
        try {
            pool.query(
                'SELECT * FROM spending_data ORDER BY day ASC',
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
    // order by date in descending order
    dayDesc: (req, res) => {
        try {
            pool.query(
                'SELECT * FROM spending_data ORDER BY day DESC',
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
