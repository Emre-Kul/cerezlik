const { redirectLogin, redirectDashboard } = require("./middlewares");
const { loginGET, loginPOST, dashBoardGET, logoutGET } = require("./controllers.js");

function register(framework) {
    framework.post("/login", { preHandler: [redirectDashboard] }, loginPOST);
    framework.get("/login", { preHandler: [redirectDashboard] }, loginGET);
    framework.get("/", { preHandler: [redirectDashboard] }, loginGET);

    framework.get("/logout", logoutGET);
    framework.get("/dashboard", { preHandler: [redirectLogin] }, dashBoardGET);
}

module.exports = {
    register
};
