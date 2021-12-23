import React, {useState, useEffect} from 'react'
import Classic from './CLASSIC.mp3'
import Frost from './FROST.mp3'


function App2() {

const [tracks, setTracks] = useState([
    {
        title: "кпсс",
        artist: "хуй",
        audio: new Audio(Classic)
    },
    {
        title: "бум",
        artist: "бам",
        audio: new Audio(Frost)
    },
])

const intervalRef = React.useRef()



const Play = (props) => {
   // intervalRef.current = props.audio.currentTime
    props.audio.play()
   //setInterval(() => console.log(intervalRef) , 1000);
   
   console.log(intervalRef.current.value)
   //intervalRef.current.value = 10

   setInterval(() => intervalRef.current.value = props.audio.currentTime , 1000);
}




    return (
        <div>
            {tracks.map(item => 
                <div>
                    <span>{item.artist}</span>
                    <button onClick={() => Play(item)}>Жми</button>
                    <input type = "range" value={intervalRef} ref = {intervalRef}/>
                </div>
            )}
        
        </div>
    )
}

export default App2
