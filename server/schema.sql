CREATE DATABASE chat;

USE chat;


    
CREATE TABLE `messages` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(40) NULL DEFAULT NULL,
  `room` VARCHAR(40) NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);


    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(40) NULL DEFAULT NULL,
  `messages` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
  -- CONSTRAINT fk_PerOrders FOREIGN KEY (`id`) REFERENCES `messages`(`id`) 
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

