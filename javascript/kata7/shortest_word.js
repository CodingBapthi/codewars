let str = 'Test string for the example';

const findShort = str => {
    let words = str.split(' ');
    let shortWord = words.reduce((shortWord, currentWord) => {
        return currentWord.length < shortWord.length ? currentWord : shortWord;
    }, words[0]);
  return shortWord.length;
}
