const { Router } = require("express");
const {
  getProductController,
  addProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/productos.js");

const router = Router();

router.get("/getproducts", getProductController);

router.post("/addproducts", addProductController);

router.put("/updateproducts", updateProductController);

router.post("/deleteproducts", deleteProductController);

module.exports= router;
