import express from "express";
import { editCourse, getAllCourses, getSignleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post("/create-course",isAuthenticated, authorizeRoles("admin"), uploadCourse);

courseRouter.put("/edit-course/:id",isAuthenticated, authorizeRoles("admin"), editCourse);

courseRouter.get("/get-course/:id",getSignleCourse);

courseRouter.get("/get-courses",getAllCourses);

export default courseRouter