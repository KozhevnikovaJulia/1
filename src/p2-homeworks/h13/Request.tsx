import axios from "axios";
import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "./Request.module.css";


function Request() {
    const [checked, setChecked] = useState<boolean>(true);
    const [response, setResponse] = useState<string>(""); 

    const buttonOnClick = () => {

      return  axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: checked})
            .then((response) => {
                setResponse(response.data.errorText)
            })
            .catch((error) => {
                console.log( {...error} )
                console.log( error.response ? error.response.data.errorText : error.message )                
            })
    }


    const changeChecked = () => {
        setChecked(!checked)
    }
    return (

        <div >
            <SuperButton onClick={buttonOnClick} > Request </SuperButton>
            <SuperCheckbox checked={checked} onChangeChecked={changeChecked} >
            </SuperCheckbox>
            <div className ={s.responseText}>
             RESPONSE: {response}
            </div>



        </div>
    );
}

export default Request;
