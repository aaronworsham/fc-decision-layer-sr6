'use strict';

module.exports.shootingActionHitOrMiss = shootingActionHitOrMiss;
module.exports.decideShotingPool = decideShotingPool;
module.exports.buildAttackerShootingPool = buildAttackerShootingPool
module.exports.buildTargetShootingPool = buildTargetShootingPool

const arbitor = require('../../arbitor');

function buildAttackerShootingPool(actionBundle){
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

	return actionBundle

}

function buildTargetShootingPool(actionBundle){
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

	return actionBundle
}

function decideShotingPool(actionBundle){

	buildAttackerShootingPool(actionBundle)
	buildTargetShootingPool(actionBundle)

	return actionBundle;

}

function shootingActionHitOrMiss(actionBundle){


	var decision = arbitor.decideHitOrMiss(decideShotingPool(actionBundle));
	actionBundle.decision = decision;

	return actionBundle;
}
