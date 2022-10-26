import FizzBuzz from "./FizzBuzz";

describe("createFromNumber", () => {
  it("should return Fizz if number can be divided by 3", () => {
    expect(FizzBuzz.createFromNumber(432)).toBe("Fizz");
    expect(FizzBuzz.createFromNumber(3)).toBe("Fizz");
    expect(FizzBuzz.createFromNumber(-3)).toBe("Fizz");
  });

  it("should return Fizz if number can be divided by 5", () => {
    expect(FizzBuzz.createFromNumber(35)).toBe("Buzz");
    expect(FizzBuzz.createFromNumber(500)).toBe("Buzz");
    expect(FizzBuzz.createFromNumber(5)).toBe("Buzz");
  });

  it("should return FizzBuzz if number can be divided by 3 AND 5", () => {
    expect(FizzBuzz.createFromNumber(15)).toBe("FizzBuzz");
  });

  it("display the number if no conditions matched", () => {
    expect(FizzBuzz.createFromNumber(-1)).toBe(-1);
    expect(FizzBuzz.createFromNumber(4)).toBe(4);
    expect(FizzBuzz.createFromNumber(101)).toBe(101);
  });

  it("should allow custom conditions", () => {
    const customConditions = { 4: "Hello", 5: "World", 7: "!" };
    expect(FizzBuzz.createFromNumber(4, customConditions)).toBe("Hello");
    expect(FizzBuzz.createFromNumber(5, customConditions)).toBe("World");
    expect(FizzBuzz.createFromNumber(7, customConditions)).toBe("!");
    expect(FizzBuzz.createFromNumber(11, customConditions)).toBe(11);
    expect(FizzBuzz.createFromNumber(140, customConditions)).toBe(
      "HelloWorld!"
    );
  });
});

describe("readFromArray", () => {
  it("should log every time", () => {
    console.log = jest.fn();
    FizzBuzz.logFromArray([3, 2, 9, 7, 15]);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith("Fizz");
    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith("Fizz");
    expect(console.log).toHaveBeenCalledWith(7);
    expect(console.log).toHaveBeenCalledWith("FizzBuzz");
  });
});
