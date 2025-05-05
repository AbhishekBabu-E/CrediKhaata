
const { Schema, model } = require('mongoose');
const customerSchema = new Schema({
  user:       { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name:       { type: String, required: true },
  phone:      { type: String, validate: { validator: v => /^\d{10}$/.test(v) } },
  trustScore: { type: Number, min: 0, max: 100 },
}, { timestamps: true });
module.exports = model('Customer', customerSchema);
