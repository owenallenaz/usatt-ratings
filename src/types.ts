export interface Player {
	id: string
	rating: number
}

export interface Match {
	winner: string
	loser: string
}

export interface PlayerResult extends Player {
	initialRating: number
	delta: number
}

export type RatingMap = Map<string, number>
