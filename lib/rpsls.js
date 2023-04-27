let result = {
    rock: {
        rock: 'tie',
        scissors: 'lose',
        paper: 'win',
        spock: 'win',
        lizard: 'lose'
    },
    paper: {
        paper: 'tie',
        rock: 'lose',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        scissors: 'tie',
        paper: 'lose',
        rock: 'win',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        scissors: 'win',
        paper: 'lose',
        rock: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        scissors: 'lose',
        paper: 'win',
        rock: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

const rpsls = ['rock','paper','scissors','lizard','spock'];

const rps = ['rock','paper','scissors'];

export function rps(choice) {
	choice = choice.toLowerCase();
	const opponent = rps[Math.floor(Math.random() * 3)];

	if (choice == undefined) {
		return {player: rps[Math.floor(Math.random() * 3)]};
	}

	if (!rps.includes(choice)) {
		throw new RangeError("shot is out of range.");
	}

	return {player: choice, opponent: opponent, result: result[choice][opponent]}
}

export function rpsls (choice) {
	choice = choice.toLowerCase();
	const opponent = rps[Math.floor(Math.random() * 5)];

	if (choice == undefined) {
		return {player: rpsls[Math.floor(Math.random() * 5)]};
	}

	if (!rpsls.includes(choice)) {
		throw new RangeError("shot is out of range.");
	}

	return {player: choice, opponent: opponent, result: result[choice][opponent]}

}








