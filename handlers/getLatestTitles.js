import blogModel from '../lib/blog/model';
import newBasicHandler from "../lib/handler-lib";

export const main = newBasicHandler(async (event, _context) => {
    const data = await blogModel.getLatestTitles();
    return [200, data];
});
