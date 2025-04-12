import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import "./Tabs.css";

interface ITabContext {
    selected: number | null,
    selectTab(id: number): void,
    register(name: string, width: number): number,
    update(id: number, name: string, width: number): void,
    unregister(id: number): void,
}

export const TabContext = createContext<ITabContext>({
    selected: null,
    selectTab() { throw new Error("Not implemented!"); },
    register() { throw new Error("Not implemented!"); },
    update() { throw new Error("Not implemented!"); },
    unregister() { throw new Error("Not implemented!"); },
})

export default function Tabs({
    children,
    defaultValue
}: {
    children: ReactNode,
    defaultValue?: string,
}) {
    const idRef = useRef(0);
    const [idTabSelected, setIdTabSelectedTab] = useState<number | null>(null);
    const [tabs, setTabs] = useState<{ id: number, name: string, width: number }[]>([]);
    
    const indexTabSelected = tabs.findIndex((tab) => tab.id == idTabSelected);
    const tabSelected = tabs[indexTabSelected];
    const tabsSliced = tabs.slice(0, indexTabSelected);
    const offsetLeft = tabsSliced.reduce((t, i) => t + i.width, 0);

    useEffect(() => {
        if(defaultValue) {
            const tabSelected = tabs.find((tabs) => tabs.name === defaultValue);
    
            
            if(tabSelected) {
                setIdTabSelectedTab(tabSelected.id);
            }
        }
    }, [!!tabs.length]);
    
    function selectTab(id: number) {
        setIdTabSelectedTab(id);
    }
    
    function register(name: string, width: number) {
        const id = ++idRef.current;

        setTabs((tabs) => ([
            ...tabs,
            {
                id: id,
                name: name,
                width: width
            }
        ]));
        
        return id;
    }

    function unregister(id: number) {
        setTabs((tabs) => (
            tabs.filter((tabItem) => tabItem.id !== id)
        ));
    }

    function update(id: number, name: string, width: number) {
        setTabs((tabs) => (
            tabs.map((tabItem) => (
                tabItem.id === id ? { id, name, width } : tabItem
            ))
        ));
    }
    
    return (
        <TabContext.Provider value={{
            selected: idTabSelected ?? null,
            selectTab,
            register,
            unregister,
            update
        }}>
            <div className="stx-tabs">
                {children}
                {tabSelected && (
                    <div style={{ left: offsetLeft, width: tabSelected.width }} className="stx-line"></div>
                )}
            </div>
        </TabContext.Provider>
    );
}