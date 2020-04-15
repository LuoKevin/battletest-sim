module.exports = {
    serverLocation: "../server.js",
    serverURL: "http://localhost:8000",
    authorization_cookie: null,
    paths: {
      "/pet/:petID": {
        GET: {
          parameters: [
            {
              name: "petID",
              in: "path",
              schema: {
                type: "integer",
              },
            },
            {
              name: "lastVisitedDate",
              in: "cookie",
              schema: { type: "string" },
            },
            {
              name: "token",
              in: "header",
              schema: {
                type: "array",
                items: {
                  type: "integer",
                },
              },
            },
          ],
        },
        PUT: {
          parameters: [
            {
              name: "petID",
              in: "path",
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            "text/plain": {},
            "application/json": {
              schema: {
                type: "object", // can also be an array
                properties: {
                  name: { 
                      type: "string" 
                    },
                  petType: {
                    type: "string",
                  },
                  favoriteFoods: {
                    type: "array",
                    items: "string",
                  },
                  family: {
                      type: 'object',
                      properties: {
                          mom: { type: "string" },
                          dad: { type: "string" },
                          siblings: {
                              type: 'object',
                              properties: {
                                  sisters: { type: "array", items: "string" },
                                  brothers: { type: "array", items: "string" },
                              }
                          }
                      }
                  }
                },
              },
            },
          },
        },
      },
    },
  };
  