const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  // windowMs: 3 * 60 *  1000, // 3 minutes
  windowMs: 5 * 1000, // 5 seconds
  // max: 10,
  max: 300, // Limit each IP to 300 requests per windowMs
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
