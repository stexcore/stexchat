import { ReactNode } from "react";
import "./Button.css";

export default function Button({
    children
}: {
    children?: ReactNode
}) {
    return (
        <button className="stx-button">
            {children}
        </button>
    );
}