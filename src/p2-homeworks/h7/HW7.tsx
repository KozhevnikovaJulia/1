import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);
    const [check, setCheck]= useState(true)

    return (
        <div>
            <hr/>
            <h3>homeworks 7</h3>

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
               
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                    check={check}
                    setCheck={setCheck}
                />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}

        </div>
    );
}

export default HW7;
