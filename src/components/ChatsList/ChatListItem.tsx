import { useMemo } from "react";
import Avatar from "../Avatar/Avatar";
import Box from "../Box/Box";
import "./ChatList.css";
import ageUtil from "../../utils/age.util";

interface IChatListItemProps {
    chatname: string,
    unreaded: number,
    lastMessage?: {
        id: number,
        body: string,
        timestamp: number,
    }
}

export default function ChatListItem({
    chatname,
    unreaded,
    lastMessage
}: IChatListItemProps) {

    const lastTime = useMemo(() => {
        return String(lastMessage?.timestamp && ageUtil.getTimeDistance(lastMessage.timestamp));
    }, [lastMessage?.id]);
    
    return (    
        <button className="stx-chatlist-item">
            <Box display="flex" flex gap={15} py={20}>
                <Box display="flex" alignItems="center">
                    <Avatar src="https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png"/>
                </Box>
                <Box display="flex" flexDirection="column" flex>
                    <div className="stx-chatlist-chatname">{chatname}</div>
                    <div className="stx-chatlist-lastmessage">{lastMessage?.body}</div>
                </Box>
                <Box display="flex" alignItems="flex-end" justifyContent="center" gap={8} flexDirection="column">
                    <div className="stx-chatlist-age">
                        {lastTime}
                    </div>
                    <div className="stx-chatlist-unreaded">
                        {unreaded}
                    </div>
                </Box>
            </Box>
            <div style={{position: "absolute",borderBottom: "1px solid #aaf", width: "calc(100% - 30px)", top: "calc(100% - 1px)", left: "15px", margin: "auto"}}></div>
        </button>
    );
}