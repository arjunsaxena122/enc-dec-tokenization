import { Router } from "express";
import {
  decodedDataFromEncodedToken,
  encodedTokenFromUserInput,
} from "../controllers/token.controller.js";

const router = Router();

router.route("/encode-token").post(encodedTokenFromUserInput);
router.route("/decode-token").post(decodedDataFromEncodedToken);

export default router;
