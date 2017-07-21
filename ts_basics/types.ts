
// This is summary of TS basic types
// Keep in mind, that we can assign function with appropriate return type to these variables also


//Primitives in TS:
let myString: string    // '', concateneted 'a'+ 123
let myNum: number       // 1, -22, 5+5 expressions , 5.5 decimals , 0xf00d - HEX decimal
let myBool: boolean     // true, false 
let myVar: any          // can be anything 

myString = 'Hi there!'
myNum = 123
myBool = true
myVar = 1


//Arrays - 2 ways of declaring:
let strArray: string[]
let numArray: number[]
let boolArray: boolean[]

let strArray2: Array<string>
let numArray2: Array<number>
let boolArray2: Array<boolean>

strArray = ['Hello', ' ', 'TS']
numArray = [1, 2, 3]
boolArray = [true, false, true]


// Tuple: 
let strNumTuple: [string, number]

strNumTuple = ["Hello", 123]    // exact order and types should be declaired
strNumTuple = ["Hello!", 1234, 'When you pass initial type and it\'s order - you can add numbers and strings randomly', 123, 456]


// Special types:
let myVoid: void
let myNull: null
let myUndefined: undefined

myVoid = null
myNull = null
myUndefined = undefined
