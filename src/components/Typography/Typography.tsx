import { ReactNode } from "react";

export default function Typography({
    type,
    size,
    children,
    textAlign,
    variant: Variant = "p",
}: {
    type?: "primary" | "secondary",
    size?: "sm" | "md" | "lg" | "xl" | "xxl",
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "sub" | "sub" | "pre" | "code" | "div",
    textAlign?: React.CSSProperties["textAlign"]
    children?: ReactNode
}) {
    const fontSize =
        size === "sm" ? 12 :
        size === "md" ? 16 :
        size === "lg" ? 24 :
        size === "xl" ? 30 :
        size === "xxl" ? 40 :
        undefined;

    return (
        <Variant 
            className={type === "secondary" ? "#666" : undefined} 
            style={{ 
                fontSize,
                textAlign
            }}
        >
            {children}
        </Variant>
    )
}