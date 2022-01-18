const express = require('express');
const router = express.Router();
const InsertOrderController = require('./controller/InsertOrderController');
const ListAllOrdersController = require('./controller/ListAllOrdersController');

router.post("/CreateOrders", InsertOrderController.create);
router.get("/ListAllOrders", ListAllOrdersController.handle);
module.exports = router;