
const { Schema, model } = require('mongoose');
const loanSchema = new Schema({
  user:        { type: Schema.Types.ObjectId, ref: 'User', required: true },
  customer:    { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
  amount:      { type: Number, required: true },
  balance:     { type: Number, required: true },
  dueDate:     { type: Date, required: true },
  status:      { type: String, enum: ['pending','paid','overdue'], default: 'pending' },
}, { timestamps: true });
module.exports = model('Loan', loanSchema);
