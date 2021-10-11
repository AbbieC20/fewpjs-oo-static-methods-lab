class Formatter {
  
  static capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for (let n = 0; n < arrayOfWords.length; n++) {
      // capitalizes first word
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
      // checks if word is an exception - if it is, pushes it into result array without transforming
      if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
      } else {
      // checks if word is an exception - if it is not, pushes it into result array with transforming
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }
    }
    return result.join(" ");
  }
}