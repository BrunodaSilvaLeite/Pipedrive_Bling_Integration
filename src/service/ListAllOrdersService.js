const orderRepository = require('../repository/orderRepository');

class ListAllOrdersService{
    async execute(){
    const orders = await orderRepository.getOrders()

    return orders
    }
}
module.exports = new ListAllOrdersService();