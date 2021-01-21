console.log("Welcome to the main module")
import {dogBreed} from './BestInShow.js'
import {add} from './Addition.js'
import {go} from './Self-DrivingCar.js'
import {evenOrOdd} from './EvensAndOdds.js'
import {unwantedWords} from './DoubleFunctions.js'
import {wordString} from './DoubleFunctions.js'
import {svenChances} from './Tuna.js'


const breed =dogBreed("meow")
console.log(breed)
const sum = add (3, 7, 10)
console.log(sum)
const drivingCar = go("forward", 100)
console.log(drivingCar)
const oddOrEven = evenOrOdd(10)
console.log (oddOrEven)

const newWordArray = unwantedWords()
console.log(newWordArray)

const sentence = wordString()
console.log(sentence)

const svenFish = svenChances(2)
console.log(svenFish)