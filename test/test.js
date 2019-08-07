'use strict';

var expect = require('chai').expect;
var decisionLayer = require('../index');

describe('A basic attack Decision', function() {
    it('should decide a hit', function() {
    	var options = {
            attacker: {
                poolSize: 100,
                exploding: false,
                threshold: 4
            },
            defender: {
                poolSize: 2,
                exploding: false,
                threshold: 4
            }
        }
        var actionBundle = decisionLayer.decideHitOrMiss(options);
        expect(actionBundle.decision.hit).to.be.true;
    });	
    it('should decide a miss', function() {
        var options = {
            attacker: {
                poolSize: 2,
                exploding: false,
                threshold: 4
            },
            defender: {
                poolSize: 100,
                exploding: false,
                threshold: 4
            }
        }
        var actionBundle = decisionLayer.decideHitOrMiss(options);
        expect(actionBundle.decision.hit).to.be.false;
    });	
}) 