import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div>
            <div style={{ 
                background: "#333", 
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
                borderEndStartRadius: "30px",
                borderEndEndRadius: "30px"
            }}>
                <h1>
                    stexcore
                </h1>
            </div>
            <Outlet></Outlet>
        </div>
    );
}