import React, {ChangeEvent, useState} from "react";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import s from "./HW4.module.css";
import SuperButton from "./common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";

function HW4() {
    const [text, setText] = useState<string>("");
    const error = text ? "" : "error";
    const showAlert = () => {
        if (error) {
            alert("введите текст...");
        } else {
            alert(text); // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            <h3>homeworks 4</h3>

            <div className={`${s.column} ${s.blue}`}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}

                />


                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >  delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked} >I like this button {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                <SuperCheckbox
                    checked={checked}
                    onChange={testOnChange}></SuperCheckbox>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
        </div>
    );
}

export default HW4;
