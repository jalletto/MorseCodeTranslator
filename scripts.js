let dot = 500
let dash = dot * 3
let space = dot
let letterSpace = dash
let wordSpace = dot * 7

const morseCode = {
  a: [dot, space, dash]
  b: [dash, space, dot, space, dot, space, dot]
}


const light = document.querySelector('.flash')

function lightOn(){
 light.style.display = "block"
}

function lightOff(){
  light.style.display = "none"
}



let word = [dot,space, dot, space, dash, space, dash]



function displayMessage (array,i = 0) {

  setTimeout(function () {
    console.log(array[i])
    if(light.style.display === "none"){
      lightOn()
    }
    else{
      lightOff()
    }
    i++;
    if (i <= array.length - 1) {
        displayMessage(array, i);
    }
  }, array[i])
}


displayMessage(word)

// displayLetter()
// turn light off for a dash
// display next letter
// light off for a dash


// flash for one second
// flash for 3 seconds
// The length of a dot is 1 time unit
// A dash is 3 time units
// The space between symbols (dots and dashes) of the same letter is 1 time unit
// The space between letters is 3 time units
// The space between words is 7 time units.


