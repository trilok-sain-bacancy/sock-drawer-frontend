import React from 'react';
import { TRANSCTION_STEPS } from '../utils/constants';

const BoxMain = ({ image, title, description}) => {
    return (
      <div className="col-lg-4 mb-3" >
        <div className="box_main">
          <img src={image} className="img-fluid" alt="Crypto Coins" />
          <h4 className="mt-2 mt-lg-5">{title}</h4>
          <p className="mt-3 mb-0 text_gray">{description}</p>
        </div>
      </div>
    );
  };

const TransctionSteps = () => {
  return (
    <section className="metamask_main">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-2">Granite Coin Transaction Steps</h3>
            <h2>How to Transfer, Mint, and Sell Granite Coin using <span>Metamask</span></h2>
          </div>
          <div className="col-lg-6">
            <p className="mb-2">To get started with your Metamask, visit <span>metamask.io</span> for setup
              instructions.
              Ensure you have MATIC for gas fees and USDC/USDT on the Polygon network to buy coins, available
              for purchase below.</p>
            <div className="d-flex mt-4">
              <a href="#" className="me-3">Buy Matic (USA only)</a>
              <a href="#">Buy USDC (USA only)</a>
            </div>
          </div>
        </div>
        <div className="row mt-5">

          {TRANSCTION_STEPS.map((item, index) => (
              <BoxMain key={index}  {...item} />
              ))}

        </div>
      </div>
    </section>
  );
};

export default TransctionSteps;
