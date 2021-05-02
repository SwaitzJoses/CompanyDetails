import express from "express";
const router = express.Router();
import {
  getCompany,
  getCompanyById,
  deleteCompany,
  createCompany,
  updateCompany,
  createOwner,
  createEmployee,
   
  
 
} from "../controllers/companyControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getCompany).post(protect, admin, createCompany);

router
  .route("/:id")
  .get(getCompanyById)
  .delete(protect, admin, deleteCompany)
  .put(protect, admin, updateCompany);

  router.route("/:id/owner").post(protect, createOwner);
  router.route("/:id/employee").post(protect, createEmployee);
export default router;
 