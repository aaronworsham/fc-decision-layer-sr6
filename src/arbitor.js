'use strict';

module.exports.decideHitOrMiss = decideHitOrMiss;
const actionLayer = require('advcomp-action-sr');

function decideHitOrMiss(actionBundle){
	/*
	actionBundle
		.attacker
			pool
				poolSize - dice in their pool
				explode - do 6s explode
				threshold - number to judge hits by
		.target
			pool
				poolSize - dice in their pool
				explode - do 6s explode
				threshold - number to judge hits by
	*/

	var attackerRolledPool = actionLayer.rollForHits(actionBundle.attacker.pool)
	var targetRolledPool = actionLayer.rollForHits(actionBundle.target.pool)
	var decision = {
		attackerRolledPool: attackerRolledPool,
		targetRolledPool: targetRolledPool,
	}


	if (attackerRolledPool.hits >= targetRolledPool.hits) {
		decision.hit = true
		decision.netHits = attackerRolledPool.hits - targetRolledPool.hits
	}
	else {
		decision.hit = false
		decision.netHits = targetRolledPool.hits - attackerRolledPool.hits
	}
	return decision;

}