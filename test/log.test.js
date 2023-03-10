const supertest = require('supertest');

describe('POST /frontEnd/logs', function () {
  it('/frontEnd/logs', function (done) {
    supertest('http://127.0.0.1:3000')
      .post('/frontEnd/logs')
      .send({
        routePath: "/user",
        type: "Web",
        warningLevel: "info",
        content: "{ a: 1 }"
      })
      .set('Accept', 'application/json')
      .then((res) => {
        if (res.statusCode === 200) {
          return done()
        } else {
          return done(`${res.statusCode} - ${res.text}`)
        }
      })
      .catch((err) => {
        return done(err)
      });
  });
});