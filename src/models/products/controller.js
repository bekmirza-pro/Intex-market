const model = require("./model");
const fs = require("fs");
const path = require("path");

module.exports = {
  GET: async (req, res) => {
    try {
      const allProduct = await model.getProduct();

      if (!allProduct) return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "allProduct", data: allProduct });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  GET_ONE: async (req, res) => {
    try {
      const { params } = req;
      const productOne = await model.getOneProduct(params.id);

      if (!productOne) return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "productOne", data: productOne });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  POST: async (req, res) => {
    try {
      const {
        category_id,
        price,
        sale_price,
        quantity,
        frame,
        frame_uz,
        size,
        depth,
        status_id,
        equipment,
        equipment_uz,
      } = req.body;

      let picture_link = `/img/${req.file.filename}`;

      if (
        !category_id ||
        !picture_link ||
        !price ||
        !sale_price ||
        !quantity ||
        !frame ||
        !frame_uz ||
        !size ||
        !depth ||
        !status_id ||
        !equipment ||
        !equipment_uz
      )
        return res.status(400).json({ message: "BAD_REQUEST!" });

      const createProduct = await model.createProduct(
        category_id,
        picture_link,
        price,
        sale_price,
        quantity,
        frame,
        frame_uz,
        size,
        depth,
        status_id,
        equipment,
        equipment_uz
      );

      if (!createProduct)
        return res.status(500).json({ message: "SERVER_CREATED_ERROR!" });

      res.status(201).json({ message: "CREATED", data: createProduct });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  UPDATE: async (req, res) => {
    try {
      const { params, body, file } = req;
      const productOne = await model.getOneProduct(params.id);
      let picture_link;

      if (file) {
        await fs.promises.unlink(
          path.join(__dirname, "../../upload", `${productOne.picture_link}`)
        );
        picture_link = `/img/${file.filename}`;
      }

      const updateProduct = await model.updateProduct(
        body.category_id || null,
        picture_link || null,
        body.price || null,
        body.sale_price || null,
        body.quantity || null,
        body.frame || null,
        body.frame_uz || null,
        body.size || null,
        body.depth || null,
        body.status_id || null,
        body.equipment || null,
        body.equipment_uz || null,
        params.id
      );

      if (!updateProduct)
        return res.status(500).json({ message: "SERVER_UPDETED_ERROR!" });

      res.status(200).json({ message: "UPDATED", data: updateProduct });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  DELETE: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteProduct = await model.deleteProduct(false, id);

      if (!deleteProduct)
        return res.status(500).json({ message: "SERVER_DELETED_ERROR!" });

      res.status(200).json({ message: "DELETED", data: deleteProduct });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
