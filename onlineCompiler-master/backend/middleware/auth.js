const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if(!token) return res.status(401).json({ msg: 'No token, autherisation denied' });

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: 'token is not valid' });
    }
}

module.exports = auth;




// const config = require('config');
// const jwt = require('jsonwebtoken');

// function auth(req, res, next) {
//     const authHeader = req.header('Authorization');

//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ msg: 'No token, authorization denied' });
//     }

//     const token = authHeader.split(' ')[1]; // Extract token

//     try {
//         const decoded = jwt.verify(token, config.get('jwtSecret'));
//         req.user = decoded;
//         next();
//     } catch (e) {
//         res.status(400).json({ msg: 'Token is not valid' });
//     }
// }

// module.exports = auth;
