const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

//Index route
module.exports.index = async (req, res) => {
    const newlistings = await Listing.find({});
    res.render("listings/index.ejs", { listings: newlistings });
};

//New route
module.exports.RenderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//Show route
module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing doesn't Exist...");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

//Create route
module.exports.createListing = async (req, res) => {
    // This part of the code is responsible for geocoding the location provided in the request body. 
    // It uses the Mapbox Geocoding API to convert the location into geographic coordinates (latitude and longitude). 
    // The response from the geocoding API is logged to the console, and a simple "done!" message is sent back to the client.
    let response1 = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
        .send();
    // const { title, price, description, image, location, country } = req.body;
    // const newListing = new Listing({ title, price, description, image, location, country });
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.geometry = response1.body.features[0].geometry;
    let url = req.file.path;
    let filename = req.file.filename;
    newListing.image = { url, filename };

    await newListing.save();
    req.flash("success", "New listing created");
    res.redirect("/listings");
};

//Edit route
module.exports.RenderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing doesn't Exist...");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

//Update route
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });

    let response2 = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
        .send();

    if (typeof req.file !== 'undefined') {
        let url = req.file.path;
        let filename = req.file.filename;
        updatedListing.image = { url, filename };
        updatedListing.geometry = response2.body.features[0].geometry;
        await updatedListing.save();
    }
    req.flash("success", "Listing updated");
    res.redirect(`/listings/${updatedListing._id}`);
};

//Delete route
module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted");
    res.redirect("/listings");
};

//Academic Listings route
module.exports.academicListings = async (req, res) => {
    const academicListings = await Listing.find({ category: "Academic" });
    res.render("listings/academic.ejs", { listings: academicListings });
};

//Fiction Listings route
module.exports.fictionListings = async (req, res) => {
    const fictionListings = await Listing.find({ category: "Fiction" });
    res.render("listings/fiction.ejs", { listings: fictionListings });
};

//Authors Listings route
module.exports.authorsListings = async (req, res) => {
    const authorsListings = await Listing.find({ category: "Authors" });
    res.render("listings/authors.ejs", { listings: authorsListings });
};

//Children's Books Listings route
module.exports.childrenListings = async (req, res) => {
    const childrenListings = await Listing.find({ category: "Children" });
    res.render("listings/children.ejs", { listings: childrenListings });
};

//Science Listings route
module.exports.scienceListings = async (req, res) => {
    const scienceListings = await Listing.find({ category: "Science" });
    res.render("listings/science.ejs", { listings: scienceListings });
};

//History Listings route
module.exports.historyListings = async (req, res) => {
    const historyListings = await Listing.find({ category: "History" });
    res.render("listings/history.ejs", { listings: historyListings });
};

//Literature Listings route
module.exports.literatureListings = async (req, res) => {
    const literatureListings = await Listing.find({ category: "Literature" });
    res.render("listings/literature.ejs", { listings: literatureListings });
};

//Technology Listings route
module.exports.technologyListings = async (req, res) => {
    const technologyListings = await Listing.find({ category: "Technology" });
    res.render("listings/technology.ejs", { listings: technologyListings });
};

//Maths Listings route
module.exports.mathsListings = async (req, res) => {
    const mathsListings = await Listing.find({ category: "Mathematics" });
    res.render("listings/maths.ejs", { listings: mathsListings });
};

//Medical Listings route
module.exports.medicalListings = async (req, res) => {
    const medicalListings = await Listing.find({ category: "Medical" });
    res.render("listings/medical.ejs", { listings: medicalListings });
};

// Privacy route
module.exports.privacy = async (req, res) => {
    res.render("listings/privacy.ejs");
}

// Terms Route
module.exports.terms = async (req, res) => {
    res.render("listings/terms.ejs");
}