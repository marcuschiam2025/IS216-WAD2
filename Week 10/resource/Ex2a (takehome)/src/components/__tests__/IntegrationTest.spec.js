/*
What the integration test verifies:
- You're no longer testing RatingSelector or CourseReview in isolation.
- You're testing:
  User click
      ↓
  RatingSelector
      ↓ emit
  CourseReview
      ↓ update state
  DOM changes

Integration tests for CourseReview
  ✓ clicking child button updates parent
  ✓ parent displays selected rating
  ✓ parent shows positive feedback for rating ≥ 4
  ✓ parent shows improvement feedback otherwise
*/

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import CourseReview from '@/components/CourseReview.vue'

describe('CourseReview and RatingSelector integration', () => {
  // test 1
  it('updates parent when child emits rating and shows thank you message for rating of 5', async () => {
    const wrapper = mount(CourseReview)
    const buttons = wrapper.findAll('button')
    await buttons[4].trigger('click')

    expect(wrapper.text())
      .toContain('Your rating: 5')

    expect(wrapper.text())
      .toContain(
        'Thank you for your positive feedback!'
      )
  })

  // test 2
  it('updates parent when child emits rating and shows thank you message for rating of 4', async () => {
    const wrapper = mount(CourseReview)
    const buttons = wrapper.findAll('button')
    await buttons[3].trigger('click')

    expect(wrapper.text())
      .toContain('Your rating: 4')

    expect(wrapper.text())
      .toContain(
        'Thank you for your positive feedback!'
      )
  })

  // test 3
  /*
  it('updates parent when child emits rating and shows improvement message for rating of 3', async () => {
    // TODO: fill in this test
  })
  */

  // test 4
  /*
  it('updates parent when child emits rating and shows improvement message for rating of 2', async () => {
    // TODO: fill in this test
  })
  */

  // test 5
  it('updates parent when child emits rating and shows improvement message for rating of 1', async () => {
    const wrapper = mount(CourseReview)
    const buttons = wrapper.findAll('button')
    await buttons[0].trigger('click')

    expect(wrapper.text())
      .toContain('Your rating: 1')

    expect(wrapper.text())
      .toContain(
        'We will work to improve the course.'
      )
  })
})

