
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const result = {}

describe('/pet/:petID_PUT', function() {

    it('Base Scenario', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"2^53 - 1"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/9007199254740991')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"-(2^53 - 1)"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/-9007199254740991')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"1.79e+308"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/1.7976931348623157e+308')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"positive infinity"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/Infinity')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"path":{"petID":"negative infinity"}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/-Infinity')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"Extremely long string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"****************************************************************************************************************************************************************************************************************************************************************","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"Postgres SQL injection"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"SELECT * FROM information_schema.tables","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"Negative number"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":-20,"petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"positive infinity"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":null,"petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"name":"random string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"6527jdrwb1","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"Extremely long string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"****************************************************************************************************************************************************************************************************************************************************************","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"Postgres SQL injection"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"SELECT * FROM information_schema.tables","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"Negative number"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":-20,"favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"positive infinity"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":null,"favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"petType":"random string"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"au9v19ksr6","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"Random array of strings"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["v34zmvz1oi","hidvpvktsw","5zni9vvvkh","6dybn6htm5","afcnew7vmj"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"Random array of strings"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["uchl47540f","xr87gia7ds","7mhwno11tb","puhh0k1cox","je5vuogdgv"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"Random array of strings"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["6rxwg030zt","mp24ecly2v","ozbmocysun","ii0rlzeqy9","g67yb3bktc"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"Random array of strings"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["2kt36y1rnr","wcsnps4qtx","7j9z218mup","l5y9eonyse","uqyssea9hm"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"favoriteFoods":"Random array of strings"}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["yzxc2ecfb4","sddihgxtc0","iyy6y81wiy","bds1ay0vgm","u5o6mmpetk"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"Extremely long string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"****************************************************************************************************************************************************************************************************************************************************************","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"Postgres SQL injection"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"SELECT * FROM information_schema.tables","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"Negative number"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":-20,"dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"positive infinity"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":null,"dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"mom":"random string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"fs27gmbnzp","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"Extremely long string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"****************************************************************************************************************************************************************************************************************************************************************","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"Postgres SQL injection"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"SELECT * FROM information_schema.tables","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"Negative number"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":-20,"siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"positive infinity"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":null,"siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"dad":"random string"}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"7jfvylijs2","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["ihbk3smjl4","cg6zm5tu6l","fshtcbfqj9","rb0ynmrw5l","w86i8ro7bj"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["0p6yqj109t","i09mb4489s","rsz67zc1t1","3zfcn6yo2a","lqyp09ol6t"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["w5tqgw2wdh","lfs8a13k4n","hr1hh9zmy1","d4s044pfxb","dmwun47r8v"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["ific4cupeu","hhpqbgwaw0","1j042xhb25","swfyekfg6m","x7otnrny53"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"sisters":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["l3ewng0tzm","q0063evx1o","znuulhtnkb","mfxlkesucq","dt1xnk7et1"],"brothers":["hpw9z2h1ac","2rtfl1vrit","0jhzrpayei","bg3bibswm9","6bl8m9554g"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["amlk2u1lyo","nx756lhydh","7obcmaclsn","er4odzr5t9","r8snzbk4ly"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["weq3qavrof","o3y0okrwm9","lmp2q7v7mx","nnlz0b74jx","mj9kzgn2qy"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["4hw2a5ude6","49qtqd9n4u","s2vci40m9p","m1m96uawk4","n5oqju7qnv"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["7gcdwtbjv7","rvnjhspws0","pmkipfm0kx","otoyrnxe12","szwhwaxsiz"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
    it('{"application/json":{"body":{"family":{"siblings":{"brothers":"Random array of strings"}}}}}', function(done){
        let endTime;
        const startTime = Date.now();
        
  request(serverURL)
    .put('/pet/5')
    .type('application/json')
    .send({"name":"string","petType":"string","favoriteFoods":["o0x83s1pwy","oj9dn1lp0l","8ziudenp2g","4c03q6de7t","u4p943dr3g"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["iipgeg2fis","dx5jgqz8xt","cizaja1o9m","xtnpivyc4k","tlx4pbng3x"],"brothers":["vytifq6a21","cnnb7cea8n","dmi9sdpo19","v63gsxfnyd","tloxh18ngf"]}}})
    .expect(400)
    .end((err, res) => {
        endTime = Date.now();
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

      /* Custom assertions can be inserted here */

      done(err);
  });
})
afterEach(function() {
    result[this.currentTest.fullTitle()]['passed'] = this.currentTest.state === 'passed';
});

after(() => {
    const resultPath = path.resolve(process.cwd(),"__battletest__/__result__/_pet_:petID_PUT.json")
    fs.writeFile(resultPath, JSON.stringify(result, null, 2), function(err) {
    if (err) throw err
    });
});
});
    