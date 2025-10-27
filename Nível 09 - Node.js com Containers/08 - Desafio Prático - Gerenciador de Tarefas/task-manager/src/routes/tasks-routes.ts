import { Router } from "express";
import { TasksController } from "@/controllers/tasks-controller";
import { ensureAuthenticated } from "@/middlewares/auth";
import { ensureAdmin } from "@/middlewares/role";

const tasksRoutes = Router();
const tasksController = new TasksController();

tasksRoutes.post("/", ensureAuthenticated, tasksController.create);
tasksRoutes.get("/", ensureAuthenticated, tasksController.list);
tasksRoutes.put("/:id", ensureAuthenticated, tasksController.update);
tasksRoutes.delete("/:id", ensureAuthenticated, ensureAdmin, tasksController.delete);

export { tasksRoutes };
