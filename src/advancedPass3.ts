import ok from "./ok.js";
import type { Match, RatingMap } from "./types.js";

export default function advancedPass3(id: string, p1Rating: number, matches: Match[], ratingMap: RatingMap): number {
	let bestWin = 0;
	let worstLoss = Infinity;
	let hasLoss = false;
	const myMatches: Match[] = [];

	for (const match of matches) {
		if (match.loser !== id && match.winner !== id) {
			continue;
		}

		myMatches.push(match);

		const winnerRating = ratingMap.get(match.winner);
		const loserRating = ratingMap.get(match.loser);
		ok(winnerRating);
		ok(loserRating);

		if (match.winner === id) {
			bestWin = Math.max(bestWin, loserRating);
		} else {
			hasLoss = true;
			worstLoss = Math.min(worstLoss, winnerRating);
		}
	}

	if (hasLoss) {
		const opponentAverage = (bestWin + worstLoss) / 2;
		return Math.floor((p1Rating + opponentAverage) / 2);
	} else {
		const total = myMatches.reduce((prev, curr) => {
			const loserRating = ratingMap.get(curr.loser);
			ok(loserRating);

			return prev + loserRating;
		}, 0);

		return Math.floor(total / myMatches.length);
	}
}
