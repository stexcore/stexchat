import { MessageType } from "../../types/message";
import Box from "../Box/Box";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import "./Chat.css";

export default function Chat() {
    return (
        <Box display="flex" flexDirection="column" flex height="100%">
            <Box flex height="100%" p={10} gap={6} display="flex" flexDirection="column">
                <MessageBubble
                    message={{
                        id: 1,
                        from: 1,
                        to: 1,
                        type: MessageType.TEXT,
                        body: "Message body",
                        fromMe: true,
                        timestamp: 1,
                    }}
                />
                <MessageBubble
                    message={{
                        id: 1,
                        from: 1,
                        to: 1,
                        type: MessageType.TEXT,
                        body: "Message body long text",
                        fromMe: true,
                        timestamp: 1,
                    }}
                />
                <MessageBubble
                    message={{
                        id: 1,
                        from: 1,
                        to: 1,
                        type: MessageType.TEXT,
                        body: "short!",
                        fromMe: true,
                        timestamp: 1,
                    }}
                />
            </Box>
            <ChatInput></ChatInput>
        </Box>
    );
}