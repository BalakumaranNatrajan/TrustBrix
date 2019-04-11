const glob = require('glob');
const express = require('express');
const router = express.Router();
var _ = require('lodash');


glob(`${__dirname}/*`, { ignore: '**/index.js' }, (err, matches) => {
    if (err) {
        throw err
    }
    _.map(matches, (value) => {
        const routeFile = require(`${value}/router`);
        routeFile.map((routes) => {
            const { method, route, handler } = routes;
            if (method.toLowerCase() === 'get') {
                router.get(route, handler)
            }
            else if (method.toLowerCase() === 'post') {
                router.post(route, handler)
            }
            else if (method.toLowerCase() === 'delete') {
                router.delete(route, handler)
            }
            else if (method.toLowerCase() === 'patch') {
                router.patch(route, handler)
            }
        })
    })
})


module.exports = router;