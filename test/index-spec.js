// sorting array's
//  - function should take a String
//    - if it is not a String throw error
//  - function should split the String in an array for each line
//  - function should split the array's of each line at the `,`
//  - function should sort on first an on second field of the deepest array.
//  - result should look be a sorted array
import assert from 'assert'
import fs from 'fs'
import sinon from 'sinon'
import {sortCSVBySecondColumn, TypeError} from '../src/index.js'

assert.calledWith = sinon.calledWith;

describe('Default', () => {
  it('should not fail', () => {
    assert.equal(1,1);
  });
});

describe('Sort CSV', () => {
  let fixture = fs.readFileSync('fixture/csv-list.csv').toString();

  describe('takes arguments and', () => {
    it('should throw a TypeError if nothing is provided', () => {
      assert.throws(sortCSVBySecondColumn, TypeError);
    });

    it('should throw a TypeError if a integer is provided', () => {
      assert.throws(() => sortCSVBySecondColumn(10), TypeError);
    });

    it('should accept a string and not throw a TypeError', () => {
      assert.doesNotThrow(() => sortCSVBySecondColumn(fixture));
    });

  });

  describe('Sorting by second column', () => {
    it('should return an array', () => {
      assert.ok(sortCSVBySecondColumn(fixture) instanceof Array);
    });

    it('should return an array even is input is an empty string', () => {
      let emptyString = '';
      assert.ok(sortCSVBySecondColumn(emptyString) instanceof Array);
    });

    it('should sort second CSV column by letter', () => {
      let result = sortCSVBySecondColumn("a,b,c\n" +
        "b,c,a\n" +
        "c,a,b\n");
      assert.equal(result[0][0], 'c');
    });

    it('should sort first CSV column after the second column by letter', () => {
      let result = sortCSVBySecondColumn("a,b,c\n" +
        "b,c,a\n" +
        "c,a,b\n" +
        "a,a,b\n");
      assert.equal(result[0][0], 'a');
    });

    it('last element should not be empty', () =>{
      let result = sortCSVBySecondColumn("a,b,c\n" +
        "a,a,b\n");
      assert.equal(result.length, 2);

    })
  });
});
