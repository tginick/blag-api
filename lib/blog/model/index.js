/*
// data looks like:
export const BLOG_POSTS = {
    "timestamp_00000001": {
        Title: { "S": "This is a test post!" },
        Category: { "SS": ["test", "testtest"] },
        Content: { "S": "Hello World!" },
        CreatedAt: { "N": 1 },
    }
}
*/

// using dynamodb model
import model from './dynamo/model';


export default model;