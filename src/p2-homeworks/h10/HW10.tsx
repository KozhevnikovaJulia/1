import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useSelector,useDispatch} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, StateType} from "./bll/loadingReducer";
import Spinner from "../h10/svg/Wedges-3s-200px (1).svg"

function HW10() {    
    const loading = useSelector<AppStoreType, StateType>(state => state.loading)
    const dispatch = useDispatch()

    const setLoading = () => {
        const action = loadingAC()
        dispatch(action)
        setTimeout((()=>{ dispatch(action)}),2000)       
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
           <h3>homeworks 10</h3> 
          
            {loading.loading
                ? (
                    <div><img src={Spinner} /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    );
}

export default HW10;
