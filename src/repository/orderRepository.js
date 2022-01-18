const Order = require("../model/Order");

module.exports = {
  async saveOrder(orders) {
    try {
      await orders.map(
        async ({
          numero,
          idPedido,
          Preço: value,
          cliente,
          org_name: orgName,
        }) => {
          const order = await Order.create({
            numero,
            idPedido,
            cliente,
            value,
            orgName,
          });
          return order;
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  },
  async getOrders() {
    const orders = await Order.find();
    return orders;
  },
};
