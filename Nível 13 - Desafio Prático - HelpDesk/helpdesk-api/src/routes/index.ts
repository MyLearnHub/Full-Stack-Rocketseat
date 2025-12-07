import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { ticketsRoutes } from "./tickets-routes";
import { sessionsRoutes } from "./sessions-routes";

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const routes = Router();

// Rotas publicas
routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRoutes);

// Rotas privadas
routes.use(ensureAuthenticated);
routes.use("/tickets", ticketsRoutes);

export { routes };
