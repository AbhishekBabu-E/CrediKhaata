// routes/loans.js
router.use(auth);
router.post('/', controllers.createLoan);
router.get('/', controllers.getLoans);            // filter by status query
router.post('/:id/repay', controllers.recordRepayment);
