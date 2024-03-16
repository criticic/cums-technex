# Project API Documentation

## Authentication Endpoints

### Register User
Registers a new user.

- **URL:** `/auth/register`
- **Method:** `POST`
- **Request Body:**
    - `name` (string): Name of the user.
    - `email` (string): Email of the user.
    - `password` (string): Password of the user.
    - `role` (string): Role of the user. (One of: `STUDENT`, `PROFESSOR`, `STAFF`, `ADMIN`)

#### Response
- **Success Response:**
    - **Code:** `201 CREATED`
    - **Content:**
        ```json
        {
            "token": "<JWT_TOKEN>",
            "user": {
                "name": "<USER_NAME>",
                "email": "<USER_EMAIL>",
                "role": "<USER_ROLE>"
            }
        }
        ```
- **Error Response:**
    - **Code:** `400 BAD REQUEST`
    - **Content:** `{ "error": "User already exists" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Login User
Logs in an existing user.

- **URL:** `/auth/login`
- **Method:** `POST`
- **Request Body:**
    - `email` (string): Email of the user.
    - `password` (string): Password of the user.

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:**
        ```json
        {
            "token": "<JWT_TOKEN>",
            "user": {
                "name": "<USER_NAME>",
                "email": "<USER_EMAIL>",
                "role": "<USER_ROLE>"
            }
        }
        ```
- **Error Response:**
    - **Code:** `400 BAD REQUEST`
    - **Content:** `{ "error": "Invalid email or password" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

## Guest House Endpoints

### Get All Guest Houses
Retrieves all guest houses.

- **URL:** `/guest-house`
- **Method:** `GET`
- **Authorization:** Bearer Token

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `[{"id": "<GUEST_HOUSE_ID>", "name": "<GUEST_HOUSE_NAME>", "location": "<GUEST_HOUSE_LOCATION>", "description": "<GUEST_HOUSE_DESCRIPTION>", "rooms": [<ROOM_DETAILS>]}, ...]`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Get Guest House by ID
Retrieves a specific guest house by ID.

- **URL:** `/guest-house/:id`
- **Method:** `GET`
- **Authorization:** Bearer Token

#### Parameters
- `id` (string): ID of the guest house.

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "id": "<GUEST_HOUSE_ID>", "name": "<GUEST_HOUSE_NAME>", "location": "<GUEST_HOUSE_LOCATION>", "description": "<GUEST_HOUSE_DESCRIPTION>", "rooms": [<ROOM_DETAILS>] }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `404 NOT FOUND`
    - **Content:** `{ "error": "Guest house not found" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Create Guest House
Creates a new guest house.

- **URL:** `/guest-house`
- **Method:** `POST`
- **Authorization:** Bearer Token

#### Request Body
- `name` (string): Name of the guest house.
- `location` (string): Location of the guest house.
- `description` (string): Description of the guest house.

#### Response
- **Success Response:**
    - **Code:** `201 CREATED`
    - **Content:** `{ "message": "Guest house created successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Update Guest House
Updates an existing guest house.

- **URL:** `/guest-house/:id`
- **Method:** `PUT`
- **Authorization:** Bearer Token

#### Parameters
- `id` (string): ID of the guest house to update.

#### Request Body
- `name` (string): Name of the guest house (optional).
- `location` (string): Location of the guest house (optional).
- `description` (string): Description of the guest house (optional).

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "message": "Guest house updated successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `404 NOT FOUND`
    - **Content:** `{ "error": "Guest house not found" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Delete Guest House
Deletes a guest house.

- **URL:** `/guest-house/:id`
- **Method:** `DELETE`
- **Authorization:** Bearer Token

#### Parameters
- `id` (string): ID of the guest house to delete.

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "message": "Guest house deleted successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `404 NOT FOUND`
    - **Content:** `{ "error": "Guest house not found" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Add Room to Guest House
Adds a room to a guest house.

- **URL:** `/guest-house/add-room`
- **Method:** `POST`
- **Authorization:** Bearer Token

#### Request Body
- `guestHouseId` (string): ID of the guest house.
- `roomNo` (string): Room number.
- `roomType` (string): Room type.
- `description` (string): Description of the room (optional).

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "message": "Room added successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Update Room
Updates details of a room.

- **URL:** `/guest-house/update-room/:id`
- **Method:** `PUT`
- **Authorization:** Bearer Token

#### Parameters
- `id` (string): ID of the room to update.

#### Request Body
- `roomNo` (string): Room number (optional).
- `roomType` (string): Room type (optional).
- `description` (string): Description of the room (optional).

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "message": "Room updated successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `404 NOT FOUND`
    - **Content:** `{ "error": "Room not found" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Delete Room
Deletes a room.

- **URL:** `/guest-house/delete-room/:id`
- **Method:** `DELETE`
- **Authorization:** Bearer Token

#### Parameters
- `id` (string): ID of the room to delete.

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "message": "Room deleted successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `404 NOT FOUND`
    - **Content:** `{ "error": "Room not found" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

### Book Room
Books a room.

- **URL:** `/guest-house/book-room`
- **Method:** `POST`
- **Authorization:** Bearer Token

#### Request Body
- `roomId` (string): ID of the room to book.
- `checkIn` (string): Check-in date and time.
- `checkOut` (string): Check-out date and time.

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** `{ "message": "Room booked successfully" }`
- **Error Response:**
    - **Code:** `401 UNAUTHORIZED`
    - **Content:** `{ "error": "Unauthorized" }`
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

---

## Billing Endpoints

### Create Bill PDF
Generates a bill in PDF format.

- **URL:** `/billing/create-bill-pdf`
- **Method:** `POST`

#### Response
- **Success Response:**
    - **Code:** `200 OK`
    - **Content:** PDF file
- **Error Response:**
    - **Code:** `500 INTERNAL SERVER ERROR`
    - **Content:** `{ "error": "<ERROR_MESSAGE>" }`

