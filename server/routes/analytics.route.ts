import express from "express"
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getCourseAnalytics, getOrderAnalytics, getUserAnalytics } from "../controllers/analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get("/get-users-analytics", isAuthenticated, authorizeRoles("admin"), getUserAnalytics)

analyticsRouter.get("/get-orders-analytics", isAuthenticated, authorizeRoles("admin"), getOrderAnalytics)

analyticsRouter.get("/get-courses-analytics", isAuthenticated, authorizeRoles("admin"), getCourseAnalytics)

export default analyticsRouter
