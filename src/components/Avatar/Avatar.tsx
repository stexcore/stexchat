import "./Avatar.css";

export default function Avatar({
    size = "md",
    src
}: {
    size?: "sm" | "md" | "lg" | "xl" | "xxl",
    src?: string
}) {
    const width =
        size === "sm" ? "28px" :
        size === "md" ? "40px" :
        size === "lg" ? "60px" :
        size === "xl" ? "80px" :
        size === "xxl" ? "100px" :
        undefined;
    
    return (
        <img className="stx-avatar" src={src} style={{ width: width, height: width }}/>
    )
}