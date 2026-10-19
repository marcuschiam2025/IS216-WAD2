/* StudentGrade.spec.js
   Tests a component's computed output for several score values 
   and verifies conditional styling for passing and failing grades.

   The component receives a numeric score via props &:
      1. Computes a letter grade (A, B, C, or F)
      2. Displays the computed grade
      3. Uses different text colors for passing & failing grades
*/

import { mount } from '@vue/test-utils' // Import mount, which creates a Vue component instance for testing.
import { describe, it, expect } from 'vitest' // Import Vitest's suite, test-case, and assertion functions.
import StudentGrade from '../StudentGrade.vue' // Import the component that these tests exercise.

describe('StudentGrade', () => {
  // describe groups related tests into one named test suite.

  it('displays grade A when score is 85', () => {
    // it defines one test case describing expected behavior.
    const wrapper = mount(StudentGrade, {
      // Mount the component and save its test wrapper.
      props: {
        // Provide the component's input properties.
        score: 85, // Set the score to 85 for this test.
      }, // Finish the properties object.
    }) // Finish mounting the component.

    expect(wrapper.text()).toContain('Grade: A') // expect starts an assertion; verify rendered text contains grade A.
  }) // Finish the grade-A test case.

  it('displays grade B when score is 75', () => {
    // Define the test case for a score of 75.
    const wrapper = mount(StudentGrade, {
      // Mount the component and save its test wrapper.
      props: {
        // Provide the component's input properties.
        score: 75, // Set the score to 75 for this test.
      }, // Finish the properties object.
    }) // Finish mounting the component.

    expect(wrapper.text()).toContain('Grade: B') // Assert that the rendered text contains grade B.
  }) // Finish the grade-B test case.

  it('displays grade C when score is 65', () => {
    // Define the test case for a score of 65.
    const wrapper = mount(StudentGrade, {
      // Mount the component and save its test wrapper.
      props: {
        // Provide the component's input properties.
        score: 65, // Set the score to 65 for this test.
      }, // Finish the properties object.
    }) // Finish mounting the component.

    expect(wrapper.text()).toContain('Grade: C') // Assert that the rendered text contains grade C.
  }) // Finish the grade-C test case.

  it('displays grade F when score is 45', () => {
    // Define the test case for a score of 45.
    const wrapper = mount(StudentGrade, {
      // Mount the component and save its test wrapper.
      props: {
        // Provide the component's input properties.
        score: 45, // Set the score to 45 for this test.
      }, // Finish the properties object.
    }) // Finish mounting the component.

    expect(wrapper.text()).toContain('Grade: F') // Assert that the rendered text contains grade F.
  }) // Finish the grade-F test case.

  it('uses green text for passing grades', () => {
    // Define the test case for the passing-grade text color.
    const wrapper = mount(StudentGrade, {
      // Mount the component and save its test wrapper.
      props: {
        // Provide the component's input properties.
        score: 85, // Set a passing score for this test.
      }, // Finish the properties object.
    }) // Finish mounting the component.

    expect(wrapper.attributes('style')).toContain('green') // Assert that the rendered style includes green.
  }) // Finish the passing-color test case.

  // TODO: the failing-color test case.
}) // Finish the StudentGrade test suite.
