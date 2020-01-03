var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//0 to 25

var index = Math.floor(Math.random() * 26)


var computerpickLetter = letters[index];
console.log(computerpickLetter)


document.onkeypress = function (event) {
    console.log(event.key)
}