import { Carousel } from 'react-bootstrap';
// import './bannerslider.css';
import SearchBox from '../package/SearchBox';
const BannerSlider = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img src="src\assets\images\Alappey Boat 2.jpg" className="d-block w-100" alt="Kerala Nature" />
          <Carousel.Caption>
            <h5>Explore Kerala's Natural Beauty</h5>
            <div className="slider_des">
              <p>Curated Travel Packages Just for You</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <SearchBox />
    </div>
  );
};

export default BannerSlider;
