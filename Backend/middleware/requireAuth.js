const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
    const token = req.cookies.Authorization;
    if (!token) return res.status(401).send('Unauthorized');
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) return res.status(403).send('Forbidden');
        req.user = user;
        next();
    });
}

module.exports = requireAuth;