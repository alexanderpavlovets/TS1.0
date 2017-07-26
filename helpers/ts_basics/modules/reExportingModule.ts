// this module use a variable from exportingModule and pass it renamed to importingModule

//first way:
import {variableB} from './exportingModule'
export {variableB as variableB1}


//second way:
export {variableB as variableB2} from './exportingModule'

// it may be confusing, basically:
// 1. this module takes "variableB"
// 2. renames it to "variableB2"
// 3. exports "variableB2" further 

// this approach is used to be sure, that all app is using the same variable - for example