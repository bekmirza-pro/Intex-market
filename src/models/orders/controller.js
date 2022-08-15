const model = require("./model");

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
