'use strict';

var app = require('../..');
import request from 'supertest';

var newEncontre;

describe('Encontre API:', function() {

  describe('GET /api/encontre', function() {
    var encontres;

    beforeEach(function(done) {
      request(app)
        .get('/api/encontre')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          encontres = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      encontres.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/encontre', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/encontre')
        .send({
          name: 'New Encontre',
          info: 'This is the brand new encontre!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEncontre = res.body;
          done();
        });
    });

    it('should respond with the newly created encontre', function() {
      newEncontre.name.should.equal('New Encontre');
      newEncontre.info.should.equal('This is the brand new encontre!!!');
    });

  });

  describe('GET /api/encontre/:id', function() {
    var encontre;

    beforeEach(function(done) {
      request(app)
        .get('/api/encontre/' + newEncontre._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          encontre = res.body;
          done();
        });
    });

    afterEach(function() {
      encontre = {};
    });

    it('should respond with the requested encontre', function() {
      encontre.name.should.equal('New Encontre');
      encontre.info.should.equal('This is the brand new encontre!!!');
    });

  });

  describe('PUT /api/encontre/:id', function() {
    var updatedEncontre;

    beforeEach(function(done) {
      request(app)
        .put('/api/encontre/' + newEncontre._id)
        .send({
          name: 'Updated Encontre',
          info: 'This is the updated encontre!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEncontre = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEncontre = {};
    });

    it('should respond with the updated encontre', function() {
      updatedEncontre.name.should.equal('Updated Encontre');
      updatedEncontre.info.should.equal('This is the updated encontre!!!');
    });

  });

  describe('DELETE /api/encontre/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/encontre/' + newEncontre._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when encontre does not exist', function(done) {
      request(app)
        .delete('/api/encontre/' + newEncontre._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
