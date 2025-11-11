import { ok } from "assert";
import processMatches from "./processMatches";
import { Match, RatingMap } from "./types";
import advancedPass3 from "./advancedPass3";

export default function processPass3(matches: Match[], ratingMap: RatingMap): RatingMap {
	const pass3Part1 = processMatches(matches, ratingMap);
	const pass3Part3 = new Map<string, number>();

	for (const [id, p1Rating] of pass3Part1) {
		const initialRating = ratingMap.get(id);
		ok(initialRating);
		ok(p1Rating);

		const delta = p1Rating - initialRating;

		let p2Rating;
		if (delta < 50) {
			p2Rating = initialRating;
		} else if (delta <= 74) {
			p2Rating = p1Rating;
		} else {
			p2Rating = advancedPass3(id, p1Rating, matches, ratingMap);
		}

		const finalRating = p2Rating < initialRating ? initialRating : p2Rating;
		pass3Part3.set(id, finalRating);
	}

	return pass3Part3;
}
