let list_left: Array<number> = [];
let list_right: Array<number> = [];

async function readInput() {
  const text: string = await Deno.readTextFile("day-one/input.txt");

  const lines = text.split("\n");

  lines.forEach((line: string) => {
    const values = line.split("   ");
    list_left.push(Number.parseInt(values[0]));
    list_right.push(Number.parseInt(values[1]));
  });
}

function runOne() {
  list_left = list_left.sort();
  list_right = list_right.sort();

  let totalDistance = 0;
  for (let i = 0; i < list_left.length; i++) {
    const left = list_left[i];
    const right = list_right[i];
    totalDistance += right > left ? right - left : left - right;
  }
  return totalDistance;
}

function runTwo() {
  const numberStore: Map<number, number> = new Map();

  let similarityScore = 0;

  list_left.forEach((item: number) => {
    if (!numberStore.has(item))
      numberStore.set(item, list_right.filter((it) => it == item).length);

    similarityScore += item * numberStore.get(item)!;
  });

  return similarityScore;
}

await readInput();

console.log("Part one: " + runOne());
console.log("Part two: " + runTwo());
