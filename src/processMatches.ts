import calculatePoints from "./calculatePoints";
import { Match, RatingMap } from "./types";

export default function processMatches(matches: Match[], ratingMap: RatingMap): RatingMap {
	const initialRatings = ratingMap;
	const newRatings = new Map(ratingMap);

	for (const match of matches) {
		const winnerRating = initialRatings.get(match.winner);
		const winnerCurrent = newRatings.get(match.winner);
		const loserRating = initialRatings.get(match.loser);
		const loserCurrent = newRatings.get(match.loser);
		if (
			winnerRating === undefined
			|| loserRating === undefined
			|| winnerCurrent === undefined
			|| loserCurrent === undefined
		) {
			throw new Error(`Match exists with player not in players array.`);
		}

		const points = calculatePoints(winnerRating, loserRating);
		newRatings.set(
			match.winner,
			winnerCurrent + points
		);
		newRatings.set(
			match.loser,
			loserCurrent - points
		)
	}

	return newRatings;
}
