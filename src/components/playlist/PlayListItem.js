import React,{useRef, useState, useEffect} from "react";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    
  };
};

function PlayListItem(props) {
  
  const audioRef = useRef()

  const PlayPause = () => { 
    props.dispatch({type: "PLAY_PAUSE", payload: props.musicItem})
  }
 
  useEffect(() => {
    console.log("effect")

    if(props.musicItem.isPlaying == true)
    {
      audioRef.current.play()
    }else
    {
      audioRef.current.pause()
    }
  }, [props.musicItem.isPlaying])

//следить за изменени cuurent music и если он меняет включать другу передавай
//при нажатии на трек передаётся его айди и устанавливается как curen и включвется (так как заэти состоянием будет следить Effect) 
// при нажатие на тот же трек каррент не изменяется

  return (
    <div className="currentPlaylistItem">
      <div className="itemMain">
        <div className="itemDescription">
        <audio src  = {props.musicItem.source} controls  ref = {audioRef}></audio>
       
      

          <buttton  onClick = {PlayPause}>X</buttton>
       
        

        <span>{Number(props.musicItem.isPlaying)}</span>
          {/*
          //редбюсер из плаинг передать и потом передать сюда.
          <div className="itemLogo">
            <img src="./img/itemLogo.svg" alt="" />
          </div>
          <div className="itemAuthor">
            <div className="itemTitle"></div>
            <div className="itemComposer"></div>
          </div>
  <div className="itemCurrentTime">0:15</div>*/}

        </div>

        <div className="itemWaveLine"></div>
      </div>

      <div className="itemFeedback">
        <img src="./img/like.svg" alt="" />
      </div>

      <input type="range" />
    </div>
  );
}

export default connect(mapStateToProps)(PlayListItem);
