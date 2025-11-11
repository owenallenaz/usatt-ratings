import { strictEqual } from "assert";
import calculatePoints from "../calculatePoints";
import { testArray, TestDef } from "@simpleview/mochalib";

describe(__filename, function() {
	interface Test {
		winner: number
		loser: number
		result: number
	}

	const tests: TestDef<Test>[] = [
		// Expected result (higher rated player wins)
		{
			name: "diff 0-12 (expected)",
			args: { winner: 1500, loser: 1490, result: 8 }
		},
		{
			name: "diff 13-37 (expected)",
			args: { winner: 1500, loser: 1465, result: 7 }
		},
		{
			name: "diff 38-62 (expected)",
			args: { winner: 1500, loser: 1440, result: 6 }
		},
		{
			name: "diff 63-87 (expected)",
			args: { winner: 1500, loser: 1420, result: 5 }
		},
		{
			name: "diff 88-112 (expected)",
			args: { winner: 1500, loser: 1408, result: 4 }
		},
		{
			name: "diff 113-137 (expected)",
			args: { winner: 1500, loser: 1370, result: 3 }
		},
		{
			name: "diff 138-187 (expected)",
			args: { winner: 1500, loser: 1360, result: 2 }
		},
		{
			name: "diff 188-237 (expected)",
			args: { winner: 1500, loser: 1300, result: 1 }
		},
		{
			name: "diff 287+ (expected)",
			args: { winner: 1500, loser: 1200, result: 0 }
		},
		// Upset result (lower rated player wins)
		{
			name: "diff 0-12 (upset)",
			args: { winner: 1490, loser: 1500, result: 8 }
		},
		{
			name: "diff 13-37 (upset)",
			args: { winner: 1465, loser: 1500, result: 10 }
		},
		{
			name: "diff 38-62 (upset)",
			args: { winner: 1440, loser: 1500, result: 13 }
		},
		{
			name: "diff 63-87 (upset)",
			args: { winner: 1420, loser: 1500, result: 16 }
		},
		{
			name: "diff 88-112 (upset)",
			args: { winner: 1408, loser: 1500, result: 20 }
		},
		{
			name: "diff 113-137 (upset)",
			args: { winner: 1370, loser: 1500, result: 25 }
		},
		{
			name: "diff 138-162 (upset)",
			args: { winner: 1360, loser: 1500, result: 30 }
		},
		{
			name: "diff 163-187 (upset)",
			args: { winner: 1330, loser: 1500, result: 35 }
		},
		{
			name: "diff 188-212 (upset)",
			args: { winner: 1300, loser: 1500, result: 40 }
		},
		{
			name: "diff 213-237 (upset)",
			args: { winner: 1280, loser: 1500, result: 45 }
		},
		{
			name: "diff 238+ (upset)",
			args: { winner: 1200, loser: 1500, result: 50 }
		}
	]

	testArray(tests, function(test) {
		strictEqual(calculatePoints(test.winner, test.loser), test.result)
	});
});
