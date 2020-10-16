import React from "react";
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    return (
        <div className={s.affair} >
            <div>{props.affair.name}</div>
           <div><SuperButton onClick={deleteCallback}>X</SuperButton></div>

            {/*<button onClick={deleteCallback}>X</button>*/}
        </div>
    );
}

export default Affair

