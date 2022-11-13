import React from 'react'
import './Hero.css'
import Logo from '../../assets/img/logo-white.png'
import clglogo from '../../assets/img/MEAEC.png'
import date from '../../assets/img/date.png'
import chin from '../../assets/img/chin.png'
function Hero() {
  return (
    
    <section>
    
        <div className="hero">
            <div className="hero-top-head">
                <img src={clglogo} alt="" />
                <h4>Techno<br></br> Cultural<br></br> Fest</h4>
            </div>
            <div className="hero-bottom-head">
                <h1>SARGA '22</h1>
                <img src={Logo} alt="" />
            </div>
            <div className="hero-content">
              <p>Sarga is mea’s first time techno cultural fest development consultancy that works with startups and established businesses while also creating open source-based products & services
</p>
              <button className='btn stl'>Get Tickets Now</button>
            </div>
            <div className="strip">
              <img src={date} className='date'  alt=""/>
              
              
              
             <img src={chin} className='chine' alt="" />
              
              
            </div>
        </div>
        <div className="container">

        <div className='shape1'></div>
        <div className='shape2'></div>
        <div className='shape3'></div>
        </div>
    </section>
  )
}

export default Hero