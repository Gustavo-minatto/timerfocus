export default function(){
const florest = new Audio("../assets/sons/Floresta.wav")
const rain = new Audio("../assets/sons/rain.wav")
const coffeeShop = new Audio("../assets/sons/Cafeteria.wav")
const fire = new Audio("../assets/sons/Lareira.wav")


  let soundsOff = (soundOne, soundTwo, soundThree) =>{
    soundOne.pause()
    soundTwo.pause()
    soundThree.pause()
  }

   function audioForest(){
    soundsOff(rain, coffeeShop, fire)
    florest.play()
    florest.loop = true
  }
  
   function audioRain(){
    soundsOff(florest, coffeeShop, fire)
    rain.play()
    rain.loop = true
   }

   function audioCoffeeShop(){
    soundsOff(florest, rain, fire)
    coffeeShop.play()
    coffeeShop.loop = true
  }
   
   function audioFire(){
    soundsOff(florest, rain, coffeeShop)
    fire.play()
    fire.loop = true
   }
   
   return{
    audioForest,
    audioRain,
    audioCoffeeShop,
    audioFire
   }

}