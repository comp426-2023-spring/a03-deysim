#!/usr/bin/env node
import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

var args = minimist(process.argv.slice(2));

function rule() {
    console.log(
`Rules for Rock Paper Scissors:
- Scissors CUTS Paper
- Paper COVERS Rock
- Rock CRUSHES Scissors`); 
}

function help () {
	    console.log(
`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);    
}


if (args.r || args.rules) {rule();}
if (args.h || args.help) {help();}


try {
	console.log(JSON.stringify(rps(args._[0])));
} catch (error) {
	if (error instanceof RangeError) {
		help();
		rule();
		process.exit(1);
	}
}