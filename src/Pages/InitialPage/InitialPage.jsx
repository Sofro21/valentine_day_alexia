import React, { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './InitialPage.css';
import cute_pusheen from './cute_pusheen.avif'
import { Link } from 'react-router-dom'
import { ImageData } from '../../Components/JSONData/JSONData';
import ImageSliderAuto from '../../Components/ImageSliderAuto/ImageSliderAuto';

const InitialPage = () => {
    const buttonRef = useRef();
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const handleButtonClick = () => {
        setPopupVisibility(true);
    };

    const closePopup = () => {
        setPopupVisibility(false);
    };

    useEffect(()=>{
        const ApplyContainerProperties = () => {
            buttonRef.current.classList.add("effect");
        };

        const onClick = () => {
            buttonRef.current.classList.add("active");
        }

        ApplyContainerProperties();

        buttonRef.current.addEventListener("mouseup", onClick);

        const cleanupRef = buttonRef.current;

        return () => {
            cleanupRef.removeEventListener("mouseup", onClick);
        };
    })
    return (
        <div className="App">
          <header className="App-header">
            <div className="image-slider">
                <ImageSliderAuto ImageData={ImageData} SlideInterValTime={3000}/>
            </div>
            <div className="valentine-design">
                <p>
                    Will you be my Valentine?
                </p>
                <img src={cute_pusheen} className="App-logo" alt="logo" />
                <div className='no-button-container' ref={buttonRef}>
                <Link to='/love'><button className='button-yes'>YES</button></Link>
                    <button className='button-no' onClick={handleButtonClick}>NO</button>
                    {isPopupVisible && (
                        <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={closePopup}>
                            &times;
                            </span>
                            <p>I am sorry, but this button is not an option! Please try something else!</p>
                        </div>
                        </div>
                    )}
                </div>
            </div>
          </header>
        </div>
      );
}

export default InitialPage