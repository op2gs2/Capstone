import Footer from '../Footer/Footer';
import React from 'react';
import './About.css';
function About() {
    return (
        <div className='Main'>
            <div className='about-container'>
                <h1>Introduce our members</h1>

                <h2>GeonHee Woo</h2>
                <div className='producer'>

                    <div className='profile'>
                        <img className='profile-img' alt='profile-img' src='/public_assets/woo.jpg' />
                    </div>
                    <span>안녕하세요 저는 한림대학교에 재학중인 콘텐츠 IT학과 우건희라고 합니다.<br /> 저는 이 개발 프로젝트에서 웹 개발을 담당하였습니다.<br />
                        웹은 리액트 기반으로 제작되었으며 웹 서버는 AWS에서 서비스 중입니다. 웹에 연결된 DB의 경우 AWS의 RDS 서비스를 이용하고 있고 MariaDB 기반입니다.
                        <br /><br />
                        <a href='https://github.com/wgunhee'><img className='social' alt='social-icon' src='/public_assets/git.png' /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.instagram.com/geonhee_woo/'><img className='social' alt='social-icon' src='/public_assets/insta.png' /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.acmicpc.net/user/wgunhee'><img className='social' alt='social-icon' src='/public_assets/bj.png' /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.linkedin.com/in/geonhee-woo-a8850923b/'><img className='social' alt='social-icon' src='/public_assets/linkedin.png' /></a>
                    </span>
                </div>
                <h2>DongYeong Kim</h2>
                <div className='producer'>

                    <div className='profile'>
                        <img className='profile-img' alt='profile-img' src='/public_assets/kim.png' />
                    </div>
                    <span>안녕하세요 저는 한림대학교에 재학중인 빅데이터 학과 김동영라고 합니다.<br /> 저는 이 개발 프로젝트에서 악성코드 탐지 프로그램 개발을 담당하였습니다.<br />
                        악성코드 탐지 프로그램은 CNN모델 기반으로 제작되었으며  AWS에 탑재 되어있습니다.
                        <br /><br />
                        <a href='https://github.com/op2gs2'><img className='social' alt='social-icon' src='/public_assets/git.png' /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.instagram.com'><img className='social' alt='social-icon' src='/public_assets/insta.png' /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.acmicpc.net'><img className='social' alt='social-icon' src='/public_assets/bj.png' /></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href='https://www.linkedin.com/mwlite/in/동영-김-58a936221'><img className='social' alt='social-icon' src='/public_assets/linkedin.png' /></a>
                    </span>
                </div>

            </div>
            <Footer />
        </div>


    )
}

export default About;