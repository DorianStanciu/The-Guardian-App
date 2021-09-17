import React from 'react'
import './Header.css'
import logoHeader from './the-guardian-logo.jpg'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Header = () => {

    // Responsive

    const [menu, setMenu] = useState(false)
    // state = { clicked: false }

    const handleClick = () => {
        setMenu(!menu)
    }

    const menuSwitch = () => {
        setMenu(false)
    }

        return (
            <div className='header'>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                        </div>
                <div className='headerTop'>
                    <div className='headerTopLeft'>
                        <h3>Support the Guardian</h3>
                        <h5>Available for everyone, funded by readers</h5>
                        <button className='headerTopLeftBTN'>Subscribe<i className="fas fa-arrow-right"></i></button><button className='headerTopLeftBTN'>Contribute<i className="fas fa-arrow-right"></i></button>
                    </div>
                    <div className='headerTopRight'>
                        <ul>
                            <li className='bordered'>Search jobs</li>
                            <li className='bordered'><i class="far fa-user-circle"></i>Sign In</li>
                            <li className='headerIntoImgLeft'><i class="fas fa-search"></i>Search<i className="fas fa-chevron-down"></i></li>
                            <li><img src={logoHeader} alt=''></img></li>
                            <li className='bordered headerIntoImgRight'>UK edition<i className="fas fa-chevron-down"></i></li>
                        </ul>        
                    </div>
                </div>
                <div className='headerBottom'>
                    <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
                        <Link style={{ textDecoration: 'none' }} to='/News'><li onClick={menuSwitch}>News</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/Opinion'><li onClick={menuSwitch}>Opinion</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/Sport'><li onClick={menuSwitch}>Sport</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/Culture'><li onClick={menuSwitch}>Culture</li></Link>
                        <Link style={{ textDecoration: 'none' }} to='/Lifestyle'><li onClick={menuSwitch}>Lifestyle</li></Link>
                        <li onClick={menuSwitch}>More<i className="fas fa-chevron-down" id='moreHandler'></i></li>
                    </ul>
                </div>
            </div>
        )
}

export default Header
