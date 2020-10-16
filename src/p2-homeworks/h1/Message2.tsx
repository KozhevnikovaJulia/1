import React from "react";
import style from './Message2.module.css';


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


 function Message2(props:MessagePropsType) {
    return (
        <div className={style.message}>
            <div className={style.ava}>
                <img src={props.avatar} />
            </div>
            <div className={style.messageArea}>
                <span>{props.name}</span>
                <div> {props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>





        </div>
    );
}

export default Message2;
