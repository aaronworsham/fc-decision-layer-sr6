'use strict';

var expect = require('chai').expect;
var decisionLayer = require('../index');


/*
actionBundle
    .attacker
        stats
            skills
                firearms
            attributes
                agility
        weapon
            attackRating
            smartlink
        ammo
        gear
            bonusAR
        pool
            poolSize - dice in their pool
            explode - do 6s explode
            threshold - number to judge hits by
    .target
        stats
            skills
                firearms
            attributes
                agility
                body
                intuition
                reaction
            gear
                bonusDR
        pool
            poolSize - dice in their pool
            explode - do 6s explode
            threshold - number to judge hits by
*/



describe('A basic attack Decision', function() {
    it('should decide a hit', function() {
    	var options = {
            attacker: {
                pool: {
                    poolSize: 100,
                    exploding: false,
                    threshold: 4  
                },
                
            },
            target: {
                pool: {
                    poolSize: 2,
                    exploding: false,
                    threshold: 4  
                }
                
            }
        }
        var decision = decisionLayer.decideHitOrMiss(options);
        expect(decision.hit).to.be.true;
    });	
    it('should decide a miss', function() {
        var options = {
            attacker: {
                pool: {
                    poolSize: 2,
                    exploding: false,
                    threshold: 4  
                },
                
            },
            target: {
                pool: {
                    poolSize: 100,
                    exploding: false,
                    threshold: 4  
                }
                
            }
        }
        var decision = decisionLayer.decideHitOrMiss(options);
        expect(decision.hit).to.be.false;
    });	
})
describe('A shooting Decision', function(){
    it('should have a decision', function(){
        var options = {
          attacker: {
            stats: {
              skills: {
                firearms: 3
              },
              attributes: {
                agility: 3
              },
            },
          },
          target: {
            stats: {
              attributes: {
                reaction: 3,
                intuition: 3
              }
            }
          }
        }

        var actionBundle = decisionLayer.shootingActionHitOrMiss(options)
        console.log(actionBundle);
        expect(actionBundle.decision).to.exist;
    })
}) 