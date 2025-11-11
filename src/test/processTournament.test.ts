import { deepStrictEqual } from "assert";
import { testArray, TestDef } from "@simpleview/mochalib";
import { Match, Player, PlayerResult } from "../types";
import processTournament from "../processTournament";

const players: Player[] = [
	{
		id: "1",
		rating: 1500
	},
	{
		id: "2",
		rating: 1490
	},
	{
		id: "3",
		rating: 1300
	},
	{
		id: "4",
		rating: 1800
	}
];

describe(__filename, function() {
	interface Test {
		players: Player[]
		matches: Match[]
		result: PlayerResult[]
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should use normal point exchange if no adjustments necessary",
			args: {
				players,
				matches: [
					{
						winner: "1",
						loser: "2"
					}
				],
				result: [
					{
						id: "1",
						initialRating: 1500,
						rating: 1508,
						delta: 8
					},
					{
						id: "2",
						initialRating: 1490,
						rating: 1482,
						delta: -8
					},
					{
						id: "3",
						initialRating: 1300,
						rating: 1300,
						delta: 0
					},
					{
						id: "4",
						initialRating: 1800,
						rating: 1800,
						delta: 0
					}
				]
			}
		},
		{
			name: "should use pass3 adjustments when ratings gain over 75",
			args: {
				players,
				matches: [
					{
						winner: "1",
						loser: "4"
					},
					{
						winner: "1",
						loser: "4"
					}
				],
				result: [
					{
						id: "1",
						initialRating: 1500,
						rating: 1816,
						delta: 316
					},
					{
						id: "2",
						initialRating: 1490,
						rating: 1490,
						delta: 0
					},
					{
						id: "3",
						initialRating: 1300,
						rating: 1300,
						delta: 0
					},
					{
						id: "4",
						initialRating: 1800,
						rating: 1784,
						delta: -16
					}
				]
			}
		}
	]

	testArray(tests, function(test) {
		deepStrictEqual(processTournament(test.matches, test.players), test.result);
	});
});
