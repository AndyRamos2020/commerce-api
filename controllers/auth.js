const Auth = require("../model/Auth.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const service = new Auth();

const singin = async (req, res) => {
  const body = req.body;
  try {
    const auth = await new Auth(body);
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
    const validatePasswords = bcrypt.compareSync(password, Auth.password);
    if (validatePasswords) {
      return res.status(400).json({
        msg: "email/password not found",
      });
    }
    res.json({});
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

const remove = async (req, res) => {
  try {
    await Auth.findByIdAndDelete();
    res.json({ auth });
  } catch (error) {
    console.log(error);
    res.send("hubo un error");
  }
};

const update = async (req, res) => {
  try {
    const newauth = req.body;

    const auth = await Auth.findOneAndUpdate({ _id: req.params._id }, newauth, {
      new: true,
    });

    res.json({ auth });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

module.exports = {
  Login,
  geting,
  remove,
  update,
  singin,
};
