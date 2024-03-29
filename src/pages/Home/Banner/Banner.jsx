import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/clenning/baner1.png';
import img2 from '../../../assets/clenning/baner3.png';
import img3 from '../../../assets/clenning/baner4.png';
import img4 from '../../../assets/clenning/baner5.png';

const Banner = () => {
    return (
        <Carousel className=''>
            <div className=''>
                <img src={img1} />
            </div>
            <div className=''>
                <img src={img2} />
            </div>
            <div className=''>
                <img src={img3} />
            </div>
            <div className=''>
                <img src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;