import { Outlet } from "react-router";
import Input from "../components/Input/Input";
import { SearchIcon } from "../icons/icons";
import Box from "../components/Box/Box";
import "./ChatsLayout.css";

export default function ChatsLayout() {
    return (
        <Box>
            <Box className="stx-chats-layout-header">
                <Input 
                    placeholder="Search chat..." 
                    style={{background: "white", padding: "10px"}} 
                    border={false}
                    icon={<SearchIcon size="lg"/>}
                    rounded
                ></Input>
            </Box>
            <Outlet></Outlet>
        </Box>
    );
}