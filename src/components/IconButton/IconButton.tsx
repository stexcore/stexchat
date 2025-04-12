import clsx from "clsx";
import "./IconButton.css";

interface IInputProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export default function IconButton(props: IInputProps) {
    return (
        <button {...props} className={clsx(props.className, "stx-icon-button")}/>
    )
}