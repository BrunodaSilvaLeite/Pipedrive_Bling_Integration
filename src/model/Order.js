const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true
  },
  idPedido: {
    type: Number,
    required: true
  },

  value: {
    type: Number,
    required: true
  },
  cliente: {
    type: String,
  
  },
  orgName: {
    type: String,
  
  }
},
{
  timestamps: true,
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;