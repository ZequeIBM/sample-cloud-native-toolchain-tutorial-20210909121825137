var should = require('should');
var request = require('supertest');
var server = require('../../../app');

process.env.A127_ENV = 'test';

describe('controllers', function() {

  describe('hello_world', function() {

    describe('GET /hello', function() {

      it('should return a default string', function(done) {

        request(server)
          .get('/hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello there, stranger!');

            done();
          });
      });

      it('should accept a name parameter', function(done) {

        request(server)
          .get('/hello')
          .query({
            name: 'Zeque'
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello there, Zeque!');

            done();
          });
      });
    });
  });
});
