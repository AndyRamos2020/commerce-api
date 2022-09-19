const Auth = require("../model/Auth.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generarJWT } = require("../helpers/generar-jwt");

const service = new Auth();

const singin = async (req, res) => {
  const body = req.body;
  try {
    const auth = await new Auth(body);
    if (auth.email === body.email) {
      return res.status(400).json({
        msg: "the Email exists",
      });
    }
    auth.password = await bcrypt.hash(auth.password, 10);
    auth.save();
    res.status(201).json(auth);
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "email/password not found",
      });
    }
    await bcrypt.hash(password, 10);
    const validatePasswords = await bcrypt.compare(password, user.password);
    if (!validatePasswords) {
      return res.status(400).json({
        msg: "email/password not found",
      });
    }

    const token = await generarJWT(user.id);
    res.status(201).json({ token: token });
  } catch (error) {
    console.log(error);
  }
};

const geting = async (req, res) => {
  try {
    const auth = await Auth.find();
    res.json({ auth });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (body.email !== Auth.email) {
      return res.status(400).json({msg: "the email can't update please"})
    }
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

module.exports = {
  Login,
  geting,
  singin,
  update,
};
