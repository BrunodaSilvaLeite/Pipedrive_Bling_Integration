const orderRepository = require("../repository/orderRepository");
const InsertOrderService = require("../service/InsertOrderService");
const ListWonDealsService = require("../service/ListWonDealsService");

class InsertOrderController {
  async create(req, res) {
    const response = await ListWonDealsService.ListwonDeals();

    const orders = await InsertOrderService.create(response);

    await orderRepository.saveOrder(orders);

    return res.json(orders);
  }
}

module.exports = new InsertOrderController();
