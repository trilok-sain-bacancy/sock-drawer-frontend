import React from 'react';
import BuySellTab from './BuySellTab';

const BuySellSection = () => {
  return (
    <section className="buy_sell_main">
      <div className="container">
        <div className='col-xl-6 offset-6'>
            <h2 className='mb-3' style={{ color: "#101010", fontSize: 25,}}>Transaction Instructions for Granite Coin for Buy & Sell</h2>
        </div>
        <div className="box_main">
        <div className="row align-items-center">
          <BuySellTab />
            <div className="col-xl-6 py-3">
              <video 
                width="100%" 
                height="100%" 
                controls 
                autoPlay={true}
                loop
                muted
              >
                <source 
                  src="https://d3jpyvkq0qzcre.cloudfront.net/CPU3VJERZSGK2ISN.mp4" 
                  type="video/mp4"
                />
                  Your browser does not support the video tag.
              </video>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellSection;
