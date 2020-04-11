/**
 * Sample test document.
 */

const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const serverURL = 'http://localhost:8000'

describe('/stockdata', () => {

  describe('GET', () => {
    it('body: {ticker: GOOG}', (done) => {
      request(serverURL)
        .get('/stockdata')
        .send({ ticker: 'GOOG' })
        .expect(400)
        .end((err, res) => {
          expect(res.body).to.have.property('ticker');
          done(err);
        });
    });

  });
});

