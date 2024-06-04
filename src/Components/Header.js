import React from 'react';
import bannerImg from '../images/restauranfood.jpg'


const Header =() =>{
  return (
    <header className="header">
        <section>
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt=''/>
            </div>

        </section>
    </header>

  );
}

export default Header;
