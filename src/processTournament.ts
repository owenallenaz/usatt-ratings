import ok from "./ok.js";
import getMap from "./getMap.js";
import processMatches from "./processMatches.js";
import type { Match, Player, PlayerResult } from "./types.js";
import processPass3 from "./processPass3.js";

/**
 * Process an array of matches with an array of players and return an array of results
*/
export default function processTournament(matches: Match[], players: Player[]): PlayerResult[] {
	const initialRatings = getMap(players);
	const pass3 = processPass3(matches, initialRatings);
	const pass4 = processMatches(matches, pass3);

	return Array.from(pass4).map(([id, rating]) => {
		const initialRating = initialRatings.get(id);
		ok(initialRating);

		return {
			id,
			initialRating,
			rating,
			delta: rating - initialRating
		}
	});
}
