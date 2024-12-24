import React from 'react'
import shoess from './shoe.jpg';
import flipcar from './flipkart-icon.png';

export default function Home() {
  return (
    <div className='container'>
        <div className='section1'>
            <div className='bigheading'>
            <h1>Your feet<br/> deserves <br/> the best </h1>
            </div>
            <p>Your feet deserve the best and we are here to help you with our shoes. yur feet deserve the best and we are here ti help you with our shoes.</p>
                <div className='some-item'>
                    <span>Shop Now</span><span>Catergory</span>
                </div>
                <div className='some-item2'>
                    <div>Also avalable on </div>
                    <span><img src={flipcar} alt="fliepcart"/></span> <span><img src={flipcar} alt="amazon"/></span>
                </div>
        </div>
        <div className='section2'>
            <img src={shoess} alt="shoe image"/>
        </div>
    </div>
  )
}
