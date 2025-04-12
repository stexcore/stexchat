import { Outlet } from "react-router";
import "./ChatItemLayout.css";
import Box from "../components/Box/Box";
import IconButton from "../components/IconButton/IconButton";
import { BackIcon, DotsVerticalIcon, NotificationIcon } from "../icons/icons";

export default function ChatItemLayout() {
    return (
        <div className="stx-chatitem-layout">
            <Box display="flex" className="stx-chatitem-layout-header" p={5} gap={10}>
                <Box>
                    <IconButton>
                        <BackIcon size="lg"></BackIcon>
                    </IconButton>
                </Box>
                <Box flex>
                    <Box>Stexcore Technology</Box>
                    <Box>
                        <small>+58 424 226 2884</small>
                    </Box>
                </Box>
                <Box display="flex">
                    <IconButton>
                        <NotificationIcon size="lg"/>
                    </IconButton>
                    <IconButton>
                        <DotsVerticalIcon size="lg"/>
                    </IconButton>
                </Box>
            </Box>
            <div className="stx-chatitem-layout-content">
                <Outlet></Outlet>
            </div>
        </div>
    );
}