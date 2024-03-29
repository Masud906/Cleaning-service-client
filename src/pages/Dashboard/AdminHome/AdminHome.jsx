import { FaAd, FaDollarSign, FaUsers } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { FiShoppingCart } from "react-icons/fi";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl">
                <span className="font-bold">Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }


            </h2>
            <div className="stats shadow">

                <div className="stat bg-blue-200">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className="text-3xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">$318.00</div>
                    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                </div>

                <div className="stat bg-orange-200">
                    <div className="stat-figure text-secondary">
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div className="stat-title">Users</div>
                    {/* <div className="stat-value">{stats.users}</div> */}
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat bg-red-200">
                    <div className="stat-figure text-secondary">
                        <FiShoppingCart className="text-3xl"></FiShoppingCart>
                    </div>
                    <div className="stat-title">service Items</div>
                    {/* <div className="stat-value">{stats.menuItems}</div> */}
                    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                </div>

                <div className="stat bg-green-200">
                    <div className="stat-figure text-secondary">
                        <FaAd className="text-3xl"></FaAd>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">18</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>
                <div className="stat bg-teal-200">
                    <div className="stat-figure text-secondary">
                        {/* <FaAd className="text-3xl"></FaAd> */}
                    </div>
                    {/* <div className="stat-title">Orders</div> */}
                    <div className="stat-value">Cleaning <br /> service</div>
                    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                </div>


            </div>
            <div className="mt-10 diff aspect-[14/6]">
                <div className="diff-item-1">
                    <div className="bg-green-400 text-primary-content text-9xl font-black grid place-content-center">processing</div>
                </div>
                <div className="diff-item-2">
                    <div className="bg-orange-300 text-9xl font-black grid place-content-center">processing</div>
                </div>
                <div className="diff-resizer"></div>
            </div>
        </div>
    );
};

export default AdminHome;
