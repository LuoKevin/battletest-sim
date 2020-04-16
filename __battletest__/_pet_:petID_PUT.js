
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"****************************************************************************************************************************************************************************************************************************************************************","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"SELECT * FROM information_schema.tables","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":-20,"petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":null,"petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"a9puk08z95","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"****************************************************************************************************************************************************************************************************************************************************************","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"SELECT * FROM information_schema.tables","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":-20,"favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":null,"favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"j2kmi8iz6m","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3e5neuxh86","muymr8k2ou","3169i2hmif","40sph4ehrd","ngcyridfbv"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["mpuk345jx3","5ewaz9mwex","rzglxsq0gi","mco5hsh7yc","9k1kfdg48q"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["7ypfqrx5yl","n9zc7y3cye","ds6khttc87","o2m02z8434","4yq7bd7v46"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["rjkdzcmsqs","a8cnu17tt2","m724tg03zp","ganhzv9ufj","9m4huwtkse"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["80qet4ruxd","b3v5x7535v","hd9mf25y5g","6q3m3ap5jm","ph20e5q165"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"****************************************************************************************************************************************************************************************************************************************************************","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"SELECT * FROM information_schema.tables","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":-20,"dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":null,"dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"78se7nsp1c","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"****************************************************************************************************************************************************************************************************************************************************************","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"SELECT * FROM information_schema.tables","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":-20,"siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":null,"siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"px6dualhw1","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["9hqv3ox523","w6uhc2zv7e","d4sckk9nsa","eiv4lsyqrn","xrrgyqwimn"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["9qlrenh8di","auf27nen4l","hbdd7ozadr","xeowt5qpb9","2gpgunslms"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["vv3hiilriz","f07w62q1hg","b5nkr63010","hvmwhvo6ht","ng6rx8nz1i"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["9q3h9tierv","a6g8bwx278","wzlmtw4ml9","dhqtu17m8h","qknvx5elml"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["51039k365w","anxvb58x7y","l1r1jlofhp","e5ocyne5ud","6pqx4qaqeq"],"brothers":["8p54vhylal","s1mg63uymm","ju7l58j8c7","vdzxr3edb5","md2m3pvmgo"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["f8ka41mllt","jse5q0dh5j","f504sc5733","byegfkjm2d","a5ayjiloin"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["bel2cl5g2v","pjr34u2n34","tnc9fah8a5","7rscdnl1zp","jpqgwzbtvn"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["dic4l7y4to","2orepjscmq","z2mozfnwho","tpqw9637hu","mjicqmkpce"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["zgv8g8mlfk","pfw2sl9yk8","23wx4wcc9e","xey05ya6e9","89c7s771fm"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3ep2c84cg5","ljk7eejr12","03d2hdb7v2","n3zu2rlcwm","lfnn371dzh"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["qj1jwungfz","pbnkamhc01","edvfcxbbel","4bgaofdyty","ub680gsh2u"],"brothers":["z1vf4mdiwe","60jp2zt5vk","04uybwiate","swderb4fly","qzwzvs3562"]}}})
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
    