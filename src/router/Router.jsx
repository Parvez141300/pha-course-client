import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AddCourse from "../pages/AddCourse/AddCourse";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageCourses from "../pages/ManageCourses/ManageCourses";
import AllCourses from "../pages/All Courses/AllCourses";
import LoadingState from "../LoadingState/LoadingState";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import EditCourse from "../pages/EditCourse/EditCourse";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-courses",
        loader: () => fetch("http://localhost:3000/courses"),
        hydrateFallbackElement: <LoadingState></LoadingState>,
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/add-course",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/course-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
        hydrateFallbackElement: <LoadingState></LoadingState>,
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/manage-courses",
        element: (
          <PrivateRoute>
            <ManageCourses></ManageCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
        hydrateFallbackElement: <LoadingState></LoadingState>,
        element: (
          <PrivateRoute>
            <EditCourse></EditCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
