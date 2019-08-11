'use strict';

module.exports.shootingActionHitOrMiss = shootingActionHitOrMiss;
const arbitor = require('../../arbitor');

function shootingActionHitOrMiss(actionBundle){
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

	var decision = arbitor.decideHitOrMiss(actionBundle);
	actionBundle.decision = decision;

	return actionBundle;
}