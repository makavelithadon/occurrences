/*

  On cherche à connaitre le nombre d’occurrence de chaque mots dans un texte (les mots de moins de deux lettres seront ignorés).

  Concevez une petite librairie JS qui répond à ce problème.

 */

class Occurrences {
  constructor(
    text,
    { minLength = 2 } = {}
  ) {
    if (!text.trim()) throw new Error('Please provide some valid text');
    this._text = text;
    this._words = [];
    this.opts = {
      minLength
    };
    this._results = {};
    this.split();
    this.setResults();
  }

  get text() {
    return this._text;
  }

  get results() {
    return this._results;
  }

  sortResults(obj) {
    return Object.entries(obj)
      .sort(([wordA, a], [wordB, b]) => b - a)
      .map(([name, nb]) => ({ word: name, count: nb }));
  }

  getOccurrenceFrom(searchedWord) {
    const found = this.results.find(({ word, count }) => word === searchedWord)
    return typeof found !== 'undefined'
      ? found.count
      : 'No result for this word';
  }

  setResults() {
    this._results = this.sortResults(this._words
      .reduce((results, word) =>
        ({
          ...results,
          [word]: (word in results)
            ? results[word] + 1
            : 1
        }),
        {}
      ));
  }

  split() {
    return this._words = this.text
      .split(' ')
      .filter(word => word.length >= this.opts.minLength);
  }
}

module.exports = Occurrences;
