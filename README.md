# BooksSeeker

**BooksSeeker** is a full-stack web application developed using **Node.js, Express.js, MongoDB Atlas, Mongoose, EJS, Passport.js, Cloudinary, and Bootstrap**.

The platform enables users to **discover, create, share, review, and manage books** across multiple categories. It implements secure authentication, authorization, session management, server-side validation, cloud-based image storage, and centralized error handling.

The application follows a **modular MVC (Model-View-Controller) architecture**, separating presentation, business logic, data access, routing, and middleware responsibilities.

## Live Application

**Deployed Application:**
https://booksseeker.onrender.com

---

## Table of Contents

* Introduction
* Features
* Technology Stack
* System Architecture
* Application Request Flow
* Project Architecture
* Folder Structure
* Installation
* Environment Variables
* Running the Application
* Application Modules
* Routes
* Database Architecture
* Security Features
* Validation and Data Integrity
* Error Handling
* Deployment
* Scalability and Maintainability
* Future Enhancements
* License

---

# Introduction

BooksSeeker is an online book discovery and sharing platform where users can explore books, create book listings, upload book cover images, and share their opinions through reviews and ratings.

The application is designed using **separation of concerns**, where different parts of the system are responsible for specific operations.

The project follows the **MVC architecture**, making the application:

* Modular
* Maintainable
* Scalable
* Reusable
* Easier to debug
* Easier to extend with new features

The application uses **Express.js as the backend application framework**, **MongoDB Atlas as the cloud database**, and **EJS as the server-side rendering engine**.

---

# Features

## User Authentication

* User registration
* Secure login
* Logout functionality
* Password hashing using Passport Local Mongoose
* Persistent user sessions
* Flash messages for authentication status
* Authentication middleware
* Protected routes

---

## Book Listings

Users can:

* Browse all books
* View detailed information about a book
* Create new book listings
* Edit existing listings
* Delete their own listings
* Upload book cover images

The application uses **ownership-based authorization** to ensure users can modify or delete only the listings they own.

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

## Reviews and Ratings

Authenticated users can:

* Add reviews
* Rate books
* Delete their own reviews

Reviews are associated with their respective book listings using MongoDB document relationships.

---

## Image Upload

BooksSeeker supports cloud-based image management using:

* Multer
* Cloudinary
* Multer Storage Cloudinary

Instead of permanently storing uploaded images on the application server, images are transferred to **Cloudinary cloud storage**.

This approach reduces local server storage requirements and makes the application more suitable for cloud deployment.

---

## Session Management

The application implements server-side session management using:

* Express Session
* Connect Mongo
* MongoDB Atlas
* Secure session cookies
* Flash messaging

Session information is persisted in MongoDB rather than relying only on server memory.

---

## Validation

Incoming application data is validated using:

* Joi
* Custom middleware
* Server-side validation

Validation helps prevent invalid or incomplete data from reaching the database layer.

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

## Deployment

* Render
* MongoDB Atlas
* Cloudinary

---

# System Architecture

BooksSeeker follows a **layered MVC-based architecture**.

```text
                    ┌──────────────────────┐
                    │       Client         │
                    │ Browser / User       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │   HTTP Request       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Middleware      │
                    │ Auth / Validation /  │
                    │ Error / Sessions     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Routes         │
                    │ Listing / User /     │
                    │ Review               │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Controllers      │
                    │ Application Logic    │
                    └───────┬───────┬──────┘
                            │       │
                ┌───────────┘       └────────────┐
                ▼                                ▼
       ┌─────────────────┐              ┌─────────────────┐
       │     Models      │              │    Cloudinary   │
       │ Mongoose ODM    │              │ Image Storage   │
       └────────┬────────┘              └─────────────────┘
                │
                ▼
       ┌─────────────────┐
       │  MongoDB Atlas  │
       │ Cloud Database  │
       └─────────────────┘
```

### Architecture Components

### 1. Presentation Layer

The presentation layer consists of:

* EJS templates
* HTML
* CSS
* JavaScript
* Bootstrap

