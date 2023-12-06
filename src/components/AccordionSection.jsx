import React from 'react';
import coinImage from '../assets/images/right_img.jpg';
import { ACCORDION_DATA } from '../utils/constants';
import AccordionItem from './AccordionItem';

const AccordionSection = () => {
    return (
        <section className="custom_accordion_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="fw-bold text-white mb-3">Empowering Innovation and Growth</h3>
                        <h2 className="fw-bolder mb-3 mb-lg-5">
                            Introducing the Granite Coin <span>Grants Initiative</span>
                        </h2>
                        <button className="btn btn_01 mb-3" type="submit">Apply Now</button>
                    </div>
                    <div className="col-md-6">
                        <p className="text-white text2">Granite Coin, a pioneer in blockchain technology, is thrilled to
                            announce the expansion of its Grants Initiative, aimed at fostering innovative projects. We
                            welcome visionary individuals and teams with a passion for incorporating Granite Coin into their
                            initiatives to take advantage of this exceptional opportunity. Join us in shaping the future of
                            blockchain innovation.
                        </p>
                    </div>
                </div>
                <div className="row mt-lg-5 mt-2">
                    <div className="col-md-6">
                        <div className="accordion" id="accordionExample">
                            {ACCORDION_DATA.map(item => <AccordionItem {...item} />)}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={coinImage} className="img-fluid" alt="Right" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccordionSection;
