export function sortCSV(csv) {
  if (typeof csv != 'string') {
    throw new TypeError();
  }
  let lines = splitLines(csv);
  lines = lines.map(splitColumns);
  lines = lines.filter(String);
  lines = lines.sort((a, b) => {
    if(a[1] == b[1]) {
      return sortAlphanumeric(a[0], b[0]);
    }
    return sortAlphanumeric(a[1], b[1]);
  });
  return lines;
}
export function splitLines(lines='') {
  return lines.split('\n');
}
export function splitColumns(line) {
  return line.split(',');
}
export function sortAlphanumeric(a='zzz', b='zzz') {
  return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
}

export class TypeError {}