It is responsible for rendering the user interface and displaying dynamic server-side data.

### 2. Routing Layer

Express routes determine which application functionality should handle an incoming HTTP request.

Examples:

* `/listings`
* `/login`
* `/signup`
* `/listings/:id`
* `/listings/:id/reviews`

### 3. Middleware Layer

Middleware acts as a processing layer between incoming requests and route handlers.

It handles:

* Authentication
* Authorization
* Validation
* Sessions
* Flash messages
* Error processing
* Request preprocessing

### 4. Controller Layer

Controllers contain the application's **business logic**.

For example, the listing controller handles:

* Creating listings
* Reading listings
* Updating listings
* Deleting listings
* Rendering listing pages

This keeps route definitions clean and easier to maintain.

### 5. Data Access Layer

Mongoose models provide an abstraction over MongoDB.

The models define:

* Database schemas
* Data relationships
* Validation rules
* Database interaction logic

### 6. External Services Layer

The application integrates with external cloud services:

* **MongoDB Atlas** — database hosting
* **Cloudinary** — image storage
* **Render** — application deployment

---

# Application Request Flow

A typical request follows this lifecycle:

```text
User Request
     ↓
Express Server
     ↓
Middleware
     ↓
Authentication / Authorization
     ↓
Route
     ↓
Controller
     ↓
Mongoose Model
     ↓
MongoDB Atlas
     ↓
Controller
     ↓
EJS View
     ↓
HTTP Response
     ↓
Browser
```

For image uploads:

```text
Browser
   ↓
Multer
   ↓
Cloudinary Storage
   ↓
Image URL
   ↓
MongoDB Listing Document
```

This architecture separates responsibilities and prevents individual components from becoming tightly coupled.

---

# Project Architecture

The project follows the **MVC (Model-View-Controller)** architecture.

### Models

Models define the structure of application data and communicate with MongoDB through Mongoose.

Responsibilities include:

* Schema definition
* Data relationships
* Database operations
* Data validation

### Views

Views are implemented using EJS templates.

Responsibilities include:

* Rendering HTML
* Displaying dynamic data
* Rendering forms
* Displaying validation and flash messages

### Controllers

Controllers contain application-level business logic.

Responsibilities include:

* Processing requests
* Communicating with models
* Handling application operations
* Passing data to views

### Routes

Routes define the application's HTTP endpoints.

Responsibilities include:

* Mapping URLs to controllers
* Defining HTTP methods
* Connecting middleware with controllers

### Middleware

Middleware provides reusable request-processing functionality.

Examples:

* `isLoggedIn`
* Authorization checks
* Joi validation
* Error handling
* Session handling

### Utilities

Utilities contain reusable helper functionality such as:

* Custom error classes
* Async error handling
* Shared helper functions

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

## Clone the Repository

```bash
git clone https://github.com/your-username/BooksSeeker.git
```

## Navigate to the Project

```bash
cd BooksSeeker
```

## Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

Environment variables are used to keep sensitive configuration values outside the source code.

**Do not commit the `.env` file to GitHub.**

---

# Running the Application

Start the server using:

```bash
node app.js
```

or:

```bash
nodemon app.js
```

The application will run locally at:

```text
http://localhost:8080
```

The deployed application is available at:

```text
https://booksseeker.onrender.com
```

---

# Application Modules

## Authentication Module

* User Registration
* User Login
* Logout
* Session Persistence
* Password Hashing
* Authentication Middleware

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

Reviews are associated with specific book listings.

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

Images are processed using:

* Multer
* Cloudinary
* Multer Storage Cloudinary

The application receives the uploaded file, processes it through Multer, and stores the image in Cloudinary.

The resulting cloud URL is then associated with the corresponding book listing.

---

# Routes

## General Routes

| Method | Route      | Description          |
| ------ | ---------- | -------------------- |
| GET    | `/`        | Home Page            |
| GET    | `/terms`   | Terms and Conditions |
| GET    | `/privacy` | Privacy Policy       |

---

## Authentication Routes

