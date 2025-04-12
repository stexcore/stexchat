import { EmojiIcon, SendIcon } from "../../icons/icons";
import Box from "../Box/Box";
import IconButton from "../IconButton/IconButton";
import Input from "../Input/Input";

export default function ChatInput() {
    return (
        <Box p={5}>
            <Input 
                icon={
                    <IconButton>
                        <EmojiIcon/>
                    </IconButton>
                }
                endIcon={
                    <IconButton>
                        <SendIcon/>
                    </IconButton>
                }
                border={false}
                rounded 
                shadow 
            ></Input>
        </Box>
    )
}