import React from 'react'
import {AiOutlineStar} from "react-icons/ai";
import customers from '../customers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#495E57" }}
      onClick={onClick}
    />
  );
}

const Testimonials =() =>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <div className="t-container">
            <h2>Testimonials</h2>
            <Slider {...settings}>

            {
            customers.map(customer => <div key={customer.id} className="t-items">
                <img src={customer.img_url} alt=''/>
                <div className="t-content">
                    <div className="t-heading">
                        <h5>{customer.name}</h5>
                        <p>{customer.position}</p>
                        {Array(customer.stars).fill().map((_, i) => (
                        <span className='star' key={i}>
                            <AiOutlineStar/>
                        </span>
                        ))}
                    </div>
                    <p>{customer.disc}</p>

                </div>


            </div>)
            }
            </Slider>
        </div>
  
   );
};



export default Testimonials;