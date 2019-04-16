const glob = require('glob');
const express = require('express');
const ProtectedRoutes = express.Router();
const upload = require('../lib/multer');
var _ = require('lodash');

const { verifyToken } = require('../lib/token');

// ProtectedRoutes for using secure routing
ProtectedRoutes.use(async (req, res, next) => {
    var token = req.headers['access-token'];
    if (token) {
        const result = await verifyToken(token);
        if (result === null)
            res.boom.unauthorized('Invalid token');
        return next();
    }
    else {
        res.send({ message: "Token required" });
    }
});


glob(`${__dirname}/*`, { ignore: ['**/auth', '**/index.js'] }, (err, matches) => {
    if (err) {
        throw err
    }
    _.map(matches, (value) => {
        const routeFile = require(`${value}/router`);
        routeFile.map((routes) => {
            let { method, route, handler } = routes;
            if (method.toLowerCase() === 'get') {
                ProtectedRoutes.get(route, handler)
            }
            else if (method.toLowerCase() === 'post') {
                ProtectedRoutes.post(route, handler)
            }
            else if (method.toLowerCase() === 'delete') {
                ProtectedRoutes.delete(route, handler)
            }
            else if (method.toLowerCase() === 'patch' && route === '/update-user/:email') {
                ProtectedRoutes.patch(route, upload, handler)
            }
            else if (method.toLowerCase() === 'patch') {
                ProtectedRoutes.patch(route, handler)
            }
        })
    })
})


module.exports = ProtectedRoutes;