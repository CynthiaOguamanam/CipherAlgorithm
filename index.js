const cipherBuild = (str, numb) =>{
    let myString = str.toLowerCase()
    let myLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    numb = numb % 26;


    for(i=0; i<myString.length; i++){
        let index = myString[i];

        // if(index === ""){
        //     return += myLetters[index];
        // } continue;

        let newIndex = myLetters.indexOf(index)
        let currrentIndex = newIndex + numb;


        if(currrentIndex > 25){
            currrentIndex = currrentIndex - 26;
        } else if(currrentIndex < 0){
            currrentIndex = 26 +  currrentIndex
        } else {
        result += myLetters[currrentIndex];
        }
         if(str[i] === str[i].toLowerCase()){
            result += myLetters[currrentIndex];
            } else{
            result += myLetters[currrentIndex];
            }
    
        }

    return result;
};

console.log(cipherBuild('Cynthia is a woman in tech', 3))

