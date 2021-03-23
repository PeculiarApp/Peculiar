// Anchor
let anchorDisplayData:Array<IAnchor> = []
    
interface IAnchorData {
    name: string
}

interface IAnchor {
    name: string,
    modify: CallableFunction,
    remove: CallableFunction
}

export const anchorData = () => {
    return anchorDisplayData
}

export const addAnchor = (data:IAnchorData) => {
    anchorDisplayData.push(
        {
            name: data.name,
            modify: getStateEvent("modify", {name: data.name}),
            remove: getStateEvent("remove", {name: data.name}),
        }
    )
}

export const removeAnchor = (data:object) => {

}

// States
export let state = "list"
const getStateEvent = (newState:string, data:object): CallableFunction => {
    switch (newState) {
        case "remove":
        case "modify":
            return () => {
                state = newState 
            }

        case "add":
        case "list":
            return () => {
                state = newState 
            }
    }
}

export const changeToAddState = () => {return getStateEvent("add", {})}