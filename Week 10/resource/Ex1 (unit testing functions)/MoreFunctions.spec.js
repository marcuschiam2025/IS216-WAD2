/*
more samples of unit tests (functions and tests are in the same file)
the tests here demonstrate other methods besides toBe():
  toEqual()
  toHaveLength()
  toThrow()
  toBeGreaterThan()
  toBeTruthy()
  toBeFalsy()
  toHaveProperty()
*/

import { describe, it, expect } from 'vitest'

function isEven(n) {
  return n % 2 === 0;
}

it("correctly identifies even and odd numbers", () => {
  expect(isEven(0)).toBe(true);
  expect(isEven(2)).toBe(true);
  expect(isEven(10)).toBe(true);
  expect(isEven(1)).toBe(false);
  expect(isEven(7)).toBe(false);
  expect(isEven(15)).toBe(false);
});

// -------------------

function reverseString(str) {
  return str.split("").reverse().join("");
}

it("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

it("reverses an empty string", () => {
  expect(reverseString("")).toBe("");
});

// -------------------
function createStudent(name, age) {
  return {
    name,
    age,
    active: true
  };
}

// For objects, toEqual() is commonly used because it compares the contents of the object rather than whether it's the exact same object in memory.
it("creates a student object", () => {
  expect(createStudent("Alice", 20)).toEqual({
    name: "Alice",
    age: 20,
    active: true
  });
});

// -------------------

function getModules() {
  return ["SE301", "CS101", "IS216", "IS113"];
}

it("module list contains IS216", () => {
  expect(getModules()).toContain("IS216");
});

// -------------------
function getTopStudents() {
  return ["Alice", "Bob", "Charlie"];
}

it("returns three students", () => {
  expect(getTopStudents()).toHaveLength(3);
});

// -------------------
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

it("throws an error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero");
});

// -------------------

function square(n) {
  return n * n;
}

it("square of 5 is greater than 20", () => {
  expect(square(5)).toBeGreaterThan(20);
});

// -------------------

function getEmail() {
  return "alice@example.com";
}

it("returns a valid email address", () => {
  expect(getEmail()).toMatch(/@example\.com$/);
});

// -------------------

function hasPermission1(role) {
  return role === "admin";
}

it("admin has permission", () => {
  expect(hasPermission1("admin")).toBeTruthy();
});

// -------------------

function hasPermission2(role) {
  return role === "admin";
}

it("guest does not have permission", () => {
  expect(hasPermission2("guest")).toBeFalsy();
});

// -------------------

function getUser() {
  return {
    name: "Alice",
    age: 20
  };
}

it("user has an age property", () => {
  expect(getUser()).toHaveProperty("age");
});

// -------------------

function getWeatherData() {
  return [
    {
      result: {
        temp: 31,
        desc: "Hazy"
      },
      location: {
        city: 'Singapore'
      }
    }
  ]
}

// TODO: write a test case for getWeatherData, e.g., that checks that the temp must be greater than 30 
describe('TestSuite1: getWeatherData', () => {
  it('Test1: checks that getWeatherData return a temp greater than 30', () => {
    expect(getWeatherData()[0].result.temp).toBeGreaterThan(30);   
  })
})