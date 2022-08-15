const model = require("./model");

module.exports = {
  GET_CATEGORY: async (req, res) => {
    try {
      const allCategory = await model.getCategory();

      if (!allCategory)
        return res.status(404).json({ message: "NOT FOUND!" });

      res.status(200).json({ message: "allCategory", data: allCategory });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  GET_PRODUCT_FILTER: async (req, res) => {
    try {
      const { categoryId } = req.params;
      const filterProduct = await model.getProductFilter(categoryId);

      res.status(200).json({ message: "Filter Product", data: filterProduct });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
  GET_PRODUCT: async (req, res) => {
    try {
      const allProduct = await model.getProductAll();

      res.status(200).json({ message: "allProduct", data: allProduct });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
  GET_PRODUCT_ONE: async (req, res) => {
    try {
      const { productId } = req.params;
      console.log(productId)
      const product = await model.getProduct(productId);
      console.log(product);
      res.status(200).json({ message: "Get product", data: product });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
  GET_SITE: async (req, res) => {
    try {
      const siteInfo = await model.getSiteInfo();

      res.status(200).json({ message: "Site Info", data: siteInfo });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
  ORDER_POST: async (req, res) => {
    try {
      const { productId, name, phoneNumber, address, location } = req.body;

      const order = await model.postOrder(productId, name, phoneNumber, address, location);

      res.status(201).json({ message: "CREATED", data: order });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
  CONSULTATION_POST: async (req, res) => {
    try {
      const { name, phoneNumber } = req.body;
      console.log(name, phoneNumber);
      const consultation = await model.postConsultation(name, phoneNumber);

      res.status(201).json({ message: "CREATED", data: consultation });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};