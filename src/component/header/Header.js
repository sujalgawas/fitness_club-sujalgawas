import React from 'react';
import './Header.css';
import CountUp from 'react-countup';

const header = () => {
  return (
    <section className='test'>
      <div className='h-wrapper JSA'>
        <div className='h-left'>
          <img src="logo.png" className='logo' alt="FC-logo" />
        </div>
        <div className='h-right'>
          <ul className='JSA '>
            <li className='nav-btn'>Home</li>
            <li className='nav-btn'>Programs</li>
            <li className='nav-btn'>Why Us</li>
            <li className='nav-btn'>Plans</li>
            <li className='nav-btn'>Testimonials</li>
          </ul>
        </div>
      </div>

      <div className='flexColCenter fitness-club-MG'>
        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        <div className='orange-rec'></div>
      </div>
      <div className='main-txt'>
        <span className='main-txt1 flexColStart'>
          <span><span className='border-only'>SHAPE </span><span>YOUR</span></span>
          <span>IDEAL BODY</span>
        </span>
      </div>
      <div className='sub-header'>
        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
      </div>
      <div className='stat'>
        <div className='sub-stat flexColStart'>
          <span className='bold JSA'><span>+</span>
          <CountUp start={90} end={140} duration={4}/></span>
          <p>EXPERT COACHES</p>
        </div>
        <div className='sub-stat flexColStart'>
          <span className='bold JSA'><span>+</span>
          <CountUp start={600} end={978} duration={4}/></span>
          <p>MEMBERS JOINED</p>
        </div>
        <div className='sub-stat flexColStart'>
          <span className='bold JSA'><span>+</span>
          <CountUp start={0} end={50} duration={4}/></span>
          <p>FITNESS PROGRAMS</p>
        </div>
      </div>

      <div className='buttons'>
        <button>Get Started</button>
        <div className='border-btn'><button style={{backgroundColor:'transparent'}}>Learn More</button>
      </div>
      </div>


      <div className='right-stat'>
        <div className='reactangle'></div>
        <button className='btn'>Join Now</button>
        <div>
          <img src='hero_image_back.png' className='curve-line' />
        </div>
        <div>
          <img src='hero_image.png' className='model' />
        </div>
        <div className='rect-heart'>
          <img src='heart.png' className='heart' />
          <div className='flexColCenter heart-txt'>
            <span>Heart Rate</span>
            <p>116 bpm</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default header