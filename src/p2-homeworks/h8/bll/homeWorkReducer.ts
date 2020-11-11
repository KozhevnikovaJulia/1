import { initialStateObjType } from './tests/homeWorkReducer.test';

type ActionType = SortNameUp | SortNameDown | CheckAge18
type SortNameUp = {
    type: "SORT-NAME-UP"
}
type SortNameDown = {
    type: "SORT-NAME-DOWN"
}
type CheckAge18 = {
    type: "CHECK-AGE-18"
    age: 18
}


export const homeWorkReducer = (state: Array<initialStateObjType>, action: ActionType): Array<initialStateObjType> => {
    switch (action.type) {
        case "SORT-NAME-UP": {
            let newState = state.map(el => {
                return { ...el }
            })
            newState.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
            return newState            
        }

        case "SORT-NAME-DOWN": {
            let newState = state.map(el => {
                return { ...el }
            })
            newState.sort((a, b) => {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            });
            return newState
        }
        case "CHECK-AGE-18": {
            let filtredState = state.filter(el => el.age > action.age)
            return (filtredState)
        }
        default: throw new Error("I do not andastand this action.type!")

    }
};