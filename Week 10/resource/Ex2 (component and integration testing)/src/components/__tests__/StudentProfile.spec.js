/* StudentProfile.spec.js

   This suite focuses on StudentProfile passing props to its child components, 
   using stubs so that those child behaviors are isolated from the parent-component tests.

   StudentProfile is responsible for:
   1. Receiving name and score via props.
   2. Passing name to StudentName.
   3. Passing score to StudentGrade.
   4. Rendering both child components.
*/

import { mount } from '@vue/test-utils' // Import mount to create a Vue component instance for testing.
import { describe, it, expect } from 'vitest' // Import Vitest's suite grouping, test-case, and assertion functions.
import StudentProfile from '../StudentProfile.vue' // Import the component whose behavior is being tested.

describe('StudentProfile', () => {
  // describe groups related test cases under the StudentProfile suite.

  it('passes the correct name to StudentName', () => {
    // it defines one test case for passing the student's name.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile and keep the wrapper for inspecting its output.
      props: {
        // Set the input properties supplied to StudentProfile.
        name: 'Alice', // Pass Alice as the student's name.
        score: 85, // Pass 85 as the student's score.
      }, // Finish the component properties.
      global: {
        // Configure options that apply to the mounted component and its children.
        stubs: {
          // Replace real child components with simple test doubles.
          StudentName: {
            // Provide a custom stub for StudentName.
            props: ['name'], // Let the stub receive the name property.
            template: '<div>Name: {{ name }}</div>', // Render the received name as simple text.
          }, // Finish the StudentName stub.
          StudentGrade: true, // Automatically stub StudentGrade because this test does not examine it.
        }, // Finish the child stubs configuration.
      }, // Finish the global mount configuration.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Name: Alice') // expect begins an assertion; verify the rendered name is Alice.
  }) // Finish the correct-name test case.

  it('passes the correct score to StudentGrade', () => {
    // Define a test case for passing the student's score.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile and keep the wrapper for inspecting its output.
      props: {
        // Set the input properties supplied to StudentProfile.
        name: 'Alice', // Pass Alice as the student's name.
        score: 85, // Pass 85 as the student's score.
      }, // Finish the component properties.
      global: {
        // Configure options that apply to the mounted component and its children.
        stubs: {
          // Replace real child components with simple test doubles.
          StudentName: true, // Automatically stub StudentName because this test does not examine it.
          StudentGrade: {
            // Provide a custom stub for StudentGrade.
            props: ['score'], // Let the stub receive the score property.
            template: '<div>Score: {{ score }}</div>', // Render the received score as simple text.
          }, // Finish the StudentGrade stub.
        }, // Finish the child stubs configuration.
      }, // Finish the global mount configuration.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Score: 85') // Assert that the rendered score is 85.
  }) // Finish the correct-score test case.

  it('passes a different name to StudentName', () => {
    // Define a test case proving another name is passed through.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile and keep the wrapper for inspecting its output.
      props: {
        // Set the input properties supplied to StudentProfile.
        name: 'Bob', // Pass Bob as the student's name to check a different value.
        score: 85, // Pass 85 as the student's score.
      }, // Finish the component properties.
      global: {
        // Configure options that apply to the mounted component and its children.
        stubs: {
          // Replace real child components with simple test doubles.
          StudentName: {
            // Provide a custom stub for StudentName.
            props: ['name'], // Let the stub receive the name property.
            template: '<div>Name: {{ name }}</div>', // Render the received name as simple text.
          }, // Finish the StudentName stub.
          StudentGrade: true, // Automatically stub StudentGrade because this test does not examine it.
        }, // Finish the child stubs configuration.
      }, // Finish the global mount configuration.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Name: Bob') // Assert that the rendered name is Bob.
  }) // Finish the different-name test case.

  it('passes a different score to StudentGrade', () => {
    // Define a test case proving another score is passed through.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile and keep the wrapper for inspecting its output.
      props: {
        // Set the input properties supplied to StudentProfile.
        name: 'Alice', // Pass Alice as the student's name.
        score: 75, // Pass 75 as the student's score to check a different value.
      }, // Finish the component properties.
      global: {
        // Configure options that apply to the mounted component and its children.
        stubs: {
          // Replace real child components with simple test doubles.
          StudentName: true, // Automatically stub StudentName because this test does not examine it.
          StudentGrade: {
            // Provide a custom stub for StudentGrade.
            props: ['score'], // Let the stub receive the score property.
            template: '<div>Score: {{ score }}</div>', // Render the received score as simple text.
          }, // Finish the StudentGrade stub.
        }, // Finish the child stubs configuration.
      }, // Finish the global mount configuration.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Score: 75') // Assert that the rendered score is 75.
  }) // Finish the different-score test case.

  // Verify that both child components are rendered.
  it('renders both child components', () => {
    // Define a test case verifying both child components appear.
    const wrapper = mount(StudentProfile, {
      // Mount StudentProfile and keep the wrapper for inspecting its output.
      props: {
        // Set the input properties supplied to StudentProfile.
        name: 'Alice', // Pass Alice as the student's name.
        score: 85, // Pass 85 as the student's score.
      }, // Finish the component properties.
      global: {
        // Configure options that apply to the mounted component and its children.
        stubs: {
          // Replace real child components with simple test doubles.
          StudentName: {
            // Provide a custom stub for StudentName.
            props: ['name'], // Let the stub receive the name property.
            template: '<div>Name: {{ name }}</div>', // Render the received name as simple text.
          }, // Finish the StudentName stub.
          StudentGrade: {
            // Provide a custom stub for StudentGrade.
            props: ['score'], // Let the stub receive the score property.
            template: '<div>Score: {{ score }}</div>', // Render the received score as simple text.
          }, // Finish the StudentGrade stub.
        }, // Finish the child stubs configuration.
      }, // Finish the global mount configuration.
    }) // Finish mounting StudentProfile.

    expect(wrapper.text()).toContain('Name: Alice') // Assert that the rendered output includes the student's name.
    expect(wrapper.text()).toContain('Score: 85') // Assert that the rendered output includes the student's score.
  }) // Finish the child-rendering test case.
}) // Finish the StudentProfile test suite.
