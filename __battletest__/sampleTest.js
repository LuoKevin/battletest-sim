/**
 * Sample test document.
 */

const fs = require('fs');
const path = require('path');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const result = {}

describe('/stockdata', function() {
  describe('GET', function(){
    it('body: {ticker: GOOG}', function(done) {
      let endTime;
      const startTime = Date.now();
      request(serverURL)
        .get('/stockdata')
        .send({ ticker: 'GOOG' })
        .expect(200)
        .end((err, res) => {
          endTime = Date.now();
          expect(res.body).to.have.property('ticker'); 

          const resultData =  {
            request: {
              body: res.request._data,
              query: res.request._query,
            },
            response: {
              status: res.status,
              body: res.body,
            },
            timer: endTime - startTime
          }
          result[this.test.fullTitle()] = resultData;
          done(err);
        });
    });
  });
  
  afterEach(function() {
    result[this.currentTest.fullTitle()]['passed'] = this.currentTest.state === 'passed';
  });
  
  after(() => {
    const resultPath = path.resolve(process.cwd(),`__battletest__/__result__/stockdataGET.json`)
    console.log(result);
    fs.writeFile(resultPath, JSON.stringify(result), function(err) {
      if (err) throw err
    });
  });
});