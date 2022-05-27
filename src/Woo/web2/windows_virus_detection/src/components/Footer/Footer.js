import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        
                        <Link to='/About'>Careers</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <a href="mailto:wgunhee@gmail.com">Contact</a>
                        <a href='https://hlsw.hallym.ac.kr/index.php'>Support</a>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <a href='https://www.youtube.com/watch?v=Lent6ad4x7k'>How it works</a>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://github.com/op2gs2/Capstone'>GitHub</a>
                    </div>
                </div>
            </div>
 
        </div>
    )
}

export default Footer