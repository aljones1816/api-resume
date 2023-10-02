-- job experience table
CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    employer VARCHAR(255),
    role VARCHAR(255),
    start_date DATE,
    end_date DATE,
    location VARCHAR(255),
    description VARCHAR(2000)
);

-- education table
CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    school VARCHAR(255),
    degree VARCHAR(255),
    gpa NUMERIC(3,2),
    start_date DATE,
    end_date DATE
);

-- skills table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    skill VARCHAR(255),
    years_exp SMALLINT
);

-- jobskills intermediary join table
CREATE TABLE jobskills (
    job_skill_id serial PRIMARY KEY,
    job_id INT REFERENCES experience(id),
    skill_id INT REFERENCES skills(id)
);

--projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    url VARCHAR(255),
    repo VARCHAR(255),
    description VARCHAR(2000),
    date DATE
);

-- about me table
CREATE TABLE about (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    location VARCHAR(50),
    email VARCHAR(50),
    github VARCHAR(50),
    linkedin VARCHAR(50),
    objective VARCHAR(2000)
);

-- user messages table
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    message VARCHAR(560)
);