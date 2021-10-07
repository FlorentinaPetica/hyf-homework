-- Add a task with these attributes
SELECT * FROM task;
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("Pick up books", "Go to the library and pick up some books", '2021-06-23 23:01:16', '2021-09-23 23:01:16', '2021-11-23 23:01:16', 2, 8);
-- Change the title of a task
UPDATE task
SET title='Clean the house'
WHERE id=7;
-- Change a task due date
UPDATE task
SET due_date='2021-12-25 00:01:00'
WHERE id=7;
-- Change a task status
UPDATE task
SET status_id=1
WHERE id=7;
-- Mark a task as complete
UPDATE task
SET status_id=3
WHERE id=6;
-- Delete a task
DELETE FROM task WHERE id=11;