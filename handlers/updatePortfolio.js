import newBasicHandler from "../lib/handler-lib";

export const main = newBasicHandler(async (event, _context) => {
    return [202, ""];
});