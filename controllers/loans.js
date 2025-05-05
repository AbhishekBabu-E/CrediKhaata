exports.recordRepayment = async (req,res) => {
  const loan = await Loan.findById(req.params.id);
  loan.balance -= req.body.amount;
  if (loan.balance <= 0) loan.status = 'paid';
  await loan.save();
  res.json({ message: 'Repayment recorded', balance: loan.balance });
};
