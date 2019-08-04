const { verifyJWT } = require("./jwt");

const redirectLogin = (req, res, next) => {
    if(req.cookies["auth_token"]) {
        const validJWT = verifyJWT(req.cookies["auth_token"]);
        if(validJWT) {
            return next();
        }
    }
    res.redirect("/login");
};

const redirectDashboard = (req, res, next) => {
    if(req.cookies["auth_token"]) {
        const validJWT = verifyJWT(req.cookies["auth_token"]);
        if(validJWT) {
            return res.redirect("/dashboard");
        }
    }
    next();
};

module.exports = {
    redirectDashboard,
    redirectLogin
};


