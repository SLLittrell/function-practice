const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const wantedWords =[]
export const unwantedWords = () => {
    for (const word of words) {
        if(word.startsWith('k') ) {
        }
        else {
            wantedWords.push(word)
        }     
    }
    return wantedWords   
}
    
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
let stringOfWords = ""
export const wordString =() => {
    for (const word of wantedWords) {
        stringOfWords += `${word} `
    }
    return stringOfWords + "."
}

/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/