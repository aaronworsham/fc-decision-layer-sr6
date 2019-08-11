'use strict';

module.exports.shootingActionHitOrMiss = shootingActionHitOrMiss;
module.exports.decideShotingPool = decideShotingPool;
const arbitor = require('../../arbitor');

function decideShotingPool(actionBundle){

	//ATTACKER
	var attackerPoolSize = (
		actionBundle.attacker.skills.firearms +
		actionBundle.attacker.attributes.agility
	)

	actionBundle.attacker.pool = {
		poolSize: attackerPoolSize,
		explode: false,
		threshold: 4
	};

	//TARGET
	var targetPoolSize = (
		actionBundle.target.attributes.reaction +
		actionBundle.target.attributes.intuition
	);

	actionBundle.target.pool = {
		poolSize: targetPoolSize,
		explode: false,
		threshold: 4
	};

	return actionBundle;

}

function shootingActionHitOrMiss(actionBundle){


	var decision = arbitor.decideHitOrMiss(decideShotingPool(actionBundle));
	actionBundle.decision = decision;

	return actionBundle;
}
