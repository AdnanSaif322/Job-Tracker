import { Router } from "express";
import {
  createJob,
  deleteJob,
  editJob,
  getAlljobs,
  getSingleJob,
} from "../controllers/jobController.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/validationMiddleware.js";
const router = Router();

// GET ALL JOBS
router.get("/", getAlljobs);
router.post("/", validateJobInput, createJob);
router.get("/:id", validateIdParam, getSingleJob);
router.patch("/:id", validateIdParam, validateJobInput, editJob);
router.delete("/:id", validateIdParam, deleteJob);

export default router;
