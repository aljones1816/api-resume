# Alan Jones Resume REST API

## Overview
This project is a REST API for my resume, built with Node.js, Express, and PostgreSQL. It serves my professional information as structured data. The API is documented using Swagger and deployed on a Digital Ocean Droplet via a GitHub Actions pipeline. NGINX is used as a reverse proxy to manage incoming requests.

## API Documentation
You can view live documentation for the API and endpoints at the SwaggerUI site [here](https://resume.alanjones.dev/api/docs)

Example:
- `GET /api/about`: Returns basic information about me.
- `GET /api/experience`: Lists my professional experience.
