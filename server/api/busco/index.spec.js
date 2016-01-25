'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var buscoCtrlStub = {
  index: 'buscoCtrl.index',
  show: 'buscoCtrl.show',
  create: 'buscoCtrl.create',
  update: 'buscoCtrl.update',
  destroy: 'buscoCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var buscoIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './busco.controller': buscoCtrlStub
});

describe('Busco API Router:', function() {

  it('should return an express router instance', function() {
    buscoIndex.should.equal(routerStub);
  });

  describe('GET /api/busco', function() {

    it('should route to busco.controller.index', function() {
      routerStub.get
        .withArgs('/', 'buscoCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/busco/:id', function() {

    it('should route to busco.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'buscoCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/busco', function() {

    it('should route to busco.controller.create', function() {
      routerStub.post
        .withArgs('/', 'buscoCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/busco/:id', function() {

    it('should route to busco.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'buscoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/busco/:id', function() {

    it('should route to busco.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'buscoCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/busco/:id', function() {

    it('should route to busco.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'buscoCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
