const wordSearch = (letters, word) => { 
    let transposeLetters = [];

    if (!letters.length) return false;
    //AWCFQUAL,SEINFELD,YFCFQUAL,HMJTEVRG,WHCSYERL,BFRENEYB,UBTWAPAI,ODCAKUAS,EZKFQUAL
    //this is an array of strings
    const horizontalJoin = letters.map(ls => ls.join('')); //returns a array of string
    //console.log(`${horizontalJoin}: horizontal join function`);

    //takes the above output
    //checks the strings to check if they include the WORD
    //returns true if the word is present
    for (const l of horizontalJoin) {
        //console.log(`${l}: element value`);
        if (l.includes(word)) {
            // console.log("did we get to this point");
            return true;
        } 
        
    }

    //transpose "letters"
    
    transposeLetters = transpose(letters);
    // console.log(transposeLetters);

    
    //run all previous logic^^^
    const verticalJoin = transposeLetters.map(ls => ls.join(''));
    //console.log(`${verticalJoin}: 👏👏👏horizontal join function`);
    
    for (const arr of verticalJoin) {
        //console.log(`${l}: element value`);
        if (arr.includes(word)) {
            //console.log("did we get to this point");
            return true;
        } 
    }

    return false;
}

//[1,2,3]
//[4,5,6]
//[123,456]

//input
//a 2D array of letters and a word: [[]] and string

//output
//Check to find the word horizontally and vertically
//Return true if the word is found, and return false if the word is not found

const transpose = function (matrix) {
    const transMatrix = [];
  
    for (let column = 0; column < matrix[0].length; column++) {
      let newRow = [];
  
      for (let row = 0; row < matrix.length; row++) {
        newRow.push(matrix[row][column]);
      }
      transMatrix.push(newRow);
    }
    return transMatrix;
  };

  module.exports = wordSearch;