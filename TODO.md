# List of Features Planned

- [x] Add User Schema
- [x] Add User Authentication
- [x] Add User Roles
- [x] Add Health Info Schema
- [ ] Add Health Info CRUD
- [ ] Add Course Schema
- [ ] Add Course CRUD
- [ ] Add Course Registration System
- [ ] Add Course Grading System
- [ ] Student/Teacher/Staff Profile
- [x] Add Student Info Schema
- [x] Hostel/Guest House Schema
- [ ] Change File Structure to Modules

# Thoughts

I have added the authentication system, and also routes and controllers related to Guest House Booking.

#### 4:45 PM, 15th March 2024
One thing that can be done is to separate the code into modules, instead of separating on basis of routes and controllers. This will make the code more modular and easier to maintain.

Then perhaps in each folder, we can have a `index.ts` file that exports all the routes and controllers, and then in the main `index.ts` file, we can import all the routes and controllers from the modules and use them.

So there could be a guest house module, a user module, a health info module, mess billing module, etc.

#### 4:55 PM, 15th March 2024
Ideally, even the schema should be separated into modules, but as far as i can check, prism does not support this. So, we will have to keep all the schema in one file.

#### 5:13 PM, 15th March 2024
Separated the code into modules. Now, the code is more modular and easier to maintain.

Thinking of adding a academic module, which could have Courses, Course Info, Conveners, Teachers.
Course Registration System, Course Grading System.

#### 6:49 PM, 15th March 2024
Added the academic module schema, which has course, department, faculty, and student info.

Also added a prototype of billing subsytem, which can be used for mess billing.