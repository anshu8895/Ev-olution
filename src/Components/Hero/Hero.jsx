import { useState } from 'react';
import './Hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';


const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    const [showMessage, setShowMessage] = useState(false);

    const handleExploreClick = () => {
        // Navigate to the Home section smoothly
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore" onClick={handleExploreClick} role="button" tabIndex="0">
                <p>Explore the features</p>
                <img src={arrow_btn} alt="Arrow pointing right" />
            </div>
            {showMessage && (
                <div className="feature-message">
                    Coming soon! More features will be available in the next update.
                </div>
            )}
            <div className="hero-container">
                <div className="hero-dot-play">
                    <ul className="hero-dots" role="tablist" aria-label="Slide indicators">
                        <li
                            onClick={() => setHeroCount(0)}
                            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
                            role="tab"
                            aria-selected={heroCount === 0}
                            aria-label="Slide 1"
                        ></li>
                        <li
                            onClick={() => setHeroCount(1)}
                            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
                            role="tab"
                            aria-selected={heroCount === 1}
                            aria-label="Slide 2"
                        ></li>
                        <li
                            onClick={() => setHeroCount(2)}
                            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
                            role="tab"
                            aria-selected={heroCount === 2}
                            aria-label="Slide 3"
                        ></li>
                    </ul>

                    <div className="hero-play">
                        <button
                            onClick={() => setPlayStatus(!playStatus)}
                            aria-label={playStatus ? "Pause the video" : "Play the video"}
                            className="play-button"
                        >
                            <img src={playStatus ? pause_icon : play_icon} alt={playStatus ? "Pause icon" : "Play icon"} />
                        </button>
                        <p>{playStatus ? "Pause the video" : "Play the video"}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;