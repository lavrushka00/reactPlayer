import Track1 from "../../music/BLEACH.mp3";
import Track2 from "../../music/CLASSIC.mp3";
import Track3 from "../../music/FROST.mp3";
import Track4 from "../../music/LETSTALK.mp3";

const initialState = [
  {
    artist: "СЛАВА КПСС",
    title: "Классик",
    source: Track2,
    isPlaying: false,
    id: 0,
  },
  {
    artist: "Zillakami",
    title: "Frost",
    source: Track3,
    isPlaying: false,
    id: 1,
  },
  {
    artist: "Zillakami",
    title: "Bleach",
    source: Track1,
    isPlaying: false,
    id: 2,
  },
  {
    artist: "СЛАВА КПСС",
    title: "летс толк",
    source: Track4,
    isPlaying: false,
    id: 3,
  },
];

const musciReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_PAUSE":
      return state.map((item) => {
        if (item.id !== action.payload.id && item.isPlaying === true) {
          return { ...item, isPlaying: false };
        }

        if (item.id === action.payload.id) {
          return {
            ...item,
            isPlaying: !item.isPlaying,
          };
        }

        return item;
      });

    case "NEXT":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isPlaying: !item.isPlaying,
          };
        }

        if(item.id === (action.payload + 1))
        {
            return {
                ...item,
                isPlaying: true
            }
        }


        return item;
      });

    default:
      return state;
  }
};

export default musciReducer;
