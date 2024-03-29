import serviceImg from '../../../assets/cleanCover/cover2.jpg'
import serviceImg6 from '../../../assets/cleanCover/cover6.jpg'
import serviceImg4 from '../../../assets/cleanCover/cover4.jpg'
import serviceImg7 from '../../../assets/cleanCover/cover7.jpg'
import serviceImg8 from '../../../assets/cleanCover/cover8.jpg'
import serviceImg9 from '../../../assets/cleanCover/cover9.jpg'
import useService from "../../../hooks/useService";
//import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceCategory from "../ServiceCategory/ServiceCategory";

const Services = () => {
    const [service] = useService();
    const furniture = service.filter(item => item.category === 'furniture_assembly')
    const handyman = service.filter(item => item.category === 'Handyman_service')
    const office = service.filter(item => item.category === 'office_cleaning')
    const ac = service.filter(item => item.category === 'ac_cleaning')
    const toilet = service.filter(item => item.category === 'Toilet_cleaning')
    const septicTank = service.filter(item => item.category === 'septic_tank_cleaning')
    return (
        <div>
          <ServiceCategory 
          services={furniture}
          title="furniture_cleaning"
          img={serviceImg}
          ></ServiceCategory>
          {/* Hayndyman */}
          <ServiceCategory
          services={handyman}
          title="handyman"
          img={serviceImg6}
          ></ServiceCategory>
          {/* office */}
          <ServiceCategory
          services={office}
          title="office cleaning"
          img={serviceImg4}
          ></ServiceCategory>
          {/* ac  */}
          <ServiceCategory
          services={ac}
          title="ac service"
          img={serviceImg7}
          ></ServiceCategory>
          {/* toilet  */}
          <ServiceCategory
          services={toilet}
          title="washroom_cleaning"
          img={serviceImg8}
          ></ServiceCategory>
          {/* septicTank  */}
          <ServiceCategory
          services={septicTank}
          title="septicTank_service"
          img={serviceImg9}
          ></ServiceCategory>
        </div>
    );
};

export default Services;