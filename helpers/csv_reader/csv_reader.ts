import * as fs from 'fs'

export class CSVreader{
    pathToFile: string

    constructor(pathToFile: string){
        this.pathToFile = pathToFile
    }
    
    // reads data from csv to string
    stringFromTable: string = fs.readFileSync(this.pathToFile, 'utf8') 
    // splits a string from csv to an array, by lines
    arrayOfLinesFromTable: string[] = this.stringFromTable.split('\r\n')
    // defines a header of csv
    header: string[] = this.arrayOfLinesFromTable[0].split(',')

    formArrayOfObjects() {
        let finalArrayOfObjects = []
        for(let i = 1; i < this.arrayOfLinesFromTable.length; i++){
            let dataArray = this.arrayOfLinesFromTable[i].split(',')
            let object = {}
            dataArray.map((eachStringInDataArray, index) => {
                object[this.header[index]] = eachStringInDataArray
            })
            finalArrayOfObjects.push(object)
        }
        return finalArrayOfObjects
    }
}





// let stringFromTable = fs.readFileSync('./table.csv', 'utf8') //reads data from csv and gives a string
// let arr: string[] = stringFromTable.split('\r\n') // splits a string from csv to an array, by lines
// let header = arr[0].split(',') // defines a header of csv

// let finalArrayOfObjects = [] // empty array, that will contain all astrings of csv as objects
// for(let i = 1; i < arr.length; i++){
//     let dataArray = arr[i].split(',')
//     let object = {}
//     for( let j = 0; j < dataArray.length; j++){
//         object[header[j]] = dataArray[j]
//     }
//     finalArrayOfObjects.push(object)
// }

// console.log(finalArrayOfObjects)

// let blabla = finalArrayOfObjects.map((x) => {
//     return x.FirstName
// })

// console.log(blabla)