import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";



type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    name: string
    options?: Array<string>
    onChangeOption?: (option: string) => void
    
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {   type, name,
        options, value,
        onChange, onChangeOption,
          ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {       
        onChangeOption && onChangeOption(e.currentTarget.value)        
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( 
        <label key={name + "-" + i}>
            <input 
                name={name}
                value={o}
                type={"radio"}
                onChange={onChangeCallback}
                checked={o === value}

            // name, checked, value, onChange
            />
            
        </label>
    )) : [];

    return (
        <div>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
