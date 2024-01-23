import Slider from 'react-slick';
import { SLIDER_DATA } from '../utils/constants';
import { useState } from 'react';

const SliderItem = ({ image, title, description }) => {
  const [showFull, toggle ] = useState(false)
  return (
    <div className='position-relative'>
      <div  style={{ height:470, opacity: showFull ? 0.1 : 1, border: showFull? "solid black 0px": ""}}>
      <img src={image} className="img-fluid" alt="Slider" />
      <h4>{title}</h4>
      <p>{description.detail.substring(0, 80)} <button className='border-0 bg-transparent' onClick={() => toggle(prev => !prev)}>see more</button></p>
      </div>
      {showFull && <div className='position-absolute top-0 p-3 h-100 border-0'>
      <p>{description.detail}</p>
      <h5 className='pt-2 pb-2 font-weight-bold'>{description.heading}</h5>
      <p>{description.reference}</p>
      <div>
        <p>
          <button className='border-0 bg-transparent' onClick={() => toggle(prev => !prev)}>see less</button>
        </p>
      </div>
      </div>}
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
