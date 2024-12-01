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

async function runOne() {
  await readInput();

  list_left = list_left.sort();
  list_right = list_right.sort();

  let totalDistance = 0;
  for (let i = 0; i < list_left.length; i++) {
    const left = list_left[i];
    const right = list_right[i];
    totalDistance += right > left ? right - left : left - right;
  }
  console.log(totalDistance);
}

async function runTwo() {
  await readInput();

  const numberStore: Map<number, number> = new Map();

  let similarityScore = 0;

  list_left.forEach((item: number) => {
    if (!numberStore.has(item))
      numberStore.set(item, list_right.filter((it) => it == item).length);

    similarityScore += item * numberStore.get(item)!;
  });

  console.log(similarityScore);
}

runTwo();
