CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers

(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

select * from burgers;