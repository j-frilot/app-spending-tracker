DROP DATABASE spending_log;

CREATE DATABASE spending_log;

DROP TABLE spending_data;
CREATE TABLE spending_data(
  id TINYINT NOT NULL AUTO_INCREMENT,
  day DATE,
  price FLOAT(7, 2),
  item  VARCHAR(255),
  store VARCHAR(255),
  category VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO spending_data(day, price, item, store, category)
VALUES
      ('2021-11-02', '22.99', 'television',   'walmart',    'personal'),
      ('2021-11-05', '35.00', 'gas',          'shell',      'gas'),
      ('2020-10-30', '50.00', 'costume',      'party city', 'personal'),
      ('2021-09-01', '350',   'lawn mower',   'home depot', 'house stuff'),
      ('2019-11-02', '140',   'grroceries',   'walmart',    'personal'),
      ('2014-11-05', '25.00', 'gas',          'chevron',    'gas'),
      ('2021-11-11', '35.00', 'drinks',       'party',      'personal'),
      ('2020-04-14', '79',    'summer stuff', 'the mall',   'house stuff');