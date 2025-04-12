import { ReactNode, useContext, useEffect, useRef } from "react";
import { TabContext } from "./Tabs";
import "./Tabs.css";

export default function TabItem({
    value,
    children
}: {
    value: string,
    children?: ReactNode
}) {
    const idRef = useRef<number>(0);
    const buttonRef = useRef<HTMLButtonElement|null>(null)
    const tabContext = useContext(TabContext);

    useEffect(() => {
        if(buttonRef.current) {
            const bourding = buttonRef.current.getBoundingClientRect();
            const id = idRef.current = tabContext.register(value, bourding.width);

            const idInterval = setInterval(() => {
                const bourding = buttonRef.current?.getBoundingClientRect();

                if(bourding) {
                    tabContext.update(id, value, bourding.width);
                }
            }, 1000);
            
            return () => {
                tabContext.unregister(id);
                clearInterval(idInterval);
            };
        }
    }, [value]);
    
    return (
        <button
            className={"stx-tab-item" + (tabContext.selected === idRef.current ? " active" : "")}
            onClick={() => tabContext.selectTab(idRef.current)}
            ref={buttonRef}
        >
            { children ?? value }
        </button>
    )
}