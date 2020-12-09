import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {loadingReducer} from '../../p2-homeworks/h10/bll/loadingReducer'
import {themeReducer} from '../../p2-homeworks/h12/bll/themeReducer'
import {AppStoreType} from '../../p2-homeworks/h10/bll/store'

export type StateType = {
    loading: boolean 
    }

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const initialGlobalState = {  
    loading: {loading: false},
    theme: "durk"
}

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppStoreType);


export const ProviderDecorator = (StoryFn: any) =>
<Provider store={storyBookStore }>{StoryFn()}</Provider>