| Method | Route     | Description       |
| ------ | --------- | ----------------- |
| GET    | `/signup` | Registration Form |
| POST   | `/signup` | Register User     |
| GET    | `/login`  | Login Form        |
| POST   | `/login`  | Login User        |
| GET    | `/logout` | Logout User       |

---

## Listing Routes

| Method | Route                | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/listings`          | Display all books |
| GET    | `/listings/new`      | New Listing Form  |
| POST   | `/listings`          | Create Listing    |
| GET    | `/listings/:id`      | Show Listing      |
| GET    | `/listings/:id/edit` | Edit Listing      |
| PUT    | `/listings/:id`      | Update Listing    |
| DELETE | `/listings/:id`      | Delete Listing    |

---

## Category Routes

| Route                  | Category         |
| ---------------------- | ---------------- |
| `/listings/academic`   | Academic         |
| `/listings/fiction`    | Fiction          |
| `/listings/authors`    | Authors          |
| `/listings/children`   | Children's Books |
| `/listings/science`    | Science          |
| `/listings/history`    | History          |
| `/listings/literature` | Literature       |
| `/listings/technology` | Technology       |
| `/listings/maths`      | Mathematics      |
| `/listings/medical`    | Medical          |

---

## Review Routes

| Method | Route                             | Description   |
| ------ | --------------------------------- | ------------- |
| POST   | `/listings/:id/reviews`           | Add Review    |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete Review |

---

# Database Architecture

BooksSeeker uses **MongoDB Atlas** as its cloud-hosted NoSQL database.

Mongoose acts as the **ODM (Object Data Modeling) layer** between the Express application and MongoDB.

The primary application entities are:

```text
User
 │
 ├── owns ──► Listings
 │
 └── creates ──► Reviews

Listing
 │
 ├── has ──► Reviews
 │
 └── contains ──► Cloudinary Image Reference
```

### Main Data Models

### User Model

Stores user authentication and account-related information.

### Listing Model

Stores information related to books, including:

* Title
* Description
* Price/details
* Category
* Location/details
* Image information
* Owner reference

### Review Model

Stores:

* Review content
* Rating
* Author
* Associated listing

Mongoose references help maintain relationships between users, listings, and reviews.

---

# CRUD Operations

BooksSeeker implements the standard **CRUD lifecycle** for book listings.

```text
CREATE → Add a new book
READ   → Browse/view books
UPDATE → Edit a book
DELETE → Remove a book
```

These operations are exposed through REST-style HTTP methods:

* `POST` → Create
* `GET` → Read
* `PUT` → Update
* `DELETE` → Delete

---

# Security Features

BooksSeeker implements several security mechanisms:

* Password hashing using Passport Local Mongoose
* Session-based authentication
* Ownership-based authorization
* Protected routes using middleware
* Server-side validation with Joi
* Secure image uploads
* Flash messaging
* MongoDB-backed session storage
* Centralized error handling
* Environment-based secret management

Authentication and authorization are handled separately.

**Authentication** determines whether a user is logged in.

**Authorization** determines whether that authenticated user has permission to perform a specific operation.

For example, a logged-in user may create listings, but only the owner of a listing can edit or delete it.

---

# Validation and Data Integrity

The application performs **server-side validation** before processing user input.

Joi validation is used to verify incoming data.

The validation pipeline can be represented as:

```text
Client Input
     ↓
Express Request
     ↓
Validation Middleware
     ↓
Valid Data ─────► Controller
     │
     └── Invalid Data ──► Error Response
```

This provides an additional layer of protection against malformed or incomplete requests.

---

# Error Handling

The application provides centralized error handling through:

* Custom `ExpressError` class
* Asynchronous error wrapper
* Global error-handling middleware
* Custom 404 page
* Validation middleware

Centralized error handling prevents repetitive error-processing code across individual routes.

Instead of every route independently handling errors, errors can propagate to the application's global error handler.

---

# Middleware Pipeline

Express middleware forms an important part of the application's request-processing architecture.

A simplified pipeline is:

```text
Incoming Request
       ↓
Session Middleware
       ↓
