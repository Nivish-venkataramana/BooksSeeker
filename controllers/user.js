const User = require("../models/user.js");

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;//form nunchi
        const newUser = new User({ email, username });//new user data
        const registeredUser = await User.register(newUser, password);
        //User model i.e collection lo add chestharu kotha user i.e document ni
        console.log(registeredUser);//created user details
        //post signup direct login option
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to RoamRoom! ");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

// passport.authenticate is used as a middleware route to authenticate requests
//  authenticate incoming requests based on a specific strategy
// (e.g., username/password and dictate what happens on success or failure.
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to roamroom You are logged in ");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err)
            return next(err);
        req.flash("success", "you are logged out!");
        res.redirect("/");
    });
};