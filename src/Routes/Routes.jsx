import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services/Services";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import ManageService from "../pages/Dashboard/ManageService/ManageService";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Contact from "../pages/Dashboard/Contact/Contact";
import About from "../pages/Dashboard/About/About";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Reservation/Reservation";
import MayCart from "../pages/MyCart/MayCart";
import Review from "../pages/Review/Review";
import Booking from "../pages/Booking/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'service',
        element: <Services></Services>
      },
      {
        path: 'order',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      //normal user
      {
          path: 'cart',
          element: <Cart></Cart>
      },
      {
          path: 'userHome',
          element: <UserHome></UserHome>
      },
      {
          path: 'reservation',
          element: <Reservation></Reservation>
      },
      {
          path: 'mycart',
          element: <MayCart></MayCart>
      },
      {
          path: 'review',
          element: <Review></Review>
      },
      {
          path: 'bookings',
          element: <Booking></Booking>
      },
      {
          path: 'payment',
          element: <Payment></Payment>
      },
      // admin routs
      {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
      },
      {
          path: 'addItems',
          element: <AddItems></AddItems>
      },
      {
          path: 'manageservice',
          element: <ManageService></ManageService>
      },
      {
          path: 'users',
          element: <AllUsers></AllUsers>
      },
      {
          path: 'contact',
          element: <Contact></Contact>
      },
      {
          path: 'about',
          element: <About></About>
      }
    ]
  }
]);