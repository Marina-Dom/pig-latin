function translate (string){
    string = string.toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    let newString = "";

    if (vowels.indexOf(string[0]) > -1) {
        newString = string + "way";
        return newString;
    } else {
        let firstMatch = string.match(/[aeiou]/g) || 0;
        let vowels = string.indexOf(firstMatch[0]);
        newString = string.substring(vowels) + string.substring(0, vowels) + "ay";
        return newString;
    }
}

module.exports.translate = translate;


// function translate(str) {
//     if(str.match(/^[aeiou]/)){  //starts with vowel
//       return str.replace(/(.+)/,"$1way");
//     }else if(str.match(/[aeiou]/g)){ //starts with consonant or consonant cluster
//       return str.replace(/(^[^aeiou]+)(.+)/g,"$2$1ay");
//     }else{ //all consonants 
//       return str + "ay";
//     }
// }

// module.exports.translate = translate;


