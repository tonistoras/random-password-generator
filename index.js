const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

let passwordElOne = document.getElementById("password-el-one")
let passwordElTwo = document.getElementById("password-el-two")

//passwordPartLength + underscores after first two parts will give me a password that is 17 characters long
let passwordPartLength = 5 

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return ( characters[randomCharacter] )
  }

function generateRandomPassword() {
  let randomPasswordPartOne =""
  let randomPasswordPartTwo =""
  let randomPasswordPartThree =""

  for (let i = 0; i < passwordPartLength; i++) {
    randomPasswordPartOne += getRandomCharacter()
    randomPasswordPartTwo += getRandomCharacter()
    randomPasswordPartThree += getRandomCharacter()
  }
  return (randomPasswordPartOne + "_" + randomPasswordPartTwo + "_" + randomPasswordPartThree) 
}

function generatePasswords() {
  passwordElOne.textContent = generateRandomPassword()
  passwordElTwo.textContent = generateRandomPassword()

}
