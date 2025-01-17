import React from "react";
import './Hero.css';
import hand_icon from "../Assets/hand_icon.png";
import woman from "../Assets/woman.png";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for Everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>
                        Latest Collection 
                    </div>
                    {/* <img src={} alt="" /> */}

                </div>
            </div>
            <div className="hero-right">
                <img src={woman} alt="" />
            </div>
        </div>

    );
}

export default Hero;