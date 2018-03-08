const Occurrences = require('./lib').default;

const occ = new Occurrences('Lorem ipsum sin dolor amet consectetur');

test("occ.results equal to", () => {
  const results = [
    {
      "word": "Lorem",
      "count": 1
    },
    {
      "word": "ipsum",
      "count": 1
    },
    {
      "word": "sin",
      "count": 1
    },
    {
      "word": "dolor",
      "count": 1
    },
    {
      "word": "amet",
      "count": 1
    },
    {
      "word": "consectetur",
      "count": 1
    }
  ];
  expect(occ.results)
    .toEqual(results);
});

test("occ.getOccurrenceFrom('Lorem') equal to 1", () => {
  expect(occ.getOccurrenceFrom('Lorem')).toEqual(1);
});
