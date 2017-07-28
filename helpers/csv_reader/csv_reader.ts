import * as fs from 'fs'

class User{
    public firstName: string
    public lastName: string 
    public id: number

    constructor(firstName: string, lastName: string, id: number){
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
    }
}

export function getUsersFromCSV(pathToFile: string): User[] {
    let linesOfGivenCSV: string[] = fs.readFileSync(pathToFile, 'utf8').split('\r\n')
    //console.log('got these lines: '+linesOfGivenCSV)
    linesOfGivenCSV = linesOfGivenCSV.slice(1, linesOfGivenCSV.length) //removing the header

    let users: User[] = []
    for( let line of linesOfGivenCSV){
        // FirstName, LastName, id
        let splittedUser = line.split(',')
        users.push(new User(splittedUser[0], splittedUser[1], Number(splittedUser[2]))) // cast to number is possible by +'string'
    }
    return users
}