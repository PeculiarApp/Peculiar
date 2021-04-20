//* Import Packages
const commandLineArgs = require("command-line-args")

//* Define Tests
const displayTests = () => {
    console.error("Desktop Tests Are Not Implemented Yet")
}

const controllerTests = () => {
    console.error("Container Tests Are Not Implemented Yet")
}

//* Run Tests
const argDefinitions = [
    { name: 'test', alias: 't', type: String, defualtOption: true, defaultValue: "all" }  
]
const args = commandLineArgs(argDefinitions)

switch(args.test) {
    case "all":
        displayTests()
        controllerTests()
        break
    case "display":
        displayTests()
        break
    case "controller":
        controllerTests()
        break
    default:
        console.error(`Tests for ${args.test} Does note Exist`)
        break
}