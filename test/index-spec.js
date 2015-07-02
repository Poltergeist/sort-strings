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
});

function sortCSV(csv) {
  if (typeof csv != 'string') {
    throw new TypeError();
  }
}
function splitLines(lines='') {
  return lines.split('\n');
}

class TypeError {}
