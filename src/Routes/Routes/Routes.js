import DashBoardLayout from "../../layouts/DashBoardLayout";
import About from "../../Pages/About/About";
import Appoinment from "../../Pages/Appoinment/Appointment/Appoinment";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/DashBoard/ManegeDoctors/ManageDoctors";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layouts/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            }
        ]
    }
])