export function sortCSVBySecondColumn(csv) {
  if (typeof csv != 'string') {
    throw new TypeError();
  }
  let lines = csv.split('\n');
  lines = lines.map((line) => line.split(','));
  lines = lines.filter(String);
  lines = lines.sort((a, b) => {
    if(a[1] == b[1]) {
      return sortByName(a[0], b[0]);
    }
    return sortByName(a[1], b[1]);
  });
  return lines;
}
function sortByName(a, b) {
  return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
}

export class TypeError {}
