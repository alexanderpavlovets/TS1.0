
// This is summary of TS interfaces
// Interface can be like 'custom type' - but it is not all 

interface ObjInterface{
    title: string
    text: string
}

function printAnObject2(obj: ObjInterface) {
    console.log(obj.title + ' ' + obj.text)
}

let objForExample2 = {
    title: 'Title',
    text: 'Text'
}
// example of usage: 
printAnObject2(objForExample2)



// Interfaces with classes 
interface GuardInterface {
    name: string
    age: number
    watch(): string
    kickOutBadGuy()
}

class BarGuard implements GuardInterface{
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    watch(){
        return 'I am evil guard, and i am watching you'
    }

    kickOutBadGuy(){
        console.log('Bye bye!')
    }
}