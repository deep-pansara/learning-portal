import express from "express";
import { addAnswer, addQuestion, addReplyReview, addReview, deleteCourse, editCourse, getAllCourses, getAllCoursesAdmin, getCourseByUser, getSignleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
const courseRouter = express.Router();

courseRouter.post("/create-course",isAuthenticated, authorizeRoles("admin"), uploadCourse);

courseRouter.put("/edit-course/:id",isAuthenticated, authorizeRoles("admin"), editCourse);

courseRouter.get("/get-course/:id",getSignleCourse);

courseRouter.get("/get-courses",getAllCourses);

courseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);

courseRouter.put("/add-question",isAuthenticated,addQuestion);

courseRouter.put("/add-answer",isAuthenticated,addAnswer);

courseRouter.put("/add-review/:id",isAuthenticated,addReview);

courseRouter.put("/add-reply",isAuthenticated,authorizeRoles("admin"),addReplyReview);

courseRouter.get("/get-all-courses", isAuthenticated, authorizeRoles("admin"),getAllCoursesAdmin )

courseRouter.delete("/delete-course/:id",isAuthenticated,authorizeRoles("admin"),deleteCourse)


export default courseRouter