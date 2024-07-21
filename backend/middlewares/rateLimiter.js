// backend/middlewares/rateLimiter.js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 *  1000, // 1 minute
//   windowMs: 1 * 60 * 1000, // 1 minute
  max: 2, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after a minute',
  headers: true,
  handler: (req, res) => {
    console.log('Rate limit reached for IP:', req.ip);
    console.log('Request headers:', req.headers);
    console.log('Request time:', new Date().toISOString());
    res.status(429).send('Too many requests from this IP, please try again after a minute');
  }
});

module.exports = limiter;
