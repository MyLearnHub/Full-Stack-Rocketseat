import { Router } from "express";

import { TicketsController } from "@/controllers/tickets-controller";

const ticketsRoutes = Router();
const ticketsController = new TicketsController();

import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";

ticketsRoutes.post(
  "/",
  verifyUserAuthorization(["employee", "customer"]),
  ticketsController.create
);

ticketsRoutes.get(
  "/",
  verifyUserAuthorization(["manager"]),
  ticketsController.index
);

ticketsRoutes.get(
  "/:id",
  verifyUserAuthorization(["employee", "manager"]),
  ticketsController.show
);

export { ticketsRoutes };
