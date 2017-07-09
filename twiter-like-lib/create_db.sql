DROP DATABASE IF EXISTS `haptic`;
CREATE DATABASE IF NOT EXISTS `haptic`;
USE `haptic`;

CREATE TABLE IF NOT EXISTS `Users` (
    `_id` INT NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `email_id`  TEXT DEFAULT NULL UNIQUE,
    `phone_number` VARCHAR(20) DEFAULT NULL,
    `password` : VARCHAR(30) NOT NULL,
    `update_time` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ( `_id` )
);

CREATE TABLE IF NOT EXISTS `Tweets` 
(
    `_id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `tweet_text` TEXT NOT NULL,
    `update_time` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ( `_id` )
);

CREATE TABLE IF NOT EXISTS `Follow_Relationship`
(
    `follower` INT NOT NULL,
    `followed` INT NOT NULL,
    `update_time` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS `Hashtags` 
(
    `_id` INT NOT NULL,
    `tag` VARCHAR(140) NOT NULL,
    `follower_user_id` INT NOT NULL,
    `followed_user_id` INT NOT NULL,
    `update_time` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ( `_id` )
);

CREATE TABLE IF NOT EXISTS `Hashtag_Tweet_relationship`
(
    `hashtag_id` INT NOT NULL,
    `tweet_id` INT NOT NULL,
    `update_time` DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `create_time` DATETIME DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `create_tweet`(
    IN user_id INT
    , IN 
)
BEGIN
    SELECT user_id;
    END//
DELIMITER ;

use haptic;
DROP PROCEDURE IF EXISTS create_user;
DELIMITER //




CREATE DEFINER=`root`@`localhost` PROCEDURE `create_user`(
    IN `user_name` TEXT
    , IN `email_id` VARCHAR(100)
    , IN `phone_number` VARCHAR (20)
)
BEGIN

    SET @userName = ' NULL, ';
    SET @emailId = ' NULL, ';
    SET @phoneNumber = ' NULL, ';
    IF LENGTH(user_name) > 0 THEN
        SET @userName = CONCAT(' "', user_name, '", ');
    END IF;
    IF LENGTH(email_id) > 0 THEN
        SET @emailId = CONCAT(' "', email_id, '", ');
    END IF;
    IF LENGTH(phone_number) > 0 THEN
        SET @phoneNumber = CONCAT(' "', phone_number, '" ');
    END IF;

    SET @final_query = CONCAT('INSERT INTO Users (
        `name`
        , `email_id`
        , `phone_number`
    ) VALUES (', @userName, @emailId, @phoneNumber, ')');
	
--    select @final_query;
    PREPARE stmt FROM @final_query;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
    SELECT LAST_INSERT_ID() user_id
        , @userName user_name
        , @emailId email_id
        , @phoneNumber phone_number;
    END