# cums-technex

Backend for CUMS (Comprehensive University Management System) made at, Hack It Out, Technex 2024, IIT BHU.

## Features
- User Authentication
- User Roles
- Health Info Schema
- Course Schema
- Course Registration System
- Student/Teacher/Staff Profile
- Student Info Schema
- Hostel/Guest House Schema
- Hostel/Guest House Booking System
- Mess Billing System

Take a look at the [API Documentation](API_DOCUMENTATION.md) for more details.

## Code Structure
- `src/` contains the source code
- index.ts is the entry point
- initially there was a model, controller, and service for each entity, but it was later changed to a more modular structure
- now there is a module for each entity, and each module contains a index.ts file containing the routes, and a [name].controller.ts file containing the controller logic
- the database schema is defined in the [prisma schema file](prisma/schema.prisma)

## Tech Stack
- Made with TypeScript & Bun (a Fast all-in-one JavaScript runtime)
- Uses Express.js & Prisma ORM
- Uses JWT for authentication
- Uses PostgreSQL as database

Look at [TODO.md](TODO.md) for a list of features planned/implemented, and thoughts ()sort of a blog.

## Installation

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

This project was created using `bun init` in bun v0.6.14. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
