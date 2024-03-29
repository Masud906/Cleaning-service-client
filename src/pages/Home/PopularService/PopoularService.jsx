import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceItem from "../../Shared/SeiviceItem/ServiceItem";
import useService from "../../../hooks/useService";

const PopoularService = () => {
    const [service] = useService();
    const popular = service.filter(item => item.category === 'Home_cleaning')
   
    return (
        <section className="mb-10">
            <SectionTitle
            heading="From Our Service"
            subHeading="Popular Service"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item=> <ServiceItem
                    key={item._id}
                    item={item}
                    ></ServiceItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Visit Service</button>
        </section>
    );
};

export default PopoularService;