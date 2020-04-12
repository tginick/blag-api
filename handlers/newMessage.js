import dynamoDb from "../lib/dynamodb-lib";
import handler from "../lib/handler-lib";
import { v1 as uuidv1 } from "uuid";

export const main = handler(async (event, context) => {
    const data = JSON.parse(event.body);
    const newMessageId = uuidv1();

    const params = {
        TableName: process.env.emailTableName,
        Item: {
            messageId: newMessageId,
            senderName: data.senderName,
            senderEmail: data.senderEmail,
            messageContent: data.messageContent,
            createdAt: Date.now()
        }
    };

    await dynamoDb.put(params);
    return newMessageId;
});