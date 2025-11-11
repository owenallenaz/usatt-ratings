import { ok } from "assert";
import getMap from "./getMap";
import processMatches from "./processMatches";
import { Match, Player, PlayerResult } from "./types";
import processPass3 from "./processPass3";

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
