import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware.js";
import { ProductsController } from "../controllers/products-controller.js";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);

// Middleware local em uma rota especifica.
productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };
