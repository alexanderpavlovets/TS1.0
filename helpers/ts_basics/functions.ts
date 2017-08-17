
// This is summary of TS basic types for functions


// defining the parameters types & return type of the function: 
function getSum(num1: number, num2: number): number {
    return num1 + num2
}

function getName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName
}

function getSum2(num1: any, num2: any): number {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1)
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2)
    }
    return num1 + num2
}


// function can return nothing - void. Try to add any data for return statement: 
function myVoidFunction(): void {
    return
}


// making one of the parameters optional - pay attention to '?': 
function getName2(firstName: string, lastName?: string): string {
    if (lastName == undefined) {
        return firstName
    }
    return firstName + ' ' + lastName
}

// do not forget about default parameters values also:
// this will make 2nd parameter filled with default value, if it won't be passed  
function getName3(firstName: string, lastName: string = 'Default lastName'): string {
    return firstName + ' ' + lastName
}


// parameter's type can be complex:
// see interfaces, and compare what is better 
function printAnObject(obj: { title: string, text: string }): void {
    console.log(obj.title + ' ' + obj.text)
}

let objForExample = {
    title: 'Title',
    text: 'Text'
}
// example of usage: 
printAnObject(objForExample)

