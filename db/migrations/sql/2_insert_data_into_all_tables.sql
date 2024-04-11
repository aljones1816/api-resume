-- populate work experience
INSERT INTO experience (employer, role, start_date, end_date, location, description) VALUES
  (
    'DNV',
    'ETL Developer',
    '2019-01-01',
    '2021-12-01',
    'Portland, ME',
    'Collaborated on the design and development of an Azure-based data warehousing solution for the MassSaveData analytics platform.\nPlayed a key role in modernizing ELT workflows, shifting from manual Excel and SAS methods to an automated Python-based framework, reducing data intake and processing time by 75%.'
  ),
  (
    'IDEXX',
    'Junior Software Engineer - Data Platform and API development',
    '2021-12-01',
    '2023-02-01',
    'Remote, ME',
    'Developed Proof of Concept for an internal reporting tool, transitioning from a Google form to a robust client-application built in React with a Firebase backend.\nEngineered a CI/CD pipeline utilizing Python, Docker, and GitHub Actions, transitioning to a services
architecture that enhanced deployment speed and operational stability.\nAutomated DDL and DML script generation for urgent data pipeline reconfigurations with Python,
compressing a two-month manual process into less than two weeks, instrumental in avoiding >$1 million in
vendor licensing fees.\nRefactored numerous critical and complex SQL data transformation queries from unreadable nested subqueries
to modularized, readable, maintainable queries leveraging CTEs.'
  ),
  (
    'IDEXX',
    'Software Engineer - Data Platform and API Development',
    '2023-02-01',
    NULL,
    'Remote, MA',
    'Led the design and implementation of RESTful APIs to facilitate seamless data integration between our core
data platform and external services, using Python and Flask, improving data accessibility.\nSpearheaded the integration of Datadog\'s APIs into our Python-based data pipeline, creating custom metrics
and real-time dashboards for enhanced system health monitoring, leading to a 40% fewer downtime incidents.\nOptimized existing ELT processes by integrating Python multiprocessing and threading libraries, achieving a
40% reduction in processing times and significantly improving throughput on critical data pipelines.\nPartnered with a cross-functional team on a pioneering ML project in Python, achieving a 30% reduction in
costs by optimizing license utilization across the organization.\nUsed Python to automate the migration of legacy systems to cloud-based data warehouse, enabling higher data
storage efficiency, better scalability, and reduced operational costs.'
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
    ),
    (
        'GHCN Analysis',
        'NA',
        'https://github.com/aljones1816/GHCNV4_Analysis',
        'Developed and implemented a Python-based data pipeline for extracting, cleaning, and transforming climate
data from multiple sources (GISTEMP, CRUTEM, GHCN).\nDesigned and deployed a Flask-driven web application that serves an interactive dashboard, enabling users to
select datasets dynamically and visualize temperature anomalies via Chart.js.\Employed best practices in software development, including organizing code for maintainability, using version
control (Git), and ensuring the application\'s scalability and responsiveness to future data additions or changes.',
        '2023-01-01'
    );

-- populate about me table
INSERT INTO about (name, location, email, portfolio, github, linkedin, objective) VALUES
    (
        'Alan Jones',
        'Boston, Massachusetts',
        'me@alanjones.dev',
        'https://alanjones.dev',
        'https://github.com/aljones1816',
        'https://www.linkedin.com/in/almjones/',
        'Seasoned engineer seeking role as a Full Stack Developer with a strong background in back and frontend technologies,
end-to-end data intensive system design, and CI/CD integration. Eager to apply 5+ years of software engineering
experience to build dynamic, engaging user experiences.'
    );

-- populate user messages table
INSERT INTO messages (email, message) VALUES
    (
        'test@email.com',
        'This is an example of a user-submitted message!'
    );