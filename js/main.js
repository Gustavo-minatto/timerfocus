import Color from "./color.js"
import Events from "./events.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
  minutesDisplay,
  secondsDisplay,
} from './elements.js'


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
})

const color = Color() 

const sound = Sound()

Events({timer, sound, color})

