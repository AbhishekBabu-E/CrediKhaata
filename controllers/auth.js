// controllers/auth.js
const bcrypt = require('bcryptjs');
// Hash before save
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(req.body.password, salt);
