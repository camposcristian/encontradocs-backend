/**
 * Busco model events
 */

'use strict';

import {EventEmitter} from 'events';
var Busco = require('./busco.model');
var BuscoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BuscoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Busco.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BuscoEvents.emit(event + ':' + doc._id, doc);
    BuscoEvents.emit(event, doc);
  }
}

export default BuscoEvents;
