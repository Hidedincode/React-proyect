import React from "react";

import './aboutus.css'
import Footer from '../Home/Components/footer';


const AboutUs = ()=>{

    return(
        <div>
            <div className="div-aboutus">
            <div className="about-us">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident dolore nam aspernatur dolorum, sapiente deleniti incidunt sed quidem sequi laborum quas consequuntur consequatur saepe! Accusamus quidem asperiores nulla facilis!</p>    
            </div>
            <div className="about-us">
                <h1>Where do we meet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni voluptatem perspiciatis ullam, placeat iure autem numquam incidunt veniam cum tenetur. Nemo eaque ad nesciunt quis, quaerat harum provident nulla voluptas!  </p>
            </div>
            <div className="about-us">
                <h1>Supliers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, assumenda iure labore ex quidem, expedita explicabo temporibus perspiciatis eius provident ipsum non, id molestias placeat. Quod repellendus nam ratione accusantium?</p>
            </div>
        </div>
        <Footer/>
        </div>
    )


}

export default AboutUs;