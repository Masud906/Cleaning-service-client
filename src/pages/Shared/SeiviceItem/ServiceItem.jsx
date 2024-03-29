
const ServiceItem = ({item}) => {
    const {name, image, price, details} = item
    return (
        <div className="flex space-x-4">
            <img className="w-[240px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{details}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default ServiceItem;