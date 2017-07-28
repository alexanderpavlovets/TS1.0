import {getUsersFromCSV } from '../helpers/csv_reader/csv_reader'

//console.log(getUsersFromCSV('../test_data/table.csv'))

let users = getUsersFromCSV('../test_data/users.csv')
console.log(users)

let alexUser = users.filter((user) => {
    return user.firstName === 'Alex'
})
console.log(alexUser)
