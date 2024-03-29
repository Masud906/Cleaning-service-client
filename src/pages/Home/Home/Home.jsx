import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopoularService from "../PopularService/PopoularService";
import ServiceCategory from "../ServiceCategory/ServiceCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCategory></ServiceCategory>
            <PopoularService></PopoularService>
            <Featured></Featured>
            <Contact></Contact>
        </div>
    );
};

export default Home;