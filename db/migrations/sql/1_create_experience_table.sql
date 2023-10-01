CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    employer VARCHAR(255),
    role VARCHAR(255),
    start_date DATE,
    end_date DATE,
    location VARCHAR(255),
    description VARCHAR(2000)
);