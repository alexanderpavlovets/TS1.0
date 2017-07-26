import * as fs from 'fs'

let stringFromTable = fs.readFileSync('../table.csv', 'utf8') //reads data from csv and gives a string
let arr: string[] = stringFromTable.split('\r\n') // splits a string from csv to an array, by lines
let header = arr[0].split(',') // defines a header of csv

let finalArrayOfObjects = [] // empty array, that will contain all astrings of csv as objects
for(let i = 1; i < arr.length; i++){
    let dataArray = arr[i].split(',')
    let object = {}
    for( let j = 0; j < dataArray.length; j++){
        object[header[j]] = dataArray[j]
    }
    finalArrayOfObjects.push(object)
}

console.log(finalArrayOfObjects)

let blabla = finalArrayOfObjects.map(async (x) => {return x.FirstName})

console.log(blabla)