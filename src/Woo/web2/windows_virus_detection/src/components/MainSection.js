import { ChimeSDKIdentity } from 'aws-sdk';
import React, { useState } from 'react'
import '../App.css';
import Upload from './Button/Upload';
import './MainSection.css';

function MainSection() {    
    return (
        <div className='main-container' style={{ backgroundImage: 'url(/public_assets/main_image_0.jpg)' }}>
            <h1>Windows Virus Detection</h1>
            <p>We detect your dangerous window virus.</p>
            <div className="main-btns">
                <Upload/>
            </div>

        </div>
    )
}

export default MainSection