import Occurrences from "./lib";

const o = new Occurrences('Lorem ipsum sin dolor amet consectetur');

console.log(o, JSON.stringify(o.results, null, 2));

console.log(o.getOccurrenceFrom('ipsum'));
