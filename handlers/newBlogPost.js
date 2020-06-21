import newBasicHandler from "../lib/handler-lib";
import { checkSecret, isValidSecretLoaded } from "../lib/admin-secret";
//import { v1 as uuidv1 } from "uuid";

export const main = newBasicHandler(async (event, _context) => {
    if (!isValidSecretLoaded()) {
        return [500, "Unexpected error in processing request"];
    }

    const payloadData = JSON.parse(event.body);
    if (!checkSecret(payloadData.secret)) {
        return [403, ""];
    }

    //const newBlogId = uuidv1();

    return [202, ""];
});