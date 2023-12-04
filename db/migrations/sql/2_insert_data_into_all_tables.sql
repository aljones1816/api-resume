-- populate work experience
INSERT INTO experience (employer, role, start_date, end_date, location, description) VALUES
  (
    'DNV',
    'ETL Developer',
    '2019-01-01',
    '2021-12-01',
    'Portland, ME',
    'Collaborated on the design and development of an Azure-based data warehousing solution for the MassSaveData analytics platform, integrating data from multiple Massachusetts energy utilities to support a public energy efficiency dashboard and fulfill stakeholder data requests.\nPlayed a key role in modernizing data processing workflows, shifting from manual Excel and SAS methods to an automated ETL framework using Python and PySpark, which reduced data intake and processing time from three months to three weeks.'
  ),
  (
    'IDEXX',
    'Junior Software Engineer - Data Platform and API development',
    '2021-12-01',
    '2023-02-01',
    'Westbrook, ME',
    'Developed Proof of Concept for an internal tool, transitioning from a Google form to a robust client- application built in React with a Firebase backend, demonstrating capabilities in full stack development and cloud services.\nStreamlined ETL pipeline development for Snowflake migration by crafting Python scripts to auto-generate boilerplate code, leveraging system metadata to enhance development efficiency and accuracy.\nAutomated DDL and DML script generation for urgent data pipeline reconfigurations, using Python to compress a two-month manual process into less than two weeks, instrumental in avoiding >$1 million in licensing fees.'
  ),
  (
    'IDEXX',
    'Software Engineer - Data Platform and API Development',
    '2023-02-01',
    NULL,
    'Westbrook, ME',
    'Orchestrated the architectural redesign for critical data pipelines during the migration from a legacy on-prem data warehouse to Snowflake, leveraging columnar storage optimization and streamlined query performance, which significantly boosted data processing efficiency.\nSpearheaded the shift to code-centric ELT practices, evaluating tools, leading PoC development, and driving the integration of open-source solutions like DBT Core and Airflow, achieving cost savings and enhancing platform flexibility and maintainability.\nCo-developed and implemented a CI/CD pipeline, proposing and incorporating Docker for service isolation and using Jenkins for build automation, resulting in more frequent releases and improved operational stability.\nIndependently streamlined an intensive data-extraction process with Python, cutting down processing time from days to hours through parallel processing techniques.'
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
INSERT INTO about (name, location, email, portfolio, github, linkedin, objective) VALUES
    (
        'Alan Jones',
        'Portland, Maine',
        'me@alanjones.dev',
        'https://alanjones.dev',
        'https://github.com/aljones1816',
        'https://www.linkedin.com/in/almjones/',
        'Experienced Data Engineer transitioning to Full Stack Software Engineering with a solid track record in backend development, CI/CD integration, and front-end design. Eager to apply 4+ years of software engineering skills to build seamless, engaging user experiences.'
    );

-- populate user messages table
INSERT INTO messages (email, message) VALUES
    (
        'test@email.com',
        'This is an example of a user-submitted message!'
    );