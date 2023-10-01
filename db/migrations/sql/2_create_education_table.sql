CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    school VARCHAR(255),
    degree VARCHAR(255),
    gpa NUMERIC(3,2),
    start_date DATE,
    end_date DATE
)