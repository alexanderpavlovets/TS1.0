import {getUsersFromCSV } from '../helpers/csv_reader/csv_reader'

//console.log(getUsersFromCSV('../test_data/table.csv'))


//let users = getUsersFromCSV('test_data/users.csv') - or this path to run as "npm test"
// when ready to use in 'npm test' - add a parameter to tractor.conf.js - path to test data
let users = getUsersFromCSV('../test_data/users.csv')
console.log(users)

let alexUser = users.filter((user) => {
    return user.firstName === 'Alex'
})
console.log(alexUser)
