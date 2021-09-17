import React from 'react'
import './Footer.css'
import poweredBy from './poweredBy.png'

const Footer = () => {
        return (
            <div className='footer'>
                <div className='footer-wrap'>
                <div className='footer-left'>
                    <h2>The Guardian API</h2>
                    <p>Developer: Dorian Stanciu</p>
                    <p>Portfolio: <a target='get_blank' href='http://dorianstanciu.com/'>dorianstanciu.com</a></p>
                    <p>Phone Number: 07459856818</p>
                </div>
                <div className='footer-right'>
                    <img src={poweredBy} alt=''/>
                </div>
                </div>
            </div>
        )
}

export default Footer
