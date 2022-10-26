export type FizzBuzzConditions = Record<number, string>;

const createFromNumber = (
  input: number,
  conditions: FizzBuzzConditions = { 3: "Fizz", 5: "Buzz" }
) => {
  const result = Object.entries(conditions).reduce(
    (acc, [key, value]) => (acc += input % parseInt(key) === 0 ? value : ""),
    ""
  );

  return result || input;
};

const logFromArray = (numbers: number[], conditions?: FizzBuzzConditions) => {
  numbers.forEach((value) => {
    const result = createFromNumber(value, conditions);

    console.log(result);
  });
};

export default { createFromNumber, logFromArray };
