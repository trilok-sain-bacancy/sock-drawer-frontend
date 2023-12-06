import React from 'react';
import BuySellTab from './BuySellTab';

const BuySellSection = () => {
  return (
    <section className="buy_sell_main">
      <div className="container">
        <div className="box_main">
        <div className="row align-items-center">
          <BuySellTab />
            <div className="col-xl-6 py-3">
          <h2>Transaction Instructions for Granite Coin for Buy & Sell</h2>
          <p className="mt-3 text_01">Select your desired amount and click the corresponding option using the input field and buttons at the top of the page for buying and selling Granite Coin.</p>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellSection;
