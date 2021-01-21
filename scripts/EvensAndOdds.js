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