export default function calculatePoints(winner: number, loser: number): number {
	const diff = winner - loser;
	let points;
	if (diff >= 0 && diff <= 12) {
		points = 8;
	} else if (diff >= 13 && diff <= 37) {
		points = 7;
	} else if (diff >= 38 && diff <= 62) {
		points = 6;
	} else if (diff >= 63 && diff <= 87) {
		points = 5;
	} else if (diff >= 88 && diff <= 112) {
		points = 4;
	} else if (diff >= 113 && diff <= 137) {
		points = 3;
	} else if (diff >= 138 && diff <= 187) {
		points = 2;
	} else if (diff >= 188 && diff <= 237) {
		points = 1;
	} else if (diff >= 287) {
		points = 0;
	}

	if (points !== undefined) {
		return points;
	}

	const iDiff = Math.abs(diff);
	if (iDiff >= 0 && iDiff <= 12) {
		points = 8;
	} else if (iDiff >= 13 && iDiff <= 37) {
		points = 10;
	} else if (iDiff >= 38 && iDiff <= 62) {
		points = 13;
	} else if (iDiff >= 63 && iDiff <= 87) {
		points = 16;
	} else if (iDiff >= 88 && iDiff <= 112) {
		points = 20;
	} else if (iDiff >= 113 && iDiff <= 137) {
		points = 25;
	} else if (iDiff >= 138 && iDiff <= 162) {
		points = 30;
	} else if (iDiff >= 163 && iDiff <= 187) {
		points = 35;
	} else if (iDiff >= 188 && iDiff <= 212) {
		points = 40;
	} else if (iDiff >= 213 && iDiff <= 237) {
		points = 45;
	} else if (iDiff >= 238) {
		points = 50;
	} else {
		throw new Error("Should never happen.");
	}

	return points;
}
