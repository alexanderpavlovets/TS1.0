
// This is summary of TS classes

class User {
    // classes can have properties:
    private name: string        // accesable only within the class, by it's methods
    public email: string        // accesable from outside the class 
    protected age: number       // accesable from classes that inherit this one

    // class should have constructor:
    // constructor is special method, that runs, when you create an instance of the class
    constructor(name: string, email: string, age: number) {
        this.name = name
        this.email = email
        this.age = age
    }

    // classes can have methods:
    // methods in a class can access private properties
    getName(): string {
        return this.name
    }

    // methods can have access modificators
    private concatNameAndEmail(): string {
        return this.name + ' has an email: ' + this.email
    }

    public getNameAndEmail(): string {
        return this.concatNameAndEmail()
    }
}

// creating instance of the class:
let john = new User('John', 'John@email.com', 20)

// example of getting public property from the class: 
console.log(john.email)

//example of usage public method of the class:
console.log(john.getNameAndEmail())


// This is inheritance in TS: 

class Client extends User {
    private isPremiumFlag: boolean
    private id: number

    constructor(name: string, email: string, age: number, isPremium: boolean, id: number){
        super(name, email, age)
        this.isPremiumFlag = isPremium
        this.id = id
    }

    public getUserId(): number{
        return this.id
    }

    public getAge(){
        return this.age
    }
}

let sam = new Client('Sam', 'sam@email.com', 22, true, 1)

console.log(sam.getUserId())
console.log(sam.getAge())
console.log(sam.getName())
console.log(sam.getNameAndEmail())

/*
Uncomment it, and see what happened. Why ? 

let sam: User = new Client('Sam', 'sam@email.com', 22, true, 1)
console.log(sam.getUserId())
console.log(sam.getAge())
console.log(sam.getName())
console.log(sam.getNameAndEmail())
*/