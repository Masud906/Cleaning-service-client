import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const ServiceCard = ({ item }) => {
    const { name, image, price, details, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            // send card to item
         const cartItem = {
            serviceId: _id,
            email: user.email,
            name, 
            image,
            price
         }
        axiosSecure.post('/carts', cartItem)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({ 
                    position: "top-end",
                    icon: "success",
                    title: `${name} added ot your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  //refatch the cart
                  refetch();
            }
        })

        }
        else {
            Swal.fire({
                title: "you are not Loggin in?",
                text: "Please login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //sent th user
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mr-10 mt-10 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body items-center text-center flex flex-col">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-success">Order_Service</button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;