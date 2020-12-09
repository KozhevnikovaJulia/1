import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    //  let value = [value1,value2]  
    const onChangeRange = (value: number[] | number) => {
        if (typeof value !== 'number') {
            setValue1(value[0])
            setValue2(value[1])
        }

    }
    return (
        <div>
            <hr />
            <h3>homeworks 11 </h3>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeRange}
                />
                <span>{value2}</span>
            </div>

        </div>
    );
}

export default HW11;
