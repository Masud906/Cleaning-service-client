import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Reservation = () => {
  return (
    <div>
      <SectionTitle
        heading="Reservation"
        subHeading="Reservation"
      ></SectionTitle>
      <div className="diff aspect-[14/6]">
        <div className="diff-item-1">
          <div className="bg-green-400 text-primary-content text-9xl font-black grid place-content-center">
            processing
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-orange-300 text-9xl font-black grid place-content-center">
            processing
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Reservation;
