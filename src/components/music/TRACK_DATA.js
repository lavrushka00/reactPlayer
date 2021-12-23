import Bleach from "./BLEACH.mp3"
import Classic from "./CLASSIC.mp3"
import Frost from "./FROST.mp3"
import LetsTalk from "./LETSTALK.mp3"


export default [
    {
        id: 0,
        title: "Bleach",
        artist: "Zillakami, feat Denzel",
        audio: new Audio(Bleach)
    },
    {
        id: 1,
        title: "Classic",
        artist: "Слава КПСС, ЗАМАЙ",
        audio: new Audio(Classic)
    },
    {
        id: 2,
        title: "Frost",
        artist: "Zillakami",
        audio: new Audio(Frost)
    },
    {
        id: 3,
        title: "LETSTALK",
        artist: "Слава КПСС, ЗАМАЙ",
        audio: new Audio(LetsTalk)
    },
]