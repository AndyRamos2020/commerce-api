const express = require("express");
const {
  geting,
  Login,
  singin,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = express();

router.get("/", geting);

router.get("/:email", Login);

router.post("/save", singin);

module.exports = router;
