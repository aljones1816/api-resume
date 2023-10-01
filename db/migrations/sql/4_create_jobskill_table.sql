CREATE TABLE jobskills (
    job_skill_id serial PRIMARY KEY,
    job_id INT REFERENCES experience(id),
    skill_id INT REFERENCES skills(id)
);