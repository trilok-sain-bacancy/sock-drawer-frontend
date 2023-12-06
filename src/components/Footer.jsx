import footerLogo from '../assets/images/footer_logo.svg'
import { FOOTER_MENUS } from '../utils/constants';
import FooterMenuBox from './FooterMenuBox';

const FooterLogo = () => {
  return (
    <div className="footer_logo">
      <a href="#" className="d-flex">
        <img src={footerLogo} className="me-2" alt="Footer Logo" />
        Granite Coin
      </a>
    </div>
  );
};

const CopyText = () => {
  return (
    <p className="mt-5 copy_text">
      © 2023 Sock Drawer Ltd. <br />
      All rights reserved.
    </p>
  );
};

const Footer = () => {
  return (
    <section className="footer_main">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <FooterLogo  />
            <CopyText />
          </div>
          <div className="col-md-7">
            <div className="footer_menu">
              {FOOTER_MENUS.map((item,index,arr) => (
                <FooterMenuBox key={item.id} {...item} containerClassName={arr.length -1 === index ? "me-0": ""}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
