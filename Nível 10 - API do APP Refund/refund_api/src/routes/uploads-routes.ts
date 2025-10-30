import { Router } from "express";
import multer from "multer";

import uploadConfig from "@/configs/upload";
import { verifyUserAuthorization } from "@/middlewares/verify-user-authorization";
import { UploadController } from "@/controllers/uploads-controller";

const uploadsRoutes = Router();
const uploadController = new UploadController();

const upload = multer(uploadConfig.MULTER);

uploadsRoutes.use(verifyUserAuthorization(["employee"]));
uploadsRoutes.post("/", upload.single("file"), uploadController.create);

export { uploadsRoutes };
