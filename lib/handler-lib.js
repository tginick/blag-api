export default function newBasicHandler(actualHandlerFunction) {
    return function(event, context) {
        return Promise.resolve()
            .then(() => actualHandlerFunction(event, context))

            //.then(([responseCode, responseBody]) => [responseCode, responseBody])
            .catch((e) => [500, { error: e.message }])

            .then(([statusCode, body]) => ({
                statusCode,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                },
                body: JSON.stringify(body)
            }));
    };
}