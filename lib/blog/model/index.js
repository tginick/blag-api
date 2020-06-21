import { CONF } from '../../conf';

/*
export const BLOG_POSTS = {
    "timestamp_00000001": {
        Title: { "S": "This is a test post!" },
        Category: { "SS": ["test", "testtest"] },
        Content: { "S": "Hello World!" },
        CreatedAt: { "N": 1 },
    }
}
*/

const model = require(`./${CONF.blogDataSource}/model`);
export default model;