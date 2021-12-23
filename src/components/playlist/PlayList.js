import React from 'react'
import PlayListItem from './PlayListItem';


function PlayList({musicList}) {

  


    return (
        <div className="currentPlaylist">
          {musicList.map((item, index) => (
            <PlayListItem musicItem = {item} index = {index}/>
          ) )
            
          }
        </div>
    )
}

export default PlayList;