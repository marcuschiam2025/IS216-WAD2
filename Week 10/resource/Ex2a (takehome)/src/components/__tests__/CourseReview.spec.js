/*
Component Test for CourseReview.vue

Since RatingSelector is assumed to be tested separately, CourseReview should focus on:
✓ initial rating displayed
✓ responds correctly when a rating-selected event is received
✓ displays positive feedback for high ratings
✓ displays improvement feedback for low ratings
✓ updates the displayed rating value

Notice that none of these tests care:
✗ how many buttons RatingSelector has
✗ what messages RatingSelector shows
✗ how RatingSelector generates ratings
Those belong to RatingSelector's test suite

This separation is exactly what makes component testing useful: each component is tested against its public contract, and integration tests can then verify that the components work together.

There are 4 tests below: 
    Test1: Initial state
    Test2: High rating path
    Test3: Low rating path
    Test4: Child component emits event → parent updates

Tests 2 & 3 are testing the internal implementation of CourseReview
Test 4 is testing the component contract between CourseReview and RatingSelector:
    emits rating-selected
            ↓
    CourseReview updates
This test interacts with the component the way another component would, rather than reaching inside and calling its methods.
*/

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CourseReview from '@/components/CourseReview.vue'

const RatingSelectorStub = {
    template: '<div></div>',
    emits: ['rating-selected']
}

describe('CourseReview', () => {
    // Verify that the initial rating displayed is 0.
    it('displays the initial rating of 0', () => {
        const wrapper = mount(CourseReview)

        expect(wrapper.text()).toContain('Your rating: 0')
    })

    // Verify that a high rating displays a positive feedback message.
    it('displays positive feedback when the rating is 4', async () => {
        const wrapper = mount(CourseReview)
        /* 
            wrapper.vm is the actual Vue instance of that component, so you can access: data, methods, computed properties
        */
        wrapper.vm.updateRating(4)

        /* 
        Following code waits until Vue has finished processing any pending DOM updates and reactive state changes before continuing.
        */
        await wrapper.vm.$nextTick()

        expect(wrapper.text()).toContain('Thank you for your positive feedback!')
    })

    // Verify that a low rating displays an improvement message.
    it('displays improvement feedback when the rating is 2', async () => {
        const wrapper = mount(CourseReview)
        wrapper.vm.updateRating(2)
        await wrapper.vm.$nextTick()

        expect(wrapper.text()).toContain('We will work to improve the course.')
    })

    // Verify that the parent updates its displayed rating when the child component emits a rating-selected event.
    it('updates the rating when RatingSelector emits rating-selected', async () => {
        const wrapper = mount(CourseReview, {
            global: {
                stubs: {
                    RatingSelector: RatingSelectorStub
                }
            }
        })

        const ratingSelector = wrapper.findComponent(RatingSelectorStub)

        ratingSelector.vm.$emit('rating-selected', 5)
        await wrapper.vm.$nextTick()

        expect(wrapper.text()).toContain('Your rating: 5')
        expect(wrapper.text()).toContain('Thank you for your positive feedback!')
    })

})