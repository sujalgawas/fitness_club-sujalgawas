import React from 'react';
import './programs.css';

const Programs = () => {
  return (
    <section className='p-container'>
      <div className='p-wrapper'>
        <div className='headers'>
          <span className='border-only'>EXPLORE OUR</span>
          <span>PROGRAMS</span>
          <span className='border-only'>TO SHAPE YOU</span>
        </div>
      </div>

      <div className='card'>
        <div className='rectangle'>
          <img src='dumbell.svg' className='logos' alt='' />
          <span>Strength Training</span>
          <p>In this program, you are trained to improve your strength through many exercises.</p>
          <div className='joining'>
            <span>Join Now</span>
            <img src='rightArrow.png' className='rightarrow' alt='' />
          </div>
        </div>

        <div className='rectangle'>
          <img src='runing.svg' className='logos' alt='' />
          <span>Cardio Training</span>
          <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
          <div className='joining'>
            <span>Join Now</span>
            <img src='rightArrow.png' className='rightarrow' alt='' />
          </div>
        </div>

        <div className='rectangle'>
          <img src='flame.svg' className='logos' alt='' />
          <span>Fat Burning</span>
          <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
          <div className='joining'>
            <span>Join Now</span>
            <img src='rightArrow.png' className='rightarrow' alt='' />
          </div>
        </div>

        <div className='rectangle'>
          <img src='heartHealth.svg' className='logos' alt='' />
          <span>Health Fitness</span>
          <p>This programs is designed for those who exercises only for their body fitness not body building.</p>
          <div className='joining'>
            <span>Join Now</span>
            <img src='rightArrow.png' className='rightarrow' alt='' />
          </div>
        </div>
      </div>

      <div className='w-reasons'>
        <div className='left-img'>
          <img src='image1.png' className='img1' alt='' />
          <img src='image2.png' className='img2' alt='' />
          <img src='image3.png' className='img3' alt='' />
          <img src='image4.png' className='img4' alt='' />
        </div>
        <div className='right-txt'>
          <div className='reason-txt'>
            <div className='reason-header'>
              <span className='orange-txt'>SOME REASONS</span>
              <span className='white-txt'>
                <span className='border-only'>WHY </span><span>CHOOSE US?</span>
              </span>
            </div>
            <div className='reason-subheader'>
              <div className='reasons'>
                <img src='tick.png' className='tick' alt='' />
                <span>OVER 140+ EXPERT COACHS</span>
              </div>
              <div className='reasons'>
                <img src='tick.png' className='tick' alt='' />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
              </div>
              <div className='reasons'>
                <img src='tick.png' className='tick' alt='' />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
              </div>
              <div className='reasons'>
                <img src='tick.png' className='tick' alt='' />
                <span>RELIABLE PARTNERS</span>
              </div>
            </div>
          </div>
          <div className='patners'>
            <span style={{color:"var(--gray)"}}>OUR PARTNERS</span>
            <div className='img-patners'>
              <img src='nb.png'className='patner' alt=''/>
              <img src='adidas.png' className='patner' alt=''/>
              <img src='nike.png' className='patner' alt=''/>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs