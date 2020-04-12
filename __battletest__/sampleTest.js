const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const server_location = 'http://localhost:8000'

let testServer;


describe('/stockdata', () => {

  describe('GET', () => {
    it('body: {ticker: GOOG}', (done) => {
      request(server_location)
        .get('/stockdata')
        .send({ ticker: 'GOOG' })
        .expect(200)
        .end((err, res) => {
          //console.log(res);
          expect(res.body).to.have.property('ticker');
          done(err);
        });
    });

  });
});

