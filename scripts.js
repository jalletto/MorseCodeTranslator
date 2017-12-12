let dot = 1000
let dash = dot * 3
let space = dot
let letterSpace = dash
let wordSpace = dot * 7

const morseCode = {
  a: [dot,dash],
  b: [dash,dot,dot, dot],
}
const light = document.querySelector('.flash')

function lightOn(){
 light.style.display = "block"
}

function lightOff(){
  light.style.display = "none"
}

// function showSymbol(symbol){
//   lightOn()
//   setTimeout(lightOff,symbol)
// }


let a = [dot, space, dash, space, dot]

function myLoop (array,i) {
  setTimeout(function () {
    if(light.style.display === "none"){
      lightOn()
    }
    else{
      lightOff()
    }
    i++;
    if (i <= array.length - 1) {
        myLoop(array, i);
    }
  }, array[i])
}





myLoop(a,0)
// flash for one second
// flash for 3 seconds
// The length of a dot is 1 time unit
// A dash is 3 time units
// The space between symbols (dots and dashes) of the same letter is 1 time unit
// The space between letters is 3 time units
// The space between words is 7 time units.


