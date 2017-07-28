// this module exporting data outside 

// ususal local data
interface LocalInterface12{}
class LocalClass{}
const localVariable: number = 123


// exporting stuff, it is not local
export interface ExportedInterface{}
export class ExportedClass{}
export const exportedVariable: string = 'I am exported varialbe' 
export const exportedVariableThatWillBeRenamed: string = 'I am a variable that is renamed during export'

const variableA: string = 'I am variableA, but my export file renamed me'
export {variableA as variableB} 



