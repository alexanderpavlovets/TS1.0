// Basic example how to get into DB. 
// git hub of library: https://github.com/vitaly-t/pg-promise use WIKI for further work

import {IMain, IDatabase} from 'pg-promise'
import * as pgPromise from 'pg-promise'

const connection = {
    host: 'postgretest.toonimo.com',
    port: 5432,
    database: 'toonimo_multipage',
    user: 'toonimo',
    password: ''  // add a password here before the tests
}

const pgp:IMain = pgPromise()
const db:IDatabase<any> = pgp(connection)



// very basic example, in real functions use try-catch, in order to handle errors
async function get(id){
    let a = await db.any('SELECT * FROM clients WHERE client_id = $1', id)
    console.log(a[0].name)
    console.log("Hi there - i am after the request")
    pgp.end()
}

// get(2564)