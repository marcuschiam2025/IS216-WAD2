/* IntegrationTest.spec.js

   Integration tests for StudentProfile.vue, StudentName.vue, and StudentGrade.vue.
   Unlike StudentProfile.spec.js, which tests prop passing with stubbed child components, 
   this suite mounts the real components together to verify that they collaborate correctly from StudentProfile's props through rendered grades.
*/
import { mount } from '@vue/test-utils' // Import mount to create a Vue component instance for testing.
import { describe, it, expect } from 'vitest' // Import Vitest's suite grouping, test-case, and assertion functions.
import StudentProfile from '../StudentProfile.vue' // Import the parent component that composes the real child components.

describe('StudentProfile Integration', () => {
  // describe groups related integration tests under one named suite.

  it('displays correct name and grade A for score 85', () => {
    // it defines a test case for an 85 score and its rendered grade.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile with its real child components and save the wrapper.
      props: {
        // Supply the properties passed through the component tree.
        name: 'Alice', // Set the student's name to Alice.
        score: 85, // Set the student's score to 85, which should result in grade A.
      }, // Finish the supplied component properties.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Alice') // expect begins an assertion; check the rendered output includes Alice.
    expect(wrapper.text()).toContain('Grade: A') // Assert that the real grade component displays grade A.
  }) // Finish the grade-A integration test.

  it('displays correct name and grade B for score 75', () => {
    // Define a test case for a 75 score and its rendered grade.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile with its real child components and save the wrapper.
      props: {
        // Supply the properties passed through the component tree.
        name: 'Bob', // Set the student's name to Bob.
        score: 75, // Set the student's score to 75, which should result in grade B.
      }, // Finish the supplied component properties.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Bob') // Assert that the rendered output includes Bob.
    expect(wrapper.text()).toContain('Grade: B') // Assert that the real grade component displays grade B.
  }) // Finish the grade-B integration test.

  it('displays correct name and grade C for score 65', () => {
    // Define a test case for a 65 score and its rendered grade.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile with its real child components and save the wrapper.
      props: {
        // Supply the properties passed through the component tree.
        name: 'Charlie', // Set the student's name to Charlie.
        score: 65, // Set the student's score to 65, which should result in grade C.
      }, // Finish the supplied component properties.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Charlie') // Assert that the rendered output includes Charlie.
    expect(wrapper.text()).toContain('Grade: C') // Assert that the real grade component displays grade C.
  }) // Finish the grade-C integration test.

  // TODO the grade-F integration test.
}) // Finish the StudentProfile integration test suite.
