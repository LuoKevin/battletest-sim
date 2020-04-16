
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"****************************************************************************************************************************************************************************************************************************************************************","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"SELECT * FROM information_schema.tables","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":-20,"petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":null,"petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"vz3292xrdn","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"****************************************************************************************************************************************************************************************************************************************************************","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"SELECT * FROM information_schema.tables","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":-20,"favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":null,"favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"fro7a2kh0z","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["qkmzmuk8su","jjijnb44ci","2m9koa3zfa","qprb4xnf3m","hv2qso6ci1"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["sjwgyp33r6","locqwzfwat","3235o6ozw7","9551pe7eae","1yaxr3uo9u"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["34cr63bs1b","s4xu4x3kuh","e5teuon7iy","u6exvm9gx1","dr96rmi7ro"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["z15es6aolr","ht98fx463m","9tjagg9m0l","kac0fipdmf","rq1m409jul"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["tompcys7d3","zjhb1aoopv","1wk6m7exrj","ttmdfl6km6","ljtjb73k0u"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"****************************************************************************************************************************************************************************************************************************************************************","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"SELECT * FROM information_schema.tables","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":-20,"dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":null,"dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"fw2ey50ayy","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"****************************************************************************************************************************************************************************************************************************************************************","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"SELECT * FROM information_schema.tables","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":-20,"siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":null,"siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"xucsheqig6","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["sh0ciuvoeo","isfuk4y4j7","ryu5gh8rgi","gvuza7x7c3","wxs3wvpkwf"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["3sczzd6wrl","jkvt8u42wk","4yymmidsai","98tp9dfbh9","fp7nvsjahb"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["nqv1ffxlqt","r2pom5h5ej","dv5242vk89","60b0ty6uym","z7wrojlm7u"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["lfjgz3t3jc","f3wze7x57v","rkru1vjac4","9e5h2e27sm","q8cv1jkwts"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["42p5omvzjn","h1stxcqg09","yiy81jkgzy","9m0fgakweb","9m0usvfcbq"],"brothers":["eipf5zmr8r","q7om8rd8le","99htlcx7tx","jb8zuosrea","2umsrnbunl"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["1tc1zdycj7","d13jigipe8","xmu2xgg89t","k7a4x0l8vh","po1ik5f6zq"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["awhbmmwwef","jc1dnyt4if","6ihuz917h1","ru3tdhht4g","d4k8belch6"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["yeyi09tmzo","yjw4j1jdkh","k5ufedwdq3","bvthe7jotz","sdpnfmd61c"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["9kydske0hj","l6atb8jnvg","65y5fv0y22","mp2fyz933b","w8bwdyfjv3"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["u5zt3xgq5v","s0184q055l","80sgip1vj9","zt23z1y6ky","ssyixwzcce"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["c4ie4gm8re","d6f5ol5ctc","h7oyx19p18","ns6z7t04pk","64ffdvnjdu"],"brothers":["frxyxphk45","uo0lx57e7c","kxcb11otwf","3pug5w56fu","fsb7smj7xg"]}}})
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
    