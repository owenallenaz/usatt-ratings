import { deepStrictEqual } from "assert";
import { testArray, type TestDef } from "@simpleview/mochalib";
import processMatches from "../processMatches.js";
import type { Match, RatingMap } from "../types.js";
import getMap from "../getMap.js";

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
			name: "should handle single match",
			args: {
				ratingMap,
				matches: [
					{
						winner: "1",
						loser: "2"
					}
				],
				result: results([
					1508,
					1482,
					1300
				])
			}
		},
		{
			name: "should handle multiple matches",
			args: {
				ratingMap,
				matches: [
					{
						winner: "1",
						loser: "2"
					},
					{
						winner: "1",
						loser: "3"
					}
				],
				result: results([
					1509,
					1482,
					1299
				])
			}
		},
		{
			name: "should handle upsets",
			args: {
				ratingMap,
				matches: [
					{
						winner: "2",
						loser: "1"
					},
					{
						winner: "3",
						loser: "1"
					}
				],
				result: results([
					1452,
					1498,
					1340
				])
			}
		},
		{
			name: "should handle the same match twice",
			args: {
				ratingMap,
				matches: [
					{
						winner: "1",
						loser: "2"
					},
					{
						winner: "1",
						loser: "2"
					}
				],
				result: results([
					1516,
					1474,
					1300
				])
			}
		}
	]

	testArray(tests, function(test) {
		deepStrictEqual(processMatches(test.matches, test.ratingMap), test.result);
	});
});
