import { useState, useEffect } from 'react';
import './Background.css';
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
    const [error, setError] = useState(false);

    // Error handler for media loading issues
    const handleError = () => {
        console.error("Failed to load media");
        setError(true);
    };

    // Fallback UI in case of error
    if (error) {
        return (
            <div className="background error-background">
                <div className="error-message">
                    Media could not be loaded. Please refresh the page.
                </div>
            </div>
        );
    }

    if (playStatus) {
        return (
            <video
                className="background"
                autoPlay
                loop
                muted
                onError={handleError}
            >
                <source src={video1} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        );
    }
    else if (heroCount === 0) {
        return <img
            src={image1}
            className='background'
            alt="Electric vehicle in urban setting"
            onError={handleError}
        />;
    }
    else if (heroCount === 1) {
        return <img
            src={image2}
            className='background'
            alt="Electric vehicle charging station"
            onError={handleError}
        />;
    }
    else if (heroCount === 2) {
        return <img
            src={image3}
            className='background'
            alt="Modern electric vehicle on display"
            onError={handleError}
        />;
    }
};

export default Background;