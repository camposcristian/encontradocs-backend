'use strict';

var app = require('../..');
import request from 'supertest';

var newBusco;

describe('Busco API:', function() {

  describe('GET /api/busco', function() {
    var buscos;

    beforeEach(function(done) {
      request(app)
        .get('/api/busco')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          buscos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      buscos.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/busco', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/busco')
        .send({
          name: 'New Busco',
          info: 'This is the brand new busco!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBusco = res.body;
          done();
        });
    });

    it('should respond with the newly created busco', function() {
      newBusco.name.should.equal('New Busco');
      newBusco.info.should.equal('This is the brand new busco!!!');
    });

  });

  describe('GET /api/busco/:id', function() {
    var busco;

    beforeEach(function(done) {
      request(app)
        .get('/api/busco/' + newBusco._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          busco = res.body;
          done();
        });
    });

    afterEach(function() {
      busco = {};
    });

    it('should respond with the requested busco', function() {
      busco.name.should.equal('New Busco');
      busco.info.should.equal('This is the brand new busco!!!');
    });

  });

  describe('PUT /api/busco/:id', function() {
    var updatedBusco;

    beforeEach(function(done) {
      request(app)
        .put('/api/busco/' + newBusco._id)
        .send({
          name: 'Updated Busco',
          info: 'This is the updated busco!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBusco = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBusco = {};
    });

    it('should respond with the updated busco', function() {
      updatedBusco.name.should.equal('Updated Busco');
      updatedBusco.info.should.equal('This is the updated busco!!!');
    });

  });

  describe('DELETE /api/busco/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/busco/' + newBusco._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when busco does not exist', function(done) {
      request(app)
        .delete('/api/busco/' + newBusco._id)
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
