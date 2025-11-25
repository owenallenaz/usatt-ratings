/** Process the point conversion from a winner USATT rating to a loser USATT rating */
export default function calculatePoints(winner: number, loser: number): number {
	const diff = winner - loser;

	if (diff >= 0) {
		if (diff >= 0 && diff <= 12) {
			return 8;
		} else if (diff >= 13 && diff <= 37) {
			return 7;
		} else if (diff >= 38 && diff <= 62) {
			return 6;
		} else if (diff >= 63 && diff <= 87) {
			return 5;
		} else if (diff >= 88 && diff <= 112) {
			return 4;
		} else if (diff >= 113 && diff <= 137) {
			return 3;
		} else if (diff >= 138 && diff <= 187) {
			return 2;
		} else if (diff >= 188 && diff <= 237) {
			return 1;
		} else if (diff >= 238) {
			return 0;
		} else {
			throw new Error("Should never happen.");
		}
	}

	const iDiff = Math.abs(diff);
	if (iDiff >= 0 && iDiff <= 12) {
		return 8;
	} else if (iDiff >= 13 && iDiff <= 37) {
		return 10;
	} else if (iDiff >= 38 && iDiff <= 62) {
		return 13;
	} else if (iDiff >= 63 && iDiff <= 87) {
		return 16;
	} else if (iDiff >= 88 && iDiff <= 112) {
		return 20;
	} else if (iDiff >= 113 && iDiff <= 137) {
		return 25;
	} else if (iDiff >= 138 && iDiff <= 162) {
		return 30;
	} else if (iDiff >= 163 && iDiff <= 187) {
		return 35;
	} else if (iDiff >= 188 && iDiff <= 212) {
		return 40;
	} else if (iDiff >= 213 && iDiff <= 237) {
		return 45;
	} else if (iDiff >= 238) {
		return 50;
	} else {
		throw new Error("Should never happen.");
	}
}
