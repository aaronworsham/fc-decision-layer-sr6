'use strict';


const shooting = require('./src/combat/physical/shooting');
const arbitor = require('./src/arbitor');

module.exports = {
  decideHitOrMiss: arbitor.decideHitOrMiss
}

