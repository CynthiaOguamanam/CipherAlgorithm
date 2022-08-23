const cipher = (str, numb) =>{
    let myString = str.toLowerCase()
    let myLetters = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    for(i=0; i < myString.length; i++){
        let index = myString[i]

        let newIndex = myLetters.indexOf(index)

        let currrentIndex = newIndex + numb;

        if(currrentIndex > 25){
            currrentIndex = currrentIndex - 26
        } else if ( currrentIndex < 0){
            currrentIndex = 26 + currrentIndex
        } else {
            result += myLetters[currrentIndex]
        }if(str[i] === str[i].toLowerCase()){
            result += myLetters[currrentIndex];
            } else{
            result += myLetters[currrentIndex];
            }
    } 
    return result;
}
console.log(cipher('Cynthia is a woman in tech', 10))

