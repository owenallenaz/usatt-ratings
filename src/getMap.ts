import { Player, RatingMap } from "./types";

export default function getMap(players: Player[]): RatingMap {
	const map = new Map<string, number>();
	for (const player of players) {
		map.set(player.id, player.rating);
	}

	return map;
}
