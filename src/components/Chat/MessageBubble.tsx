import clsx from "clsx";
import { IMessage } from "../../types/message";
import "./Chat.css";

export default function MessageBubble({
    message,
}: {
    message: IMessage
}) {
    return (
        <div>
            <div className={clsx("stx-chat-bubble")}>
                {message.body}
            </div>
        </div>
    );
}