import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/clenning/Slider-1.jpg';
import img2 from '../../../assets/clenning/Slider-2.jpg';
import img3 from '../../../assets/clenning/Slider-3.jpg';
import img4 from '../../../assets/clenning/Slider-4.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ServiceCategory = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"from 11.00am to 10.00pm"}
            heading={"Seivice Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default ServiceCategory;