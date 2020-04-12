import handler from "../lib/handler-lib";

export const main = handler(async (event, context) => {
    return "Hello World!";
});