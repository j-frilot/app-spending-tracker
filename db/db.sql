DROP DATABASE spending_log;

CREATE DATABASE spending_log;

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
VALUES('2021-11-02', '22.99', 'television', 'walmart', 'personal'),
      ('2021-11-05', '35.00', 'gas', 'shell', 'gas');