import {CSVreader} from '../helpers/csv_reader/csv_reader'



let path = '../test_data/table.csv'
function showMeCSV(){   
    let reader = new CSVreader(path)
    console.log(reader.formArrayOfObjects())
}
showMeCSV()

// let path = '../test_data/table.csv'
// let reader = new CSVreader(path)
// let obj = reader.formArrayOfObjects()
// console.log(obj)
// console.log(obj[0])
