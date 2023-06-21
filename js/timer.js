export default function Timer({
  minutesDisplay,
  secondsDisplay,
  })  {

    let timerTimerOut
    let minutes = Number(minutesDisplay.textContent)
    let newMinutes

function updateMinutes(newMinutes){
 minutes = newMinutes
 }

function updateTimerDisplay(minutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds == undefined ? 0 : seconds
  minutesDisplay.textContent = String(minutes).padStart(2,"0")
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function resetTimer(){
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}


function countdown(){
  timerTimerOut = setTimeout(function(){
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

   updateTimerDisplay(minutes, 0)
    
    if(minutes <= 0){
      return
    }


    if(seconds <= 0){
      seconds = 60
      --minutes
    }
   
    updateTimerDisplay(minutes, String(seconds- 1))
    countdown()

  }, 1000)
}


   return{
    updateMinutes,
    resetTimer,
    countdown,
    updateTimerDisplay
   }



  }