Authentication Middleware
       ↓
Validation Middleware
       ↓
Authorization Middleware
       ↓
Route Handler / Controller
       ↓
Response
```

This **middleware pipeline** allows reusable application logic to be applied consistently across multiple routes.

---

# Separation of Concerns

The application follows the software engineering principle of **Separation of Concerns**.

Each layer has a focused responsibility:

| Layer         | Responsibility                          |
| ------------- | --------------------------------------- |
| Views         | User interface                          |
| Routes        | Request routing                         |
| Middleware    | Request processing and protection       |
| Controllers   | Business logic                          |
| Models        | Data structure and database interaction |
| Utilities     | Reusable helper functionality           |
| Cloudinary    | Image storage                           |
| MongoDB Atlas | Persistent data storage                 |

This structure makes the codebase easier to understand, test, debug, and extend.

---

# Deployment Architecture

BooksSeeker is deployed using **Render**.

The production architecture can be represented as:

```text
                     Internet
                         │
                         ▼
                ┌─────────────────┐
                │     Render      │
                │ Node/Express    │
                │ Application     │
                └────────┬────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
      ┌───────────────┐     ┌────────────────┐
      │ MongoDB Atlas │     │   Cloudinary   │
      │ Application   │     │ Image Storage  │
      │ Data          │     │                │
      └───────────────┘     └────────────────┘
```

### Production Components

**Render**

Hosts and runs the Node.js/Express application.

**MongoDB Atlas**

Provides managed cloud database infrastructure.

**Cloudinary**

Provides cloud-based storage and delivery for book cover images.

---

# Software Engineering Concepts Used

BooksSeeker demonstrates several practical software engineering concepts:

* **MVC Architecture**
* **Layered Architecture**
* **Separation of Concerns**
* **Modular Design**
* **CRUD Operations**
* **REST-style Routing**
* **Middleware Pipeline**
* **Authentication**
* **Authorization**
* **Session Management**
* **Server-side Validation**
* **ODM-based Database Access**
* **Cloud Storage Integration**
* **Environment Configuration**
* **Centralized Error Handling**
* **Reusable Components**
* **Cloud Deployment**
* **Database Persistence**
* **Third-party Service Integration**

These concepts allow the application to move beyond a simple CRUD project toward a more structured full-stack software system.

---

# Scalability and Maintainability

The current architecture provides a foundation for future scalability.

### Modular Codebase

Controllers, models, routes, middleware, views, and utilities are separated into dedicated modules.

### Database Scalability

MongoDB Atlas provides a cloud-based database infrastructure that can be expanded as application requirements grow.

### Externalized File Storage

Cloudinary prevents the application server from becoming responsible for storing large image files.

### Configuration Management

Sensitive configuration values are stored through environment variables.

### Extensible Architecture

New modules such as search, favorites, recommendations, administration, and APIs can be added without redesigning the entire application.

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
* Advanced filtering and sorting
* Book popularity analytics
* Notification system
* API-based book metadata integration
* Role-based access control
* Automated testing and CI/CD pipeline

---

# Project Highlights

BooksSeeker demonstrates the development of a complete **full-stack web application** with:

```text
Frontend
   ↓
EJS + Bootstrap + JavaScript
   ↓
Backend
   ↓
Node.js + Express.js
   ↓
Application Architecture
   ↓
MVC + Middleware + Controllers
   ↓
Data Layer
   ↓
Mongoose + MongoDB Atlas
   ↓
External Services
   ↓
Cloudinary
   ↓
Deployment
   ↓
Render
```

The project combines **frontend development, backend engineering, database management, authentication, authorization, cloud services, file handling, validation, and deployment** into a single application.

---

# Live Demo

Explore the deployed application:

**https://booksseeker.onrender.com**

---

# License

This project is developed for educational purposes and serves as a demonstration of full-stack web development using the **MVC architecture, Node.js, Express.js, MongoDB, authentication, cloud storage, and modern software engineering practices**.

You are welcome to use, modify, and extend this project for learning, personal, or academic purposes.
