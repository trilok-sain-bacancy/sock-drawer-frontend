import Slider from 'react-slick';
import { SLIDER_DATA } from '../utils/constants';

const SliderItem = ({ image, title, description }) => {
  return (
    <div>
      <img src={image} className="img-fluid" alt="Slider" />
      <h4>{title}</h4>
      <p>{description} <a href="#">see more</a></p>
    </div>
  );
};

const SliderMain = () => {

  const sliderSetting = {
         slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  }

  return (
    <section className="slider_main">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <h3 className="mb-2">Token Value Enhancement for a Thriving Ecosystem</h3>
            <h2>How about "<span>Granite Coin</span>: Pioneering Unwavering Liquidity and Self-Governance in Finance"?</h2>
          </div>
          <div className="col-md-5 text-lg-end">
            <button className="btn view_more text-white mt-3" type="submit">View More</button>
          </div>
          <div className="col-md-12 mt-lg-5 mt-3">
            <div className="my-slider row mb-0">
              <Slider {...sliderSetting}>
              {SLIDER_DATA.map((item) => (
                <SliderItem
                  key={item.id}
                  {...item}
                />
              ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderMain;
