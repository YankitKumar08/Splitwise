import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Landing.css'
import logo from '../assets/img/logo.png'
import about from '../assets/img/about.jpg'
function Landing() {
  return (
    
    <>
    <div id="header">
        <div className="container">
            <nav>
                <img src={logo} className="logo"></img>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Features</a></li>
                    
                    
                    <i className="fas fa-times"></i>
                </ul>
                <i className="fas fa-bars"></i>
            </nav>
            <div className="header-text">
                <p>Simplify Your Finances</p>
                <h1>Splitwise:<span>Harmonizing</span><br />Shared Expenses</h1>
                <Link to='/home' style={{textDecoration:'none'}}>
                
                <button className="btn">
      <span className="overlay"></span>
      <span className="text-wrapper">
        <span className="text"> Get Started </span>
        <span className="text cloned-text" aria-hidden="true"> Let's Split! </span>
      </span>
    </button>
    </Link>
            </div>
        </div>
    </div>
    
    <div id="about">
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                    <img src={about}/>
                </div>
                <div className="about-col-2">
                    <h1 className="sub-title">About US</h1>
                    <p> Discover how we've revolutionized the way people manage shared expenses. From simplifying bill-splitting to fostering financial transparency, we're dedicated to empowering individuals and groups to navigate their finances effortlessly. Learn about our mission, values, and the team behind the scenes, committed to enhancing your financial journey. Join us in redefining collaborative finance and making shared expenses hassle-free.</p>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
   
    <div id="services">
        <div className="container">
            <h1 className="sub-title">My Features</h1>
            <div className="services-list">
                <div>
                    <i className="fa-brands fa-android"></i>
                    <h2>Effortless Expense Management</h2>
                    <p>Simplify bill splitting among friends with ease. Add groups, track individual payments, and settle balances seamlessly for various activities or events.
                        </p>
                    <a href="#">Learn more</a>
                </div>
                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>Flexible Payment Options</h2>
                    <p>Easily input individual payments for accurate tracking. Enjoy the freedom to split bills according to your preferences and financial arrangements.</p>
                    <a href="#">Learn more</a>

                </div>
                <div>

                    <i className="fa-solid fa-crop-simple"></i>
                    <h2>Smart Calculation Tools</h2>
                    <p>Instantly calculate each member's share with precision. Our platform automates calculations, providing clear insights into shared expenses for hassle-free financial management.</p>
                    <a href="#">Learn more</a>
                </div>
            </div>
        </div>
    </div>
    <div id="contact">
         <div class="container">
            
        <div class="copyright">
            <p>Where every penny finds its perfect place in friendship's ledger.</p>
        </div>
    </div>
    </div>
   
    
    </>
  )
}

export default Landing
