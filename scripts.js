let light = document.querySelector('.flash')

setInterval(function (){
  if(light.style.visibility === "visible"){
    light.style.visibility = "hidden"
  } else {
    light.style.visibility = "visible"
  }
}, 400)





let dot = 1
let dash = dot * 3
let symbolSpace = dot
let letterSpace = dash
let wordSpace = dot * 7

const MorseCode = {
  a:
}
// The length of a dot is 1 time unit
// A dash is 3 time units
// The space between symbols (dots and dashes) of the same letter is 1 time unit
// The space between letters is 3 time units
// The space between words is 7 time units.


