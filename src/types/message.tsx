export enum MessageType {
    TEXT
}

export interface IMessageBase {
    id: number,
    from: number,
    to: number,
    fromMe: boolean,
    timestamp: number
}

export interface IMessageText extends IMessageBase {
    type: MessageType.TEXT,
    body: string
}

export type IMessage =
    | IMessageText;