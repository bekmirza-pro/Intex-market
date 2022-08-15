const model = require("./model");
const { comparePassword } = require("../../utils/bcrypt");
const { sign } = require("../../utils/jwt");

module.exports = {
  POST: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password)
        return res.status(400).json({ message: "BAD_REQUEST!" });

      const findUser = await model.findUser(username);

      if (!findUser) return res.status(404).json({ status: 404, message: "User not found" });

      const comparedPassword = await comparePassword(
        password,
        findUser.password
      );

      if (!comparedPassword)
        return res.status(400).json({ status: "400", message: "Incorrect password" });

      const token = sign({ userId: findUser.id });

      res.status(200).json({ status: 200, message: "OK", data: { token } });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Server error" });
    }
  },
};
