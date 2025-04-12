import { ChangeEventHandler, ReactNode, useEffect, useState } from "react";
import Input from "../Input/Input";
import { PhoneIcon } from "../../icons/icons";
import parsePhoneNumber from "libphonenumber-js";

interface IInputPhoneProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: ReactNode,
    label?: string
}

export default function InputPhone(props: IInputPhoneProps) {
    const [value, setValue] = useState("");

    useEffect(() => {
        if(props.value !== undefined) {
            setValue(String(props.value));
        }
        else {
            setValue("");
        }
    }, [props.value]);

    const computeVisualValue = (parsePhoneNumber(value)?.formatInternational() ?? value)?.trim();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "");
        if(ev.currentTarget.value) ev.currentTarget.value = "+" + ev.currentTarget.value;
        
        setValue(ev.currentTarget.value);

        if(props.onChange) {
            return props.onChange(ev);
        }
    };
    
    return (
        <Input
            {...props}
            value={computeVisualValue}
            onChange={handleChange}
            icon={props.icon || <PhoneIcon/>}
            placeholder={props.placeholder || "+58 424-226-2884"}
        />
    )
}