const express = require("express");
const {
  index,
  create,
  cont_post,
  cont_data,
  data_dlt,
} = require("../controllers/contControllers");

const router = express.Router();

router.get("/", index);

router.post("/", cont_post);

router.get("/create", create);

router.get("/:id", cont_data);

router.delete("/:id", data_dlt);

module.exports = router;
