
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"****************************************************************************************************************************************************************************************************************************************************************","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"SELECT * FROM information_schema.tables","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":-20,"petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":null,"petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"tkif5merds","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"****************************************************************************************************************************************************************************************************************************************************************","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"SELECT * FROM information_schema.tables","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":-20,"favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":null,"favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"z89hddszix","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["bbl5c2inuf","rkxmjeasuy","bqevst1paq","kiutq1l45m","pwyu1oacxp"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["85chuf09fr","mv47obc4vb","4m658x0a5x","fr9qwk6dz0","5kxu5co22t"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["ubxyyrd7o3","ivrx862pu6","w331j2wpoo","waptumioch","s4gyps4th6"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["rpk5wwhuxr","krm5plt5tb","6911l1yml4","91xgwedkup","xwsclqg1ps"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["54pey45qb8","57g8zbde3q","l1si9xhc9j","uh0r6m4aai","350uio6qd5"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"****************************************************************************************************************************************************************************************************************************************************************","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"SELECT * FROM information_schema.tables","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":-20,"dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":null,"dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"d32blnafqy","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"****************************************************************************************************************************************************************************************************************************************************************","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"SELECT * FROM information_schema.tables","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":-20,"siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":null,"siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"dml6c9rjg9","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["j4isuwsj6j","keirp3w7lk","pj48fny2kw","wkrari0yuz","85hg0a5ykf"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["rb37oyowhu","ilcp7d5oc6","4q0bdxbkm0","lsvlqml40v","u8kcpxykp0"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["yjavw4tmn4","0voscyufnf","1h7r508wn7","rkdtpyzr0c","qy4216b3ep"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["3n6a87ngla","jc0juf6669","xrnhqw3qfd","h7q95ooans","bggvu9fd73"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["1h2w2x7ict","fl5sh2h2jk","g16ykpkbuz","n0k3ah0jog","hjau54na5t"],"brothers":["l49t7kw322","ha7mfu3eat","mut39ub8fq","3ms9lmuyn7","watgvxcp7f"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["huwwaw0xht","qp90deqmfh","mq2jgt7loi","l2ur6s6i40","rtq5sqzifq"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["kavh9xh9w1","vox1sa2lp4","cj117emv2h","kwxouvvne0","zhvtuwootg"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["8lv1ehkrf5","5cvhgepyhf","vsr8bmgrpx","76yzfhcxkg","ar1mp2ixiq"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["eqqhwukwf7","sruf313rmt","a8mdww43a6","6uakko15fu","q9qd7xn5cd"]}}})
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
    .send({"name":"string","petType":"string","favoriteFoods":["3w6cehzmqp","lwdrhe3cl5","3mbu67usm1","dfbt8mrjx1","u4matkgex0"],"family":{"mom":"string","dad":"string","siblings":{"sisters":["hwdvmg47jp","grxuuoxn7o","41ak858iqa","6yf3wc1q9s","bt9sjw6co2"],"brothers":["yn99ogs4cj","0tl44ywax8","dc1gzxmw8d","ffqstioyzc","0z62xep95a"]}}})
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
    