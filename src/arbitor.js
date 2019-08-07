'use strict';

module.exports.decideHitOrMiss = decideHitOrMiss;
const actionLayer = require('fc-action-layer-sr6');

function decideHitOrMiss(options){
	/*
	options
		.attacker
			poolSize - dice in their pool
			explode - do 6s explode
			threshold - number to judge hits by
		.defender
			poolSize - dice in their pool
			explode - do 6s explode
			threshold - number to judge hits by
	*/

	var attackerRolledPool = actionLayer.rollForHits(options.attacker)
	var defenderRolledPool = actionLayer.rollForHits(options.defender)
	var actionBundle = {
		decision: {},
		attackerRolledPool: attackerRolledPool,
		defenderRolledPool: defenderRolledPool,
	}


	if (attackerRolledPool.hits >= defenderRolledPool.hits) {
		actionBundle.decision.hit = true
	}
	else {
		actionBundle.decision.hit = false
	}
	return actionBundle;

}