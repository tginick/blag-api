import * as _ from 'lodash';
import dynamoDb from '../../../dynamodb-lib';

async function getLatestTitles(endTimeStamp = Number.MAX_SAFE_INTEGER, numToGet = 10, categories = []) {
    const params = {
        TableName: process.env.blagTableName,
        KeyConditionExpression: `blog = :blog AND #timestamp < :endtimestamp`,
        ProjectionExpression: "title, #timestamp",
        ExpressionAttributeNames: {
            "#timestamp": "timestamp",
        },
        ExpressionAttributeValues: {
            ":blog": "BLOGPOST",
            ":endtimestamp": endTimeStamp,
        },
        ScanIndexForward: false,
        Limit: numToGet,
    };

    const queryResult = await dynamoDb.query(params);
    if (_.isNil(queryResult.Items)) {
        return {};
    } else {
        return queryResult.Items;
    }
}

export default {
    getLatestTitles,
};