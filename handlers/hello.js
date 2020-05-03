import newBasicHandler from "../lib/handler-lib";

export const main = newBasicHandler(async (_event, _context) => {
    return [200, "Hello World!"];
});