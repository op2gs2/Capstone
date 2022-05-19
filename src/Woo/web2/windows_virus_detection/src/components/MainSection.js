import React from 'react'
import '../App.css';
import { Button } from './Button/Button'
import './MainSection.css';


function MainSection() {
    return (
        <div className = 'main-container'style={{backgroundImage:'url(/public_assets/main_image_0.jpg)'}}>
            <h1>Windows Virus Detection</h1>
            <p>We detect your dangerous window virus.</p>
            <div className="main-btns">
                <Button className = 'btns' buttonStyle = 'btn--outline' 
                buttonSize = 'btn--large'>Upload</Button>
                
            </div>
               
        </div>
    )
}

export default MainSection