import React from 'react';
import airtel from './images/airtel.jpeg'; 
import jio from './images/jio.png'; 
import vi from './images/vi.png'; 
import bsnl from './images/bsnl.png'; 
import scanImage from './images/scanImage.png'; 
import coverBlock from './images/coverBlock.jpg'; 
import brick from './images/brick.webp';
import interior from './images/interior.png';
import putatoe_icon from './images/putatoe_icon.webp';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div>
      {/* Header */}
    <div className="header">
      <div className="row">
        <div className="location">
        <i className="fas fa-map-marker-alt"></i>
          <div className="location-box">  
            <span className="location-text">Harhwa Fatak Nirala Nagar, Gorakhpur, Nirala Nagar,UttarPradesh, 273004, India</span>
          </div>
          <div className="notification">
            <i className="fas fa-bell"></i>
            <span className="notification-badge">1</span>
          </div>
          <div className="add-to-cart">
            <i class="fas fa-cart-plus"></i>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="search-container">
          <div className="search-bar">
            <i className="fas fa-search search-icon"></i>
            <input type="text" placeholder="Search for Products..." />
          </div>
          <i className="fas fa-microphone mic-icon"></i>
        </div>
      </div>
      </div>

      {/* Section-1 */}
      <div className="card">
        <div className="row">
          <div className="column">
            <h3>RECHARGE</h3>
            <p>With ease, with Putatoe!</p>
            <div className="sim-cards">
              <img src={airtel} alt="Airtel" className="image"/>
              <img src={jio} alt="Jio" className="image"/>
              <img src={vi} alt="V!" className="image"/>
              <img src={bsnl} alt="BSNL" className="image"/>
            </div>
            <div className="buttons">
              <button className="transparent-button">Recharge Now</button>
              <button className="filled-button">Learn More</button>
            </div>
          </div>
          <div className="column">
            <img src={scanImage} alt="" className="scan-image"/>
          </div>
        </div>
      </div>

      {/* Section-2 */}
      <div className="card">
        <div className="icon-row1">
          <div className="icon-container">
          <i class="fas fa-mobile-alt recharge-icon"></i>
            <h4>Mobile Recharge</h4>
          </div>
          <div className="icon-container">
          <i class="fa-sharp fa-solid fa-laptop dth"></i>
            <h4>DTH Recharge</h4>
          </div>
          <div className="icon-container">
          <i class="fa-solid fa-indian-rupee-sign rupee"></i>
            <h4>Loans</h4>
          </div>
          <div className="icon-container">
          <i class="fas fa-bullhorn announcement-icon"></i>
            <h4>Promotion</h4>
          </div>
        </div>
        <div className="icon-row2">
          <div className="icon-container">
          <i class="fas fa-newspaper news-icon"></i>
            <h4 className="text-size">News</h4>
          </div>
          <div className="icon-container">
          <i class="fas fa-comment-alt blog-icon"></i>
            <h4 className="text-size">Blog</h4>
          </div>
          <div className="icon-container">
          <i class="fas fa-briefcase jobs-icon"></i>
            <h4 className="text-size">Jobs</h4>
          </div>
          <div className="icon-container">
          <i class="fas fa-comment-dots anonymous-feedback-icon"></i>
            <h4>Anonymous Feedback</h4>
          </div>
        </div>
        <div className="icon-row3">
          <div className="icon-container">
          <i class="fas fa-gas-pump gas-booking-icon"></i>
            <h4>Gas Booking</h4>
          </div>
          <div className="icon-container">
          <i class="far fa-lightbulb electricity-bill-icon"></i>
            <h4>Electricity Bill</h4>
          </div>
          <div className="icon-container">
          <i class="fas fa-tint water-bill-icon"></i>
            <h4>Water Bill</h4>
          </div>
          <div className="icon-container">
          <span class="see-more-icon">&#62;</span>
            <h4>See More</h4>
          </div>
        </div>
      </div>

    {/* Section-3 */}
      <div className="card">
        <div className="header-2">
          <h2 className="heading">SHOP BY CATEGORY</h2>
          <div className="underline1"></div>
          <h4 className="subheading">Construction</h4>
          <div className="underline2"></div>
        </div>
        <div className="content">
          <div className="box">
            <img src={coverBlock} alt="Cover Block" className="cover-image"/>
            <h3 className="label">Cover Block</h3>
            <p className="discount">UP TO <span>0% OFF</span></p>
          </div>
        </div>
      </div>

      {/* Section-4 */}

      <div className="card4">
        <div className="header4">
          <h2>Popular Service Products</h2>
        </div>
        <h4 className="subheading">Construction</h4>
          <div className="underline2"></div>
  
        <div className="card-row">
          <div className="card-item">
          <img src={brick} alt="" className="image"/>
            <span className="card-label">Brick</span>
          </div>
          <div className="card-item">
            <div className="letter-box">
              <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
            <div className="letter-box">
                <h3>W</h3>
            </div>
            <span className="card-label">Wire</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>C</h3>
            </div>
            <span className="card-label">Chotti Gitti</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>K</h3>
            </div>
            <span className="card-label">KJS Cement</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>A</h3>
            </div>
            <span className="card-label">ACC Suraksha</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>B</h3>
            </div>
            <span className="card-label">Balu</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>G</h3>
            </div>
            <span className="card-label">Gitti</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>S</h3>
            </div>
            <span className="card-label">Seal dry</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>U</h3>
            </div>
            <span className="card-label">Ultratech</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>D</h3>
            </div>
            <span className="card-label">Dr Fixit</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>T</h3>
            </div>
            <span className="card-label">Tape</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>R</h3>
            </div>
            <span className="card-label">RCC Pipe</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>F</h3>
            </div>
            <span className="card-label">Fan box</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>C</h3>
            </div>
            <span className="card-label">Cera sheet</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>A</h3>
            </div>
            <span className="card-label">Araldite</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>S</h3>
            </div>
            <span className="card-label">SWR Pipe</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
                <h3>P</h3>
            </div>
            <span className="card-label">Putty</span>
          </div>
        </div>
      </div>

    {/* Section-5 */}

    <div className="card4">
        <div className="header4">
          <h2>All Popular Service Providers</h2>
        </div>
        <h4 className="subheading">Construction</h4>
          <div className="underline2"></div>
  
        <div className="card-row">
          <div className="card-item">
          <img src={interior} alt="" className="image"/>
            <span className="card-label">Suprabha interiors</span>
          </div>
          <div className="card-item">
            <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
            <div className="letter-box">
                <h3>S</h3>
            </div>
            <span className="card-label">Shardha Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div classNameName="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
          <div className="card-item">
          <div className="letter-box">
              <h3>R</h3>
            </div>
            <span className="card-label">Ravi Traders</span>
          </div>
        </div>
      </div>

    {/* Section-6 */}

    <div className="card4">
        <div className="header4">
          <h2>Services We Provide</h2>
        </div>
        <div className="row6">
        <div className="card6-1">
        <div className="discount-label">20% off</div>
          <h3>Daily Needs</h3>
        </div>
        <div className="card6-2">
        <div className="discount-label">20% off</div>
        <h3>Construction</h3>
        </div>
      </div>
      <div className="row6">
        <div className="card6-3">
        
        <h3>Consultancy</h3>
        </div>
      </div>
      <div className="round-image sticky-image">
      <img src={putatoe_icon} alt="" className="Putatoe-Icon"/>
        </div>
    </div>

    {/* Footer */}

    <footer className="footer">
        <div className="footer-item">
        <i class="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className="footer-item">
        <i class="fa-solid fa-user"></i>
          <span>Profile</span>
        </div>
        <div className="footer-item trapezium">
        <img src={putatoe_icon} alt="" className="Putatoe-Icon"/>
          
        </div>
        <div className="footer-item">
        <i class="fa-sharp fa-solid fa-clipboard-list"></i>
          <span>Follow List</span>
        </div>
        <div className="footer-item">
        <i class="fa-regular fa-comment-dots"></i>
          <span>Chat</span>
        </div>
      </footer>

    </div>

  );
}

export default App;
