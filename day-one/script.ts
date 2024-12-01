var list_left: Array<number> = [];
var list_right: Array<number> = [];

async function readInput() {
  const text: string = await Deno.readTextFile("day-one/input.txt");

  var lines = text.split("\n");

  lines.forEach((line: string) => {
    var values = line.split("   ");
    list_left.push(Number.parseInt(values[0]));
    list_right.push(Number.parseInt(values[1]));
  });
}

async function runOne() {
  await readInput();

  list_left = list_left.sort();
  list_right = list_right.sort();

  var totalDistance = 0;
  for (var i = 0; i < list_left.length; i++) {
    var left = list_left[i];
    var right = list_right[i];
    totalDistance += right > left ? right - left : left - right;
  }
  console.log(totalDistance);
}

async function runTwo() {
  await readInput();

  var tmp: Map<number, number> = new Map();

  var similarityScore = 0;

  list_left.forEach((item: number) => {
    if (!tmp.has(item))
      tmp[item] = list_right.filter((it) => it == item).length;

    similarityScore += item * tmp[item];
  });

  console.log(similarityScore);
}

runTwo();
