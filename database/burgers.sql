DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devour BOOL DEFAULT false, 
    PRIMARY KEY (id)
);
SELECT * FROM burgers;