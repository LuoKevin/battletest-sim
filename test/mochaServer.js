/**
 * 
 */

before(async () => {
  testServer = await require('../server.js');
});

after((done) => {
  testServer.close();
  done();
})
