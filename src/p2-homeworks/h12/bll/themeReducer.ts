// const initState = "red"
const initState = {themeColor:"red"}

export type initStateType = {
    themeColor: string
}

type ActionType = ChangeThemeActionType

type ChangeThemeActionType = {
                    type: "CHANGE-THEME",
                    theme: string                  
                }

export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType=> { 
    switch (action.type) {
        case "CHANGE-THEME": {
            let stateCopy = state
            stateCopy = {...state, themeColor: action.theme }           
            return stateCopy;
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: string): ChangeThemeActionType => {
    return { type: "CHANGE-THEME", theme}
} 

