const initState = "red"

type ActionType = ChangeThemeActionType

type ChangeThemeActionType = {
                    type: "CHANGE-THEME",
                    theme: string                  
                }

export const themeReducer = (state: string = initState, action: ActionType): string => { 
    switch (action.type) {
        case "CHANGE-THEME": {
            let stateCopy = state
            stateCopy = action.theme;
            return stateCopy;

            // return action.theme;
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: string): ChangeThemeActionType => {
    return { type: "CHANGE-THEME", theme}
} 

