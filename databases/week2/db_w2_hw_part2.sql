-- Create a new database 
CREATE DATABASE schoolDB;
-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE class (
    `id` INT(10) AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins` DATE,
    `ends` DATE
);
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE student (
    `id` INT(10) AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `phone` INT(15) NOT NULL UNIQUE,
    `class_id` INT(10),
    FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE
);
-- Create an index on the name column of the student table
CREATE UNIQUE INDEX idx_student
ON student (name);
--Add a new column to the class table named status which can only have the following values: 
--not-started, ongoing, finished (hint: enumerations)
ALTER TABLE class
ADD `status` ENUM('not-started', 'ongoing', 'finished');
INSERT INTO class (name, begins, ends)
VALUES ("class17", '2020-12-15', '2021-03-15');
INSERT INTO class (name, begins, ends)
VALUES ("class18", '2021-03-16', '2021-06-16');
INSERT INTO class (name, begins, ends)
VALUES ("class19", '2021-06-17', '2022-02-17');
INSERT INTO class (name, begins, ends)
VALUES ("class20", '2021-09-26', '2022-05-26');