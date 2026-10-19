// SimpleFunction.spec.js
// Used by vitest to test the add function in simplefunction.js

import { describe, it, expect } from 'vitest'
import { add } from './simplefunction'    // search for simplefunction.js in same folder

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

