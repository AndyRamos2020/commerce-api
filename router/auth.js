const express = require("express");
const {
  geting,
  Login,
  remove,
  update,
  singin,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = express();

router.get("/", geting);

router.get("/:email/:password", Login);

router.post("/save", singin);

router.delete("/delete/:id", remove);

router.put("/update/:id", update);

module.exports = router;
