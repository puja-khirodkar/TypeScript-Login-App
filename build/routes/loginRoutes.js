"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted!!');
}
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"Post\">\n      <div id=\"email\">\n        <label> Email </label>\n        <input name=\"email\" />\n      </div>\n      <div id=\"pwd\">\n        <label> Password </label>\n        <input name=\"password\" type=\"password\">\n      </div>\n      <button> Login </button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email == 'test@gmail.com' && password == 'test@1') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send("\n    <div>\n      <div> Invalid email or password </div>\n      <a href='/login'> Login</a>\n    </div>");
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <div> You are logged in </div>\n      <a href='/logout'> Logout</a>\n    </div>");
    }
    else {
        res.send("\n    <div>\n      <div> You are not logged in </div>\n      <a href='/login'> Login</a>\n    </div>");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
