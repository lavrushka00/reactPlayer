import { combineReducers } from "redux";


import musicReducer from './musicReducer'
import isPlaying from './IsPlayingReducer'


const rootReducer = combineReducers({
    musicReducer,
    isPlaying
})


export default rootReducer;
 