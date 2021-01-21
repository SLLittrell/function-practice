console.log("Welcome to the main module")
import {dogBreed} from './practice.js'
import {add} from './practice.js'
import {go} from './practice.js'
import {evenOrOdd} from './practice.js'
import {unwantedWords} from './practice.js'
import {wordString} from './practice.js'
import {svenChances} from './practice.js'


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