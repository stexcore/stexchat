import Box from "../../components/Box/Box";
import ChatListItem from "../../components/ChatsList/ChatListItem";

export default function ChatsPage() {
    return (
        <main>
            <Box py={20}>
                <ChatListItem
                    chatname="stexcore"
                    unreaded={2}
                    lastMessage={{
                        id: 1,
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        timestamp: 1744416565777
                    }}
                />
                <ChatListItem
                    chatname="stexcore"
                    unreaded={2}
                    lastMessage={{
                        id: 1,
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        timestamp: 1744416565777
                    }}
                />
                <ChatListItem
                    chatname="stexcore"
                    unreaded={2}
                    lastMessage={{
                        id: 1,
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        timestamp: 1744416565777
                    }}
                />
                <ChatListItem
                    chatname="stexcore"
                    unreaded={2}
                    lastMessage={{
                        id: 1,
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        timestamp: 1744416565777
                    }}
                />
                <ChatListItem
                    chatname="stexcore"
                    unreaded={2}
                    lastMessage={{
                        id: 1,
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        timestamp: 1744416565777
                    }}
                />
                <ChatListItem
                    chatname="stexcore"
                    unreaded={2}
                    lastMessage={{
                        id: 1,
                        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        timestamp: 1744416565777
                    }}
                />
            </Box>
        </main>
    );
}