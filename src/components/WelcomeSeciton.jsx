import React from 'react';
import bannerImageUrl from '../assets/images/banner.svg';
import playImg from '../assets/images/Play.svg';

const WelcomeText = () => {
  return (
    <div className="col-lg-7 mb-lg-0 mb-3">
      <p className="mb-2">Welcome to Granite Coin</p>
      <h2>
        Your Premier Destination for <span>Buying</span> &amp; <span>Selling</span> Cryptocurrency
      </h2>
      <div className="d-flex mt-5">
        <a href="#" className="green_btn d-flex align-items-center justify-content-center me-3">
          Verify Now
        </a>
        <a href="#" className="d-flex align-items-center justify-content-center">
          <img src={playImg} className="img-fluid me-2" alt="Play Icon" />Watch Tutorial
        </a>
      </div>
    </div>
  );
};

const BannerImage = () => {
  return (
    <div className="col-lg-5">
      <img src={bannerImageUrl} className="img-fluid" alt="Banner" />
    </div>
  );
};

const WelcomeSection = () => {
  return (
    <section className="banner_main">
      <div className="container">
        <div className="row">
          <WelcomeText />
          <BannerImage />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
