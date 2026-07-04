const mongoose = require('mongoose');
const initdata = require('./data.js');
const Listing = require('../models/listing.js');

const Mongo_URL = "mongodb://localhost:27017/mernstack";

main().then(() => {
    console.log("Database connection successful");
}).catch((err) => {
    console.error("Database connection error:", err);
});

async function main() {
    await mongoose.connect(Mongo_URL);
    console.log("Connected to MongoDB");
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        console.log("Existing listings cleared");
        initdata.data = initdata.data.map((obj) => ({ ...obj, owner: "6a41432b20a6852c2ea9ac5b" }));
        await Listing.insertMany(initdata.data);
        console.log("Sample listings inserted");
    } catch (err) {
        console.error("Error initializing database:", err);
    }
};

initDB().then(() => {
    console.log("Database initialization complete");
    mongoose.connection.close();
}).catch((err) => {
    console.error("Error during database initialization:", err);
    mongoose.connection.close();
});