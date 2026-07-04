const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const Listing = require('../models/listing.js');
const Review = require('../models/review.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const ReviewController = require('../controllers/review.js');

//Reviews 
//POST review ROUTE
router.post("/", isLoggedIn, validateReview, wrapAsync(ReviewController.createReview));

//Delete review ROUTE
router.delete("/:reviewId", isReviewAuthor, wrapAsync(ReviewController.deleteReview));


module.exports = router;