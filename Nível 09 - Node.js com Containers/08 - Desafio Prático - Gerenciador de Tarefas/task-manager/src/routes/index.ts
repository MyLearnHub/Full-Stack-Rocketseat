import { Router } from "express"

import { usersRoutes } from "./users-routes"
import { teamsRoutes } from "./teams-routes";
import { tasksRoutes } from "./tasks-routes";
import { authRoutes } from "./auth-routes";

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/auth", authRoutes);
routes.use("/teams", teamsRoutes);
routes.use("/tasks", tasksRoutes);

export { routes }
