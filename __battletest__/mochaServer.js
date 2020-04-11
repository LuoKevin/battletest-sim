/**
 * Starts the test server before any tests are run.
 * Closes the test server once all tests have been run.
 */

before(async () => {
  testServer = await require('../server.js');
});

after((done) => {
  testServer.close();
  done();
})
