import React from 'react';
import './About.css';

const About = () =>{
    return(
        <>
        <div className="about">
            <img src="../img/aboutus.png" alt=""  className='ab-left img' />
           
            <div className="ab-right">
            <h1 className='head'>ABOUT US</h1>
            
                <p className='par me-5'>
                    We are india's leading whindows and doors brand in offering high-quality <br /> products at an affordable rate. We produced and install millons of windows <br /> and doors with in-depth knowledge of the latest technology and market <br /> demand. We are committed to fulfilling the expectations of the customers <br /> within their budget. <br />
                    Our experienced and skilled professionals design and launch many innovative <br /> product series. |It helps our brand stand out from the crowd by showcasing the <br /> widest collections of doors and windows. So far, we have been serving <br /> thousands of clients and obtained good feedback. <br />
                    Whether you need a door/window for home or office, you have tons of options <br /> to choose from in our brand. We renderr an excellent and innovative collection <br /> of 100%customized uPVC andAluminium doors and windows. We provide <br /> enough freedom for the customer to customize their products as per their <br /> needs. Customers can choose th style,finsh,design, and accessories for the <br /> doors or windows.
                </p>
           
            <button type="button" className="btn  butt"  >Explore More </button>
            </div>
            </div>
        </>
    )
}
export default About