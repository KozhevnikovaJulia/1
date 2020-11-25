type ActionType = ReturnType<typeof loadingAC>

export type StateType = {
    loading: boolean 
    }
const initState: StateType = {
loading: false
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { 
    switch (action.type) {
        case "LOADING": {
            let stateCopy = {...state}
            stateCopy.loading = !state.loading
            return stateCopy;
        }
        default: return state;
    }
};

export const loadingAC = () => {
    return { type: "LOADING"} as const
}; 

