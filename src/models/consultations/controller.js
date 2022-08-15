const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const allConsultation = await model.getConsultation();

      if (!allConsultation)
        return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "allConsultation", data: allConsultation });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  GET_ONE: async (req, res) => {
    try {
      const { params } = req;

      const consultationOne = await model.getOneConsultation(params.id);

      if (!consultationOne)
        return res.status(404).json({ message: "NOT FOUND!" });

      res.status(201).json({ message: "consultationOne", data: consultationOne });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  UPDATE: async (req, res) => {
    try {
      const { params, body } = req;

      const updateConsultation = await model.updateConsultation(body.status, params.id);

      if (!updateConsultation)
        return res.status(500).json({ message: "SERVER_UPDATED_ERROR!" });

      res.status(200).json({ message: "UPDATED", data: updateConsultation });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },

  DELETE: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteConsultation = await model.deleteConsultation(false, id);

      if (!deleteConsultation)
        return res.status(500).json({ message: "SERVER_DELETED_ERROR!" });

      res.status(200).json({ message: "DELETED", data: deleteConsultation });
    } catch (error) {
      res.status(500).json({ message: "SERVER_ERROR!" });
    }
  },
};
