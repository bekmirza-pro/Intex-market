const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const allCategory = await model.getCategory();

      console.log(allCategory);
      if (!allCategory) return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "allCategory", data: allCategory });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  GET_ONE: async (req, res) => {
    try {
      const { params } = req;

      const categoryOne = await model.getOneCategory(params.id);

      if (!categoryOne) return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "categoryOne", data: categoryOne });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  POST: async (req, res) => {
    try {
      const { name, name_uz } = req.body;

      if (!name || !name_uz)
        return res.status(400).json({ message: "BAD_REQUEST!" });

      const createCategory = await model.createCategory(name, name_uz);

      if (!createCategory)
        return res.status(500).json({ message: "SERVER_CREATED_ERROR!" });

      res.status(201).json({ message: "CREATED", data: createCategory });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  UPDATE: async (req, res) => {
    try {
      const { params, body } = req;

      const updateCategory = await model.updateCategory(
        body.name || null,
        body.name_uz || null,
        params.id
      );

      if (!updateCategory)
        return res.status(500).json({ message: "SERVER_updateD_ERROR!" });

      res.status(200).json({ message: "updateD", data: updateCategory });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  DELETE: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteCategory = await model.deleteCategory(false, id);

      if (!deleteCategory)
        return res.status(500).json({ message: "SERVER_DELETED_ERROR!" });

      res.status(200).json({ message: "DELETED", data: deleteCategory });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
