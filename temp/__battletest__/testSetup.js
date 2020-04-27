
before(async () => {
    testServer = await require('../server.js');
    serverURL = 'http://localhost:8000';
});
    
after((done) => {
    testServer.close();
    done();
});