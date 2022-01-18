const ListAllOrdersService = require("../service/ListAllOrdersService");

class ListAllOrdersController {
  async handle(req, res) {
    const orders = await ListAllOrdersService.execute();

    return res.json(orders);
  }
}

module.exports = new ListAllOrdersController();
