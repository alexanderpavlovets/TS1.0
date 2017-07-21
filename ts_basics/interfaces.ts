
// This is summary of TS interfaces
// Interface can be like 'custom type' - but it is not all. See clases. 

interface ObjInterface{
    title: string
    text: string
}

function printAnObject2(obj: ObjInterface){
    console.log(obj.title + ' ' + obj.text)
}

let objForExample2 = {
    title: 'Title',
    text: 'Text'
}
// example of usage: printAnObject2(objForExample2)