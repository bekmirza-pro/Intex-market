const model = require("./model");
const { hashPassword } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");

module.exports = {
  POST: async (req, res) => {
    try {
      const { firstName, lastName, username, password, roleId } = req.body;

      if (
        !firstName ||
        !lastName ||
        !username ||
        !password ||
        !roleId
      )
        return res.status(400).json({ message: "BAD_REQUEST" });

      const hashedPassword = await hashPassword(password);

      const createUser = await model.createUser(
        firstName,
        lastName,
        username,
        hashedPassword,
        roleId
      );

      if (!createUser)
        return res.status(500).json({ message: "SERVER_CREATED_ERROR" });

      const token = sign({ userId: createUser.id });

      res
        .status(201)
        .json({ message: "CREATED", data: { user: createUser, token } });
    } catch (error) {
      res
        .status(400)
        .json({ message: `This username (${req.body.username}) already use` });
    }
  },
};
