import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";



type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    name: string
    options?: Array<string>
    onChangeOption?: (option: string) => void
    check: boolean
    setCheck: (check: boolean) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    { check, setCheck,
        type, name,
        options, value,
        onChange, onChangeOption,
          ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(!check) 
        onChangeOption && onChangeOption(e.currentTarget.value)
        
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + "-" + i}>
            <input 
                name={name}
                value={value}
                type={"radio"}
                onChange={onChangeCallback}
                checked={check}

            // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
