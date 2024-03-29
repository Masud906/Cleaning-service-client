import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <ServiceCard
                    key={item._id}
                    item={item}
                ></ServiceCard>)
            }
        </div>
    );
};

export default OrderTab;