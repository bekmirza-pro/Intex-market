const model = require("./model");
const productModel = require('../products/model')

module.exports = {
  GET: async (req, res) => {
    try {
      const allOrders = await model.getOrders();

      if (!allOrders) return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "allOrders", data: allOrders });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  
  UPDATE: async (req, res) => {
    try {
      const { params, body } = req;

      const findOrder = await model.findOrder(params.id)
      let quantity

      const productOne = await productModel.getOneProduct(findOrder.product_id)
      if (!productOne) {
        return res.status(404).json({ message: "NOT FOUND!" });
      }else if(body.status == false){
          quantity = JSON.parse(productOne.quantity) + 1
      }else if(body.status == true){
          quantity = productOne.quantity - 1
      }

      await productModel.updateProduct(
        null,
        null,
        null,
        null,
        quantity || null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        productOne.id
      );

      const updateOrder = await model.updateOrders(
        body.status,
        params.id
      );

      if (!updateOrder)
        return res.status(500).json({ message: "SERVER_UPDETED_ERROR!" });

      res.status(200).json({ message: "UPDATED", data: updateOrder });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  DELETE: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteOrders = await model.deleteOrders(false, id);

      if (!deleteOrders)
        return res.status(500).json({ message: "SERVER_DELETED_ERROR!" });

      res.status(200).json({ message: "DELETED", data: deleteOrders });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
