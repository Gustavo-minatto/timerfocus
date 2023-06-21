import { 
  minutesDisplay,
  buttonPlay,
  buttonStop,
  buttonSum,
  buttonLess,
  buttonFlorest,
  buttonRain,
  buttonMarket,
  buttonFire,
} from "./elements.js"


export default function ({timer, sound, color}) {

  let minutes = 25

buttonPlay.addEventListener('click', function(){
  minutesDisplay.textContent = minutes
  timer.countdown()
})

buttonStop.addEventListener('click', function(){
  timer.resetTimer()
})

buttonSum.addEventListener('click', function(){
  if(minutes < 60){
  minutes = minutes + 5
  timer.updateTimerDisplay(minutes)}
})

buttonLess.addEventListener('click', function(){
  if(minutes > 0){
  minutes = minutes - 5
  timer.updateTimerDisplay(minutes)}
})

buttonFlorest.addEventListener('click', function(){
  sound.audioForest()
  color.colorFlorest()
})

buttonRain.addEventListener('click', function(){
  sound.audioRain()
  color.colorRain()
})

buttonMarket.addEventListener('click', function(){
  sound.audioCoffeeShop()
  color.colorMarket()
})

buttonFire.addEventListener('click', function(){
  sound.audioFire()
  color.colorFire()
})

}