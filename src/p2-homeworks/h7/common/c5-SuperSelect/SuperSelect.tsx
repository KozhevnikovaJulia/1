import { Options } from "@material-ui/core";
import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    
   
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {   options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    
    const mappedOptions = options && options.map((o, index) => 
        <option className={s.items} key={index} >{o}</option>       
    )

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select className ={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}


export default SuperSelect;

