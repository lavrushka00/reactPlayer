import "./index.scss";
import Header from "./components/header/header";
import PlayList from "./components/playlist/PlayList";
import React, { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  
  
  return {
    musicList: state.musicReducer
  };
};




function App(props) {


  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <button>{"<<<<"}</button>
        <button>{">>>>"}</button>


        <div className="main">
          <PlayList
            musicList = {props.musicList}
            
          />
          <hr />
          <div className="nextPlaylist"></div>
          <hr />
          <div className="chat"></div>



        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
