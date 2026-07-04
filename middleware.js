const Listing = require('./models/listing.js');
const Review = require('./models/review.js');
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");

//Validating Listing
module.exports.validateListing = (req, res, next) => {
    // let result = listingSchema.validate(req.body);
    //Errors will be recieved in result variable
    //result.error = {error} it will be recieved
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}

// Validating Reviews
module.exports.validateReview = (req, res, next) => {
    // let result = ReviewSchema.validate(req.body);
    //Errors will be recieved in result variable
    //result.error = {error} it will be recieved
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
}



module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        //returning to the current redirected OriginalURL
        req.session.redirect = req.originalUrl;
        req.flash("error", "you must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission \n You are not the owner  ");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission \n You are not the author");
        return res.redirect(`/listings/${id}`);
    }
    next();
}