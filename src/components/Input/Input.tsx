import { ReactNode, useId } from "react";
import "./Input.css";
import clsx from "clsx";

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: ReactNode,
    endIcon?: ReactNode,
    border?: boolean,
    rounded?: boolean,
    shadow?: boolean,
    label?: string,
}

export default function Input({
    border = true,
    rounded = false,
    shadow = false,
    size,
    style,
    ...props
}: IInputProps) {
    const id = useId();

    return (
        <label htmlFor={id} className={clsx("stx-input-label", { rounded, "not-border": !border, shadow })} style={{ paddingTop: props.label ? 8 : 0, ...style }}>
            <fieldset>
                {props.label && (
                    <legend>{props.label}</legend>
                )}
            </fieldset>
            {props.icon && (
                <div className="stex-input-icon">
                    {props.icon}
                </div>
            )}
            <input id={id} {...props} />
            {props.endIcon && (
                <div className="stex-input-icon">
                    {props.endIcon}
                </div>
            )}
        </label>
    );
};