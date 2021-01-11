import React, {ChangeEvent}  from "react";
import s from "./HW12.module.css";
import {useSelector, useDispatch} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeAC, initStateType } from "../h12/bll/themeReducer"

const themes = ['dark', 'red', 'some'];

function HW12() {
    let theme 
     theme = useSelector<AppStoreType, string> (state => state.theme.themeColor) 
    
    
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

     function onChangeCallback (theme: string) {
        let action = changeThemeAC (theme)
        dispatch (action)        
    }    
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
             <h3>homeworks 12</h3>   
            </span>
             <SuperSelect options={themes}
                          onChangeOption={onChangeCallback}
                          value={theme}
                          />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

        </div>
    );
}

export default HW12;
