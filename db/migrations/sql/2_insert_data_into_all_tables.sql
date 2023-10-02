-- populate work experience
INSERT INTO experience (employer, role, start_date, end_date, location, description) VALUES
  (
    'DNV',
    'ETL Developer',
    '2019-01-01',
    '2021-12-01',
    'Portland, ME',
    'Transformed manual, Excel-based ETL processes into streamlined cloud pipelines using Azure Data Factory and Databricks, showcasing adaptability in adopting modern cloud technologies.\nLeveraged Python and SQL for data cleaning and analysis on extensive datasets, demonstrating proficiency in scripting and data manipulation - skills readily applicable to backend web development tasks.'
  ),
  (
    'IDEXX',
    'Junior Software Engineer - Data Platform and API development',
    '2021-12-01',
    '2023-02-01',
    'Westbrook, ME',
    'Designed and developed fault-tolerant ETL pipelines using Python and shell scripting, demonstrating proficiency in coding practices and automation.\nIndependently optimized intensive data-extraction process to reduce processing time from days to hours using Python and parallel processing techniques.\nAnalyzed and optimized SQL queries through strategic indexing and field selection for enhanced performance.\nPerformed research and design documentation for significant components of data platform architecture, including data flow, processing, and integration.'
  ),
  (
    'IDEXX',
    'Software Engineer - Data Platform and API Development',
    '2023-02-01',
    NULL,
    'Westbrook, ME',
    'Led transition from on-premise data infrastructure to cloud stack, replacing legacy ETL tooling with code-based infrastructure including Airflow, DBT, Snowflake, and Python.\nOwned modernization of continuous integration platform, including containerization of microservices using Docker and automation of build pipelines with Jenkins.\nRapidly reconfigured dozens of data pipelines using Python in time-critical effort, slashing 2 months of manual work.\nEngaged with data engineers and data users to find pain points and showcased solutions leveraging modern tooling like Flyway and DBT in live demos, displaying effective communication around user needs.\nBuilt and deployed custom serverless functions using AWS Lambda, delivering tailored solutions to meet stakeholder''s needs.'
  );

-- populate education table

INSERT INTO education (school, degree, gpa, start_date, end_date) VALUES
    (
        'University of New Hampshire',
        'Bachelor of Science Geology',
        3.77,
        '2012-08-29',
        '2015-06-15'
    ),
    (
        'University of California Santa Barbara',
        'Master of Science in Earth Science',
        3.87,
        '2015-08-28',
        '2017-05-28'
    );

-- populate skills table
INSERT INTO skills (skill, years_exp) VALUES
    (
        'Javascript',
        5
    ),
    (
        'Typescript',
        3
    ),
    (
        'React',
        3
    ),
    (
        'git',
        5
    ),
    (
        'Python',
        5
    ),
    (
        'SQL',
        5
    ),
    (
        'RESTful APIs',
        3
    ),
    (
        'PostgreSQL',
        3
    );

-- populate projects table
INSERT INTO projects (name, url, repo, description, date) VALUES
    (
        'CicoBuddy',
        'https://cico-buddy.com',
        'https://github.com/aljones1816/cico-buddy',
        'Independently conceived, designed, and continue to maintain a full-stack web application built with React, Express and Node.js, and MongoDB/Mongoose, all written in TypeScript, showcasing end-to-end development capabilities.\nImplemented secure user authentication by integrating JSON Web Tokens (JWT), enhancing application security. Additionally, integrated a RESTful API, enabling users to perform Create, Read, Update, and Delete (CRUD) operations, underlining my proficiency in building dynamic user interactions.\nCrafted a responsive, mobile-first client application that prioritizes usability across devices and screen sizes. Employed customized Chakra UI components and employed custom React hooks, demonstrating my focus on delivering a visually appealing and user-friendly frontend experience.',
        '2023-01-01'
    );

-- populate about me table
INSERT INTO about (name, location, email, github, linkedin, objective) VALUES
    (
        'Alan Jones',
        'Portland, Maine',
        'me@alanjones.dev',
        'https://github.com/aljones1816',
        'https://www.linkedin.com/in/almjones/',
        'Results-driven engineer with a proven track record of building scalable, maintainable data infrastructure seeking to transition my strong foundation in modern software development into front-end and back-end engineering to deliver exceptional user experiences.'
    );

-- populate user messages table
INSERT INTO messages (email, message) VALUES
    (
        'test@email.com',
        'This is an example of a user-submitted message!'
    );