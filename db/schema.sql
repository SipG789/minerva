drop database if exists inventory_db;
create database inventory_db;

use inventory_db;

CREATE TABLE items(
  id INTEGER NOT NULL,
  item_name VARCHAR(30),
  item_description TEXT,
  price DECIMAL(10,2),
  in_stock BOOLEAN 
);

create table catergories(
    id INTEGER NOT NULL,
    category_name VARCHAR(30),
);