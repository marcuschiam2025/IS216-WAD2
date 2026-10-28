// SimpleFunction.spec.js
// Used by vitest to test the add function in simplefunction.js

import { describe, it, expect } from 'vitest'
import { add, minus } from './simplefunction'    // search for simplefunction.js in same folder

describe('TestSuite1: add', () => {
  it('Test1: adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);     
    expect(add(1, 3)).toBe(4);     
    expect(add(999, 999)).toBe(1998);   
  })

  it('Test2: adds a positive to negative number', () => {
    expect(add(2, -3)).toBe(-1);      
    expect(add(-1, 3)).toBe(2);     
    expect(add(-100, 100)).toBe(0);   
  })

  it('Test3: adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);      
    expect(add(-1, -30)).toBe(-31);     
    expect(add(-999, -3)).toBe(-1002);  
  })
})

describe('TestSuite1: minus', () => {
  it('Test1: minus two positive numbers', () => {
    expect(minus(2, 3)).toBe(-1);     
    expect(minus(1, 3)).toBe(-2);     
    expect(minus(999, 999)).toBe(0);   
  })

  it('Test2: minus a positive to negative number', () => {
    expect(minus(2, -3)).toBe(5);      
    expect(minus(-1, 3)).toBe(-4);     
    expect(minus(-100, 100)).toBe(-200);   
  })

  it('Test3: minus two negative numbers', () => {
    expect(minus(-2, -3)).toBe(1);      
    expect(minus(-1, -30)).toBe(29);     
    expect(minus(-999, -3)).toBe(-996);  
  })
})