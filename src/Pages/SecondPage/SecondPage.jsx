import React from 'react'
import './SecondPage.css'
import pusheen_video from './giphy (1) (1).gif'

const SecondPage = () => {
  return (
    <div className='second-page'>
        <div className="firework" id="firework1">
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
        </div>
        <div className="firework" id="firework2">
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
        </div>
        <div className="firework" id="firework3">
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
            <div className="explosion"></div>
        </div>
        <p>Happy Valentine's Day and Happy 10 months together!</p>
        <p>You are the best thing that ever happened to me and you make me the happiest guy in the whole world!</p>
        <img src={pusheen_video} alt="" />
    </div>
  )
}
export default SecondPage