import { initialStateObjType } from './tests/homeWorkReducer.test';

type ActionType = CheckAge18 | SortName

type CheckAge18 = {
    type: "CHECK-AGE-18"
    age: number
}
type SortName = {
    type: "SORT-NAME"
    orientation: "up" | "down"
}


export const homeWorkReducer = (state: Array<initialStateObjType>, action: ActionType): Array<initialStateObjType> => {
    switch (action.type) {
        case "SORT-NAME": {
            let newState = state.map(el => {
                return { ...el }
            })
            if (action.orientation === "up") {
                newState.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
            } else {
                newState.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                });
            }
            return newState
        }
        
        case "CHECK-AGE-18": {
            let filtredState = state.filter(el => el.age > action.age)
            return (filtredState)
        }
        default: throw new Error("I do not andastand this action.type!")

    }
}