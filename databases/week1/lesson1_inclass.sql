-- class exercises 
-- Select the names and phones of all users
SELECT name, phone FROM user;

-- Select the name of the user with id=10
SELECT name FROM user WHERE id = 10;

-- Find how many users exist in the database
SELECT COUNT(name) FROM user;

-- Select the names of the first 5 users in the database
SELECT name FROM user WHERE id < 6;

SELECT name FROM user WHERE id BETWEEN 1 AND 5;

SELECT name FROM user LIMIT 5;

-- Select the names of the last 3 users in the database
SELECT name, id FROM user ORDER BY id DESC LIMIT 3;

-- Sum all the ids in the user table
SELECT SUM(id) as sum FROM user;

-- Select all users and order them alphabetically by name
SELECT * FROM user ORDER BY name;

-- Find all tasks that include SQL either on the title or on the description
SELECT title, description FROM task WHERE title LIKE '%sql%' OR description LIKE '%sql%';

-- Find the title of all tasks that the user Maryrose is responsible for

SELECT title, description FROM task WHERE user_id = (SELECT id FROM user WHERE name LIKE "%Maryrose%");

-- Find how many tasks each user is responsible for
SELECT user_id, COUNT(*) as nrOfTask, (SELECT name FROM user WHERE id = user_id) FROM task GROUP BY user_id;

-- Find how many tasks with a status=Done each user is responsible for
SELECT user_id, COUNT(*) as done FROM task WHERE status_id = (SELECT id FROM status WHERE name LIKE '%done%') GROUP BY user_id;