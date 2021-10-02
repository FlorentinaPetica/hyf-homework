-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.name, user.email, task.title
FROM task
JOIN user_task
ON task.id = user_task.task_id
JOIN user 
ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com%';
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name, task.title, task.status_id
FROM task
JOIN user_task
ON task.id = user_task.task_id
JOIN status
ON task.status_id = status.id
JOIN user 
ON user.id = user_task.user_id
WHERE user.name LIKE 'Donald Duck' AND status.name = 'Not started';
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.name, task.title, task.created
FROM task
JOIN user_task
ON task.id = user_task.task_id
JOIN user 
ON user.id = user_task.user_id
WHERE user.name LIKE 'Maryrose Meadows' AND MONTH(created)=09;
-- Find how many tasks where created in each month,
SELECT COUNT(id) as nrOfMonthlyTasks FROM task
GROUP BY MONTH(created);