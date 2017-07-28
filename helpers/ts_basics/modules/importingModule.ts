// import from usual exporting module and rename one of variables:
import {
    ExportedInterface,
    ExportedClass,
    exportedVariable,
    exportedVariableThatWillBeRenamed as myVar,
    variableB
} from './exportingModule'

console.log(exportedVariable)
console.log('Renamed in import file: ' + myVar)
console.log('Renamed in export file: ' + variableB)


// import all the stuff from module
// with this type of import, you can't rename properties of imported data
import * as allImportedData from './exportingModule'

console.log('Imported with * (all at once): ' + allImportedData.exportedVariable)


// import from module with default export type:
// with this type of import, 
// you can write any name of imported data - anyway only default data will be assigned to it
import importedFunctionFromModuleThatHasDefaultExport from './defaultExportingModule'

importedFunctionFromModuleThatHasDefaultExport()


// import of the module, that isn't export anything:
import './moduleWithSideEffect'
console.log(i)


//import from module, that re-exporting variables
import {variableB1} from './reExportingModule'
console.log(variableB1)

import {variableB2} from './reExportingModule'
console.log(variableB2)