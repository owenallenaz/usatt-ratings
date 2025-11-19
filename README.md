# usatt-ratings

This package has a javascript variant of the USATT (USA Table Tennis) ratings formula published at https://www.usatt.org/events-and-results/rating-systems-explained . The process of calculating the ratings can be quite difficult and this handles the hard work and multiple passes required when processing a league event or tournament. This includes the initial point transfer from a single match, as well as the pass calculations that ensures if one players gains too many points, it will adjust their rating and re-run all prior matches.

The one feature of the official spec that it does not support is account for entirely unrated participants. As the tournament director, you will need to give participants at least your best guess for their initial rating if that situation arises.

```
import processTournament from "usatt-ratings";

processTournament([
    // matches array
    {
        winner: "id1",
        loser: "id2"
    },
    {
        winner: "id1",
        loser: "id3"
    },
    {
        winner: "id2",
        loser: "id3"
    }
], [
    // players array
    {
        id: "id1",
        rating: 1400
    },
    {
        id: "id2",
        rating: 1425
    },
    {
        id: "id3",
        rating: 1500
    }
]) === [
  { id: 'id1', initialRating: 1400, rating: 1430, delta: 30 },
  { id: 'id2', initialRating: 1425, rating: 1431, delta: 6 },
  { id: 'id3', initialRating: 1500, rating: 1464, delta: -36 }
]
```
