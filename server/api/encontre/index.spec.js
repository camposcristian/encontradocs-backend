'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var encontreCtrlStub = {
  index: 'encontreCtrl.index',
  show: 'encontreCtrl.show',
  create: 'encontreCtrl.create',
  update: 'encontreCtrl.update',
  destroy: 'encontreCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var encontreIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './encontre.controller': encontreCtrlStub
});

describe('Encontre API Router:', function() {

  it('should return an express router instance', function() {
    encontreIndex.should.equal(routerStub);
  });

  describe('GET /api/encontre', function() {

    it('should route to encontre.controller.index', function() {
      routerStub.get
        .withArgs('/', 'encontreCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/encontre/:id', function() {

    it('should route to encontre.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'encontreCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/encontre', function() {

    it('should route to encontre.controller.create', function() {
      routerStub.post
        .withArgs('/', 'encontreCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/encontre/:id', function() {

    it('should route to encontre.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'encontreCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/encontre/:id', function() {

    it('should route to encontre.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'encontreCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/encontre/:id', function() {

    it('should route to encontre.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'encontreCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
