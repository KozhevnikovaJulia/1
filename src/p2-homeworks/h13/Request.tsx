import axios from "axios";
import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "./Request.module.css";


function Request() {
    const [checked, setChecked] = useState<boolean>(true);
    const [response, setResponse] = useState<string>(""); 

    const buttonOnClick = () => {
        axios.get("https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},")
            .then((response) => {
                setResponse(response.data)
            })
            .catch((error) => {
                setResponse(error.response.data.error)
            })

        axios.post("https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true},", {success: checked})
            .then((response) => {
                setResponse(response.data)
            })
            .catch((error) => {
                setResponse(error.response.data.error)
                console.log(error.response.data.error)
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
