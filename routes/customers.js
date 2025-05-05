// routes/customers.js
router.use(auth);
router.post('/', controllers.createCustomer);
router.get('/', controllers.getCustomers);
router.put('/:id', controllers.updateCustomer);
router.delete('/:id', controllers.deleteCustomer);
