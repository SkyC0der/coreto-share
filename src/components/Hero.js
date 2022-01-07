import React from 'react'
import './Hero.css'
import illustration from "../hero.png"

function Hero() {
    return (
        <div id="hero" className="container">
            <div className="heading">
                <h1 className="title">Secure your files on the decentalized web</h1>
                <p className="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente distinctio beatae inventore sit unde.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempore similique cupiditate numquam dicta 
                    inventore nobis quos, iste vitae provident!
                </p>
            </div>
            <div className="illustration">
                <img src={illustration} alt="" />
            </div>
        </div>
    )
}

export default Hero
