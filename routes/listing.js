const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");

const listingController = require('../controllers/listing.js');
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


//Academic Listings Route
router.get("/academic", wrapAsync(listingController.academicListings));

//Fiction Listings Route
router.get("/fiction", wrapAsync(listingController.fictionListings));

//Authors Listings Route
router.get("/authors", wrapAsync(listingController.authorsListings));

//Children's Books Listings Route
router.get("/children", wrapAsync(listingController.childrenListings));

//Science Listings Route
router.get("/science", wrapAsync(listingController.scienceListings));

//History Listings Route
router.get("/history", wrapAsync(listingController.historyListings));

//Litreature Listings Route
router.get("/literature", wrapAsync(listingController.literatureListings));

//Technology Listings Route
router.get("/technology", wrapAsync(listingController.technologyListings));

//Maths Listings Route
router.get("/maths", wrapAsync(listingController.mathsListings));

//Medical Listings Route
router.get("/medical", wrapAsync(listingController.medicalListings));

// -----------------------------------------------------------------------------
//Index Route
router.get("/", wrapAsync(listingController.index));

//New Route
router.get("/new", isLoggedIn, listingController.RenderNewForm);

//Show Route
router.get("/:id", validateListing, wrapAsync(listingController.showListing));

//Create Route
router.post("/", isLoggedIn, validateListing, upload.single("listing[image]"), wrapAsync(listingController.createListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.RenderEditForm));

//Update Route
router.put("/:id", isLoggedIn, isOwner, validateListing, upload.single("listing[image]"), wrapAsync(listingController.updateListing));

//Delete Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;