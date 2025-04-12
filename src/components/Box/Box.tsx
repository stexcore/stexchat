import { ReactNode } from "react";

interface IBoxProps {
    children?: ReactNode
    display?: React.CSSProperties["display"],
    flexDirection?: React.CSSProperties["flexDirection"],
    alignItems?: React.CSSProperties["alignItems"],
    justifyContent?: React.CSSProperties["justifyContent"],
    height?: React.CSSProperties["height"],
    className?: string,
    flex?: boolean,
    gap?: number,
    p?: number,
    px?: number,
    py?: number,
    pt?: number,
    pl?: number,
    pr?: number,
    pb?: number,
    mx?: number,
    my?: number,
    mt?: number,
    mb?: number,
    ml?: number,
    mr?: number
}

export default function Box(props: IBoxProps) {

    // Margin
    const ml = props.ml ?? props.mx ?? props.p;
    const mr = props.mr ?? props.mx ?? props.p;
    const mt = props.mt ?? props.my ?? props.p;
    const mb = props.mb ?? props.my ?? props.p;

    // Padding
    const pl = props.pl ?? props.px ?? props.p;
    const pr = props.pr ?? props.px ?? props.p;
    const pt = props.pt ?? props.py ?? props.p;
    const pb = props.pb ?? props.py ?? props.p;

    return (
        <div className={props.className} style={{ 
            display: props.display,
            flexDirection: props.flexDirection,
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            flex: props.flex ? 1 : undefined,
            height: props.height,
            gap: props.gap,
            paddingTop: pt,
            paddingBottom: pb,
            paddingLeft: pl,
            paddingRight: pr,
            marginTop: mt,
            marginBottom: mb,
            marginLeft: ml,
            marginRight: mr,
        }}>
            {props.children}
        </div>
    )
};