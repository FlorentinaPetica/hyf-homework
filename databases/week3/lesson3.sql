CREATE DATABASE mealsharingDB;
use mealsharingDB;
-- creating meal table
CREATE TABLE meal (
`id` INT(10) AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(100) NOT NULL,
`description` TEXT,
`location` VARCHAR(100) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` INT(10) NOT NULL,
`price` DECIMAL(10,2) NOT NULL,
`created_date` DATE);
-- creating reservation table
CREATE TABLE reservation (
`id` INT(10) AUTO_INCREMENT PRIMARY KEY,
`number_of_guests` INT(10) NOT NULL,
`meal_id` INT(10) NOT NULL,
`created_date` DATE,
`contact_phonenumber` VARCHAR(20) NOT NULL,
`contact_name` VARCHAR(50),
`contact_email` VARCHAR(100) NOT NULL UNIQUE,
CONSTRAINT fk_reservation FOREIGN KEY (meal_id) REFERENCES meal(id)
ON DELETE CASCADE 
ON UPDATE CASCADE) ENGINE=INNODB;
-- creating review table
CREATE TABLE review (
`id` INT(10) AUTO_INCREMENT PRIMARY KEY,
`title` VARCHAR(100) NOT NULL,
`description` TEXT,
`meal_id` INT(10) NOT NULL,
`stars` INT(10),
`created_date` DATE,
CONSTRAINT fk_review FOREIGN KEY (meal_id) REFERENCES meal(id) 
ON DELETE CASCADE 
ON UPDATE CASCADE) ENGINE=INNODB;
-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('empanadas', 'baked or fried turnover consisting of pastry and filling', 'Valby', '2021-10-23 15:30:00', 20, 149.99, '2021-10-01');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('arroz con pollo', 'cannot be made without beer and annatto oil, and saffron', 'Amagerbro', '2021-10-30 12:15:00', 10, 249.99, '2021-10-02');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('greek vegetarian dishes', 'dolmades, stuffed grape leaves with a tzatziki sauce, choriatiki salad', 'Taastrup', '2021-11-01 13:45:00', 8, 200.50, '2021-10-05');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('paella', 'round grain rice, bajoqueta and tavella (varieties of green beans), peas, rabbit, chicken', 'Tune', '2021-11-07 13:00:00', 5, 250.00, '2021-10-09');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('fresh pasta', 'tomato ravioli, panna cotta', 'Hvidovre', '2021-12-03 16:45:00', 25, 299.99, '2021-10-20');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('Lebanese mezze', 'Lebanese mezze - hummus, baba ghanouj and tabbouleh', 'Avedore', '2022-01-15 16:00:00', 15, 459.99, '2021-10-05');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('Indian Lentils', 'menu includes two dishes, mixed dal, a scrumptious as well as healthy lentil curry and aloo gobi, a vegetarian dish made with potatoes, cauliflower, and Indian spices', 'Hvidovre', '2022-02-10 15:00:00', 11, 159.99, '2021-10-05');
INSERT INTO meal(`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`)
VALUES('French Quiche', 'menu includes autumn quiche and spiced poached pears', 'Glostrup', '2021-10-29 15:15:00', 9, 200.00, '2021-10-06');
-- Get a meal with any id
SELECT * FROM meal WHERE id=3;
-- Update a meal with any id
UPDATE meal 
SET location = 'Glostrup' ' Avedore'
WHERE id=5;
-- Delete a meal with any id
DELETE FROM meal
WHERE id = 5;
-- Get all reservations
SELECT * FROM reservation;
-- Add a new reservation
INSERT INTO reservation(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(30, 1, '2021-11-01', '+45 91479165', 'Maria Antoin', 'marie.antoin@gmail.com');
INSERT INTO reservation(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(10, 2, '2021-10-05', '+45 91339165', 'Andrea Johanssen', 'andrea.johansen@gmail.com');
INSERT INTO reservation(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(3, 6, '2021-10-07', '+45 91339777', 'Niklas Lyng', 'niklas.lyng@yahoo.com');
INSERT INTO reservation(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(8, 6, '2021-10-08', '+45 91989777', 'Kinga Fargas', 'kinga.fargas@yahoo.com');
INSERT INTO reservation(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(5, 4, '2021-10-15', '+45 91989888', 'Aurelia Bobu', 'aurelia.bobu@yahoo.com');
INSERT INTO reservation(`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`)
VALUES(6, 1, '2021-10-03', '+45 91789888', 'Mihaela Aura', 'mihaela.aura@hotmail.com');
-- Get a reservation with any id
SELECT * FROM reservation WHERE id=1;
-- Update a reservation with any id
UPDATE reservation 
SET number_of_guests = 5
WHERE id=1;
-- Delete a reservation with any id
DELETE FROM reservation
WHERE id = 1;
-- Get all reviews
SELECT * FROM review;
-- Add a new review
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES('warm and welcoming', 'Cinzia gave a great explanation of the different foods, great instructions and was also warm and welcoming from her kitchen.', 4, 5, '2021-10-10');
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES('very flexible', 'Cinzia helped guide me and my friends on a very fun, very flexible, and very delicious video cooking adventure!', 3, 4, '2021-11-02');
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES('lovely', 'We felt like in Paris, cooking all together and chatting. Lovely!', 7, 5, '2021-10-30');
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES('highly recommend', ' Highly recommend her, and we look forward to cooking with her!', 2, 4, '2021-11-05');
INSERT INTO review(`title`, `description`, `meal_id`, `stars`, `created_date`)
VALUES('Slow service!', 'Nice location by the clay pit park and nice food, but it took 50 minutes from we ordered the food until it arrived', 2, 2, '2021-11-08');
-- Get a review with any id
SELECT * FROM review WHERE id=2;
-- Update a review with any id
UPDATE review 
SET meal_id = 2
WHERE id=2;
-- Delete a review with any id
DELETE FROM review
WHERE id = 1;
-- Get meals that has a price smaller than a specific price
SELECT * FROM meal
WHERE price > 250.00;
-- Get meals that still has available reservations
-- use of IS NULL to find also the meals that no reservations where made for, so they are fully available
SELECT meal.id, meal.title, meal.max_reservations, SUM(reservation.number_of_guests) as reserved
FROM meal
LEFT JOIN reservation 
ON reservation.meal_id = meal.id
WHERE (max_reservations - number_of_guests > 0) OR number_of_guests IS NULL
GROUP BY id;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE title LIKE '%le%';
-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE month(created_date) BETWEEN 07 AND 10;
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
ORDER BY id LIMIT 2, 5;
-- Get the meals that have good reviews
SELECT review.*, meal.title as meal_type FROM review
LEFT JOIN meal ON meal_id = meal.id
WHERE stars >= 4
ORDER BY stars DESC;
-- Get reservations for a specific meal sorted by created_date
SELECT reservation.*, meal.title, meal.max_reservations FROM reservation 
LEFT JOIN meal ON meal_id = meal.id
WHERE meal_id=6
ORDER BY created_date DESC; 
-- Sort all meals by average number of stars in the reviews
SELECT meal_id, meal.title, AVG(stars) as 'Average Stars'
FROM review
LEFT JOIN meal ON meal_id = meal.id
GROUP BY meal_id;