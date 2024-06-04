import React from 'react';
import boximg1 from '../images/Mario and Adrian A.jpg';
import boximg2 from '../images/Mario and Adrian b.jpg';


const About =() =>{
  return (
    <header className="box-header">
        <section>
            <div className="box">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.</p>
            </div>
            <div className="box-img1">
                <img src={boximg1} alt=''/>
            </div>
            <div className="box-img2">
                <img src={boximg2} alt=''/>
            </div>

        </section>
    </header>

  );
}

export default About;
