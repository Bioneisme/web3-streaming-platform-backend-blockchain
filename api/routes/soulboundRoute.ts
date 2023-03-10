import {Router} from "express";
import soulBoundController from "../controllers/soulboundController";

const router: Router = Router();

router.post("/mintSoulBound", soulBoundController.mintSoulBound);

export default router;