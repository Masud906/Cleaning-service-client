import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaClone } from "react-icons/fa";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    // const axiosPublic = useAxiosPublic();
    const onSubmit =  (data) => {
        console.log(data)}
    return (
        <div>
             <SectionTitle heading="add an service" subHeading="What's new?"></SectionTitle>
             <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Service Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Racipe Name"
                            {...register('name', {required: true})}
                            required
                            className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Service Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category", {required: true})}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select a category</option>
                                <option value="Home_cleaning">Home_cleaning</option>
                                <option value="urniture_assembly">urniture_assembly</option>
                                <option value="Handyman_service">Handyman_service</option>
                                <option value="office_cleaning">office_cleaning</option>
                                <option value="ac_cleaning">ac_cleaning</option>
                                <option value="WashRoom_cleaning">WashRoom_cleaning</option>
                            </select>
                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', {required: true})}
                                className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* service details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Service Details</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                       
                    </label>

                    <div className="form-control w-full my-6">
                    <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    
                    <button className="btn btn-success">Add Service
                    <FaClone className="ml-4"></FaClone> </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;