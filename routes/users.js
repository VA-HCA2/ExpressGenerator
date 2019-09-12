var express = require('express');
var router = express.Router();

const authorization = require('./../utils/auth');


router.get('/login', (request, response) => {
    response.render('login', {pageTitle: 'Login'});
});


router.get('/register', (request, response) => {
    response.render('register', {pageTitle: 'Register'});
});



router.post('/', function(request, response) {
    // get user data from form
    var email = request.body.email;
    var password = request.body.password;
    if (authorization.auth.authorize(email, password)) {
        response.statusCode = 200;
        response.end();
    } else {
        response.statusCode = 403; // Forbidden
        response.end();
    }
});

module.exports = router;

