import React, {ChangeEvent} from "react";
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[] | number) => void
    value?: number[]
    // min, max, step, disable, ...
}




const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
         onChangeRange, value,
         
        // min, max, step, disable, ...
    }
) => {
       
      const handleChange = (event: any, value: number | number[]) => {
        onChangeRange && onChangeRange( value);     
      };
    return     <Slider
                value={value}               
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"                         
            />

}

export default SuperDoubleRange;
