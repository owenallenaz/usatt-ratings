import { deepStrictEqual } from "assert";
import { testArray, type TestDef } from "@simpleview/mochalib";
import type { Match, RatingMap } from "../types.js";
import getMap from "../getMap.js";
import processPass3 from "../processPass3.js";

const ratingMap = getMap([
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
]);

function results(ratings: number[]): RatingMap {
	const map = new Map();
	for (const [index, rating] of Object.entries(ratings)) {
		map.set((Number(index) + 1).toString(), rating);
	}
	return map;
}

describe(__filename, function() {
	interface Test {
		ratingMap: RatingMap
		matches: Match[]
		result: RatingMap
	}

	const tests: TestDef<Test>[] = [
		{
			name: "should default to initial rating if less than 50 points gained",
			args: {
				ratingMap,
				matches: [
					{
						winner: "1",
						loser: "2"
					}
				],
				result: results([
					1500,
					1490,
					1300,
					1800
				])
			}
		},
		{
			name: "should utilize average of opponents if rating gain over 75 and all wins",
			args: {
				ratingMap,
				matches: [
					{
						winner: "3",
						loser: "1"
					},
					{
						winner: "3",
						loser: "1"
					},
					{
						winner: "3",
						loser: "4"
					}
				],
				result: results([
					1500,
					1490,
					1600,
					1800
				])
			}
		},
		{
			name: "should utilize average of best win and worst loss and first pass if rating gain over 75 and wins and losses",
			args: {
				ratingMap,
				matches: [
					{
						winner: "3",
						loser: "1"
					},
					{
						winner: "3",
						loser: "1"
					},
					{
						winner: "3",
						loser: "4"
					},
					{
						winner: "2",
						loser: "3"
					}
				],
				result: results([
					1500,
					1490,
					// pass3part1 is 1429, best win 1800, worst loss 1490 === (1429 + ((1800 + 1490) / 2)) / 2
					1537,
					1800
				])
			}
		},
		{
			name: "should utilize first pass rating if between 50 and 75",
			args: {
				ratingMap,
				matches: [
					{
						winner: "1",
						loser: "4"
					},
					{
						winner: "1",
						loser: "2"
					}
				],
				result: results([
					1558,
					1490,
					1300,
					1800
				])
			}
		}
	]

	testArray(tests, function(test) {
		deepStrictEqual(processPass3(test.matches, test.ratingMap), test.result);
	});
});
