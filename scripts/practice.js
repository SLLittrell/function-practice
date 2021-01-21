export const dogBreed = (breed) => {
    if(breed === "meow"){
        return "I like cats"
    }
    else {
    return `My favorite dog breed is ${breed}`
    }
}

export const add = (num1, num2, num3) => {
    
    return num1  + num2 + num3
}

export const go = (direction, speed) => {
    if(speed > 75) {
        return "SLOW DOWN"
    }
    else {
    return `The car is moving ${direction} at ${speed} mph.`
    }
}
let numb=""
const numberArray = [2, 5, 7, 15, 22, 11,0]
export const evenOrOdd = () => {
    for (const num of numberArray) { 
        if (num % 2 === 0){
            numb += " Even"
        }
        else if (num % 2 !== 0) {
            numb += " Odd"
        }
    }
    return numb
}

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
const chance = Math.random() * 10
export const svenChances =(chance) => {
    if(chance >= 3) {
        return "Sven hooked a tuna!"
    }
    else {
        return "Sven came up empty-handed."
    }
}
const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")
export const fastFood = () => {
    for (const meal of takeOutBag) {  
        
    }
    return {
        sandwich: `${meal}`,
        side: '',
        drink: '',
        dessert:
    }
}
