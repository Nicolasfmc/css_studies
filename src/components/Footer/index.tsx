import React from 'react';
import './index.css';
import logoDiscord from '../../assets/discordLogo.png';
import logoGithub from '../../assets/githubLogo.png';

export const Footer = () => {
    return (
        <div className="container_footer">
            <div className="social_div">
                <a style={{display: 'flex', alignItems: 'center', paddingLeft: 10, textDecoration: 'none'}} href='https://discordapp.com/users/472559065915064331'>
                    <img src={logoDiscord} className="img_footer"/> 
                    <p style={{paddingLeft: 10, color: 'white'}}>
                        /Discord: 사나김민정윈터#4444
                    </p>
                </a>
                <a style={{display: 'flex', alignItems: 'center', paddingLeft: 10, textDecoration: 'none'}} href='https://github.com/Nicolasfmc'>
                    <img src={logoGithub} className="img_footer"/>
                    <p style={{paddingLeft: 10, color: 'white'}}>
                        /Github: Nicolasfmc
                    </p>
                </a>
            </div>
            <div className="copyright_div">
                &copy; Nicolas Ferreira, 2023
            </div>
        </div>
    )
}