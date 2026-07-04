# BooksSeeker

BooksSeeker is a full-stack web application developed using **Node.js**, **Express.js**, **MongoDB Atlas**, and **EJS**. The platform enables users to discover, share, and review books across various categories. It provides secure authentication, cloud-based image uploads, session management, and authorization features, making it a reliable and user-friendly book listing platform.

---

## Table of Contents

* Introduction
* Features
* Technology Stack
* Project Architecture
* Folder Structure
* Installation
* Environment Variables
* Running the Application
* Application Modules
* Routes
* Security Features
* Error Handling
* Future Enhancements
* License

---

# Introduction

BooksSeeker is an online platform where users can explore books, create book listings, upload book cover images, and share their opinions through reviews and ratings. The application follows the **Model-View-Controller (MVC)** architecture, making the project modular, scalable, and easy to maintain.

The platform allows authenticated users to manage their own listings while enabling all visitors to browse available books across multiple categories.

---

# Features

## User Authentication

* User registration
* Secure login
* Logout functionality
* Password hashing using Passport Local Mongoose
* Persistent user sessions
* Flash messages for authentication status

---

## Book Listings

Users can:

* Browse all books
* View detailed information about a book
* Create new book listings
* Edit existing listings
* Delete their own listings
* Upload book cover images

---

## Book Categories

Books are organized into multiple categories including:

* Academic
* Fiction
* Authors
* Children's Books
* Science
* History
* Literature
* Technology
* Mathematics
* Medical

---

## Reviews

Authenticated users can:

* Add reviews
* Rate books
* Delete their own reviews

---

## Image Upload

BooksSeeker supports cloud-based image storage using:

* Cloudinary
* Multer
* Multer Storage Cloudinary

---

## Session Management

* Express Session
* MongoDB session storage using Connect Mongo
* Secure session cookies
* Flash messaging

---

## Validation

The application validates incoming data using:

* Joi validation
* Custom middleware
* Server-side validation

---

# Technology Stack

## Backend

* Node.js
* Express.js

## Frontend

* EJS
* EJS-Mate
* HTML5
* CSS3
* JavaScript
* Bootstrap

## Database

* MongoDB Atlas
* Mongoose

## Authentication

* Passport.js
* Passport Local Strategy
* Passport Local Mongoose

## File Upload

* Multer
* Cloudinary
* Multer Storage Cloudinary

## Session Management

* Express Session
* Connect Mongo

## Validation

* Joi

---

# Project Architecture

The project follows the **MVC (Model-View-Controller)** architecture.

* **Models** manage the database schema.
* **Views** render dynamic web pages using EJS.
* **Controllers** contain application logic.
* **Routes** define API endpoints and navigation.
* **Middleware** handles authentication, authorization, and validation.
* **Utilities** manage custom error handling and asynchronous operations.

---

# Folder Structure

```text
BooksSeeker/
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   ├── includes/
│   └── error.ejs
│
├── utils/
│
├── middleware.js
├── cloudConfig.js
├── app.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

---

# Installation

## Clone the repository

```bash
git clone https://github.com/your-username/BooksSeeker.git
```

## Navigate to the project folder

```bash
cd BooksSeeker
```

## Install all dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

# Running the Application

Start the server using:

```bash
node app.js
```

or

```bash
nodemon app.js
```

The application will run at:

```
http://localhost:8080
```

---

# Application Modules

## Authentication Module

* User Registration
* User Login
* Logout
* Session Persistence
* Password Encryption

---

## Listing Module

Users can:

* View all books
* View book details
* Create listings
* Update listings
* Delete listings
* Upload book cover images

Only the owner of a listing can edit or delete it.

---

## Review Module

Authenticated users can:

* Add reviews
* Rate books
* Delete their own reviews

---

## Category Module

Books can be filtered using category-specific routes:

* Academic
* Fiction
* Authors
* Children's Books
* Science
* History
* Literature
* Technology
* Mathematics
* Medical

---

## Image Upload Module

Images are uploaded securely using:

* Multer
* Cloudinary Storage

Uploaded images are stored in Cloudinary rather than on the local server.

---

# Routes

## General Routes

| Method | Route    | Description          |
| ------ | -------- | -------------------- |
| GET    | /        | Home Page            |
| GET    | /terms   | Terms and Conditions |
| GET    | /privacy | Privacy Policy       |

---

## Authentication Routes

| Method | Route   | Description       |
| ------ | ------- | ----------------- |
| GET    | /signup | Registration Form |
| POST   | /signup | Register User     |
| GET    | /login  | Login Form        |
| POST   | /login  | Login User        |
| GET    | /logout | Logout User       |

---

## Listing Routes

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /listings          | Display all books |
| GET    | /listings/new      | New Listing Form  |
| POST   | /listings          | Create Listing    |
| GET    | /listings/:id      | Show Listing      |
| GET    | /listings/:id/edit | Edit Listing      |
| PUT    | /listings/:id      | Update Listing    |
| DELETE | /listings/:id      | Delete Listing    |

---

## Category Routes

| Route                | Category         |
| -------------------- | ---------------- |
| /listings/academic   | Academic         |
| /listings/fiction    | Fiction          |
| /listings/authors    | Authors          |
| /listings/children   | Children's Books |
| /listings/science    | Science          |
| /listings/history    | History          |
| /listings/literature | Literature       |
| /listings/technology | Technology       |
| /listings/maths      | Mathematics      |
| /listings/medical    | Medical          |

---

## Review Routes

| Method | Route                           | Description   |
| ------ | ------------------------------- | ------------- |
| POST   | /listings/:id/reviews           | Add Review    |
| DELETE | /listings/:id/reviews/:reviewId | Delete Review |

---

# Security Features

BooksSeeker implements several security measures:

* Password hashing using Passport Local Mongoose
* Session-based authentication
* Ownership authorization for listings
* Protected routes using middleware
* Server-side validation with Joi
* Secure image uploads
* Flash messaging
* Session management using Connect Mongo
* Centralized error handling

---

# Error Handling

The application provides robust error handling through:

* Custom `ExpressError` class
* Asynchronous error wrapper
* Global error-handling middleware
* Custom 404 page
* Validation middleware

---

# Future Enhancements

The following features can be added in future releases:

* Advanced search functionality
* Pagination
* User profile pages
* Wishlist and favorites
* Book availability tracking
* Email verification
* Password reset
* Admin dashboard
* RESTful API
* Responsive UI improvements
* Personalized book recommendations

---

# License

This project is developed for educational purposes and serves as a demonstration of full-stack web development using the MVC architecture.

You are welcome to use, modify, and extend this project for learning, personal, or academic purposes.
