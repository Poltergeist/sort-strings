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
import {sortCSV, splitColumns, splitLines, TypeError, sortAlphanumeric} from '../src/index.js'

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
      assert.throws(sortCSV, TypeError);
    });

    it('should throw a TypeError if a integer is provided', () => {
      assert.throws(() => sortCSV(10), TypeError);
    });

    it('should accept a string and not throw a TypeError', () => {
      assert.doesNotThrow(() => sortCSV(fixture));
    });
  });
  describe('Split Lines', () => {
    it('should split a String with multiple lines into an array', () => {
      let csv = `This is a little
      test of splitting`;

      assert.equal(splitLines(csv).length, 2);
    });
  });
  describe('Split Columns', () => {
    let line = 'this, is, a, line';

    assert.equal(splitColumns(line).length, 4);
  });
  describe('sortAlphanumeric', () => {
    it('should return -1 if a and b are passed to the function',() => {
      assert.equal(sortAlphanumeric('a', 'b'), -1);
    });

    it('should return 1 if b and a are passed to the function',() => {
      assert.equal(sortAlphanumeric('b', 'a'), 1);
    });
    it('should return -1 if A and B are passed to the function',() => {
      assert.equal(sortAlphanumeric('A', 'B'), -1);
    });

    it('should return 1 if B and A are passed to the function',() => {
      assert.equal(sortAlphanumeric('B', 'A'), 1);
    });
  })
  describe('Sorting', () => {
    it('should return an array', () => {
      assert.ok(sortCSV(fixture) instanceof Array);
    });

    it('should return an array even is input is an empty string', () => {
      let emptyString = '';
      assert.ok(sortCSV(emptyString) instanceof Array);
    });

    it('should sort second CSV column alpha numeric', () => {
      let result = sortCSV(fixture);
      let lastItem = '0'
      result.forEach((item) => {
        assert.ok(item[1].toLowerCase() >= lastItem.toLowerCase());
        lastItem = item[1];
      });
    });

    it('should sort first CSV column after the second column alpha numeric', () => {
      let result = sortCSV(fixture);
      let lastItem = ['0','0']
      result.forEach((item, index) => {
        if(item[1] == lastItem[1]){
          assert.ok(item[0].toLowerCase() >= lastItem[0].toLowerCase());
        }
        lastItem = item;
      });
    });
  });
});
