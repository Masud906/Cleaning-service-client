
import { NavLink, Outlet } from "react-router-dom";
import { FiList, FiPhoneCall, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

// import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();
    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-green-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome />
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaList />
                                    Add Service</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageservice">
                                    <FaBook />
                                    Manage Service</NavLink>
                            </li>
                            {/* <li>
                        <NavLink to="/dashbord/booking">
                            <FaUser />
                            Booking</NavLink>
                    </li> */}
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FiList />
                                    User</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/contact">
                                    <FiPhoneCall />
                                    Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/about">
                                    <FiUser />
                                    About</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome />
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mycart">
                                        <FiShoppingCart />
                                        ({cart.length})
                                        My cart </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd />
                                        Add a review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FiList />
                                        My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/contact">
                                        <FiPhoneCall />
                                        Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/about">
                                        <FiUser />
                                        About</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                            <FaSearch />
                            Order</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">
                            <FaEnvelope />
                            Service</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};



export default DashBoard;