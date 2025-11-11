export interface Player {
	/** unique id across all players in the competition, used in match references */
	id: string
	rating: number
}

export interface Match {
	/** id of the winner */
	winner: string
	/** id of the loser */
	loser: string
}

export interface PlayerResult extends Player {
	initialRating: number
	delta: number
}

export type RatingMap = Map<string, number>
