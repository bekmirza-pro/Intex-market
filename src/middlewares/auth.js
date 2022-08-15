const { verify } = require("../utils/jwt");

module.exports = {
  AUTH_USER: (req, res, next) => {
    try {
      const { token } = req.headers;
      const { userId } = verify(token);

      if (!userId)
        return res
          .status(401)
          .json({ message: "Login qilin yoki Registratsiyadan o'ting!" });

      req.body.userId = userId;

      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Login qilin yoki Registratsiyadan o'ting!" });
    }
  },
};
