import { Router } from "express";
import { TeamsController } from "@/controllers/teams-controller";
import { ensureAuthenticated } from "@/middlewares/auth";
import { ensureAdmin } from "@/middlewares/role";

const teamsRoutes = Router();
const teamsController = new TeamsController();

teamsRoutes.post("/", ensureAuthenticated, ensureAdmin, teamsController.create);
teamsRoutes.get("/", ensureAuthenticated, teamsController.list);
teamsRoutes.post("/:id/members", ensureAuthenticated, ensureAdmin, teamsController.addMember);
teamsRoutes.delete("/:id/members/:userId", ensureAuthenticated, ensureAdmin, teamsController.removeMember);

export { teamsRoutes };
