module.exports = {
  serverLocation: null,
  serverURL: null,
  authorization_cookie: null,
  expectedStatusCode: 400,
  paths: {
    "/stockdata": {
      method: {
        requestBody: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ticker: {
                  type: null
                }
              }
            }
          }
        }
      }
    }
  }
}