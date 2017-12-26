exports.handler = (event, context, callback) => {
  
  console.log("EVENT!!!: " + JSON.stringify(event));

  const name =
    (event.queryStringParameters && event.queryStringParameters.name) ? event.queryStringParameters.name : 'World';

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
    body:  JSON.stringify({message: `Hello ${name}`})
  };

  callback(null, response);
};
