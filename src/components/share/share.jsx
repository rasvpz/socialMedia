import React from 'react'
import "./share.css"
import MovieIcon from '@mui/icons-material/Movie';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
        <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
        <input type="text" className="shareInput" placeholder='whats in your mind John ?' />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
            <div className="shareOption">
              <MovieIcon htmlColor='tomato' className='shareIcon'/>
            <span className='shareOptionText'>Photo / Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor='blue' className='shareIcon'/>
            <span className='shareOptionText'>Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor='green' className='shareIcon'/>
            <span className='shareOptionText'>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
            <span className='shareOptionText'>Feelings</span>
            </div> 
            </div>
            <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default share
