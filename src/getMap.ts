import type { Player, RatingMap } from "./types.js";

/**
 * Convert an array of players into a map of id to rating
*/
export default function getMap(players: Player[]): RatingMap {
	const map = new Map<string, number>();
	for (const player of players) {
		map.set(player.id, player.rating);
	}

	return map;
}
