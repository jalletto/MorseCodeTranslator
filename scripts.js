const light = document.querySelector('.flash')
let dot = 500
let dash = dot * 3
let space = dot
let letterSpace = dash
let wordSpace = dot * 7

const morseCode = {
  a: [dot, space, dash],
  b: [dash, space, dot, space, dot, space, dot],
  c: [dash, space, dot, space, dash, space, dot],
  d: [dash, space, dot, space, dot],
  e: [dot],
  f: [dot, space, dot, space, dash, space, dot],
}

function makeMorseCode(word){
  let letters = word.split('')
  let morseWord = []

  letters.forEach(function(letter){
  if(letter === " "){
    morseWord.push(wordSpace)
  } else
    morseWord.push(morseCode[letter])
    morseWord.push(letterSpace)
  })
  morseWord =  [].concat.apply([], morseWord)
  // console.log(morseWord)
  return morseWord
}

function lightOn(){
 light.style.display = "block"
}

function lightOff(){
  light.style.display = "none"
}


function displayMessage (array,i = 0) {

  setTimeout(function () {
    if(light.style.display === "none"){
      lightOn()
      console.log("Waited " + array[i] + " to turn on.")
    }
    else{
      lightOff()
     console.log("Waited " + array[i] + " to turn off.")
    }
    i++;
    if (i <= array.length - 1) {
        displayMessage(array, i);
    }else {
      lightOff()
    }
  }, array[i])
}

displayMessage(makeMorseCode("ab"))





// displayMessage(word)

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


