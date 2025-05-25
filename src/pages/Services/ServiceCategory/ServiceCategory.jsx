import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ServiceItem from "../../Shared/SeiviceItem/ServiceItem";

const ServiceCategory = ({ services, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mt-12">
        {services.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}
      </div>
      <Link to="/order">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Visit Service
        </button>
      </Link>
    </div>
  );
};

export default ServiceCategory;
