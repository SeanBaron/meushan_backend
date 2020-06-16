const expressJwt = require('express-jwt');
const config = require('../../config.json');

module.exports = jwt;

function jwt() {
    const { secret } = config;
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            { url: '/', methods: ['GET'] },
            { url: '/api/configurations', methods: ['GET'] },
            { url: '/api/deliverydays', methods: ['GET'] },
            { url: '/api/orders', methods: ['POST'] },
            { url: '/api/packagetypes', methods: ['GET'] },
            { url: '/api/areas', methods: ['GET'] },
            { url: '/api/areas', methods: ['POST'] },
            { url: '/api/categories', methods: ['GET'] },
            { url: '/api/categories', methods: ['POST'] },
            { url: '/api/users/authenticate', methods: ['POST'] }
        ]
    });
}