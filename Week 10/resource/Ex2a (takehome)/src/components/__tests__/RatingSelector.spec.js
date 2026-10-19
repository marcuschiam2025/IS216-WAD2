/*
Component Test for RatingSelector.vue

    User behavior
        ↓
    Expected outcome
        ↓
    Test implementation

*/

import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RatingSelector from '@/components/RatingSelector.vue'

describe('RatingSelector', () => {

    //  Verify that the component displays five rating buttons.
    it('renders five rating buttons', () => {
        const wrapper = mount(RatingSelector)
        /* 
            wrapper.findAll(...) is a Vue Test Utils method that finds multiple DOM elements matching a selector.
        */
        expect(
            wrapper.findAll('button')
        ).toHaveLength(5)
    })

    // Verify that selecting a rating of 1 displays the message "Poor".
    it('shows Poor when rating 1 is selected', async () => {
        const wrapper = mount(RatingSelector)
        await wrapper.findAll('button')[0]
            .trigger('click')

        expect(wrapper.text())
            .toContain('Poor')
    })

    // Verify that selecting a rating of 3 displays the message "Good".
    /*
    it('shows Good when rating 3 is selected', async () => {
        // TODO: fill this up
    })
    */

    // Verify that selecting a rating of 5 displays the message "Excellent!".
    /*
    it('shows Excellent when rating 5 is selected', async () => {
        // TODO: fill this up
    })
    */

    // Verify that when a rating is selected, the component emits a "rating-selected" event with the correct rating value.
    it('emits the selected rating', async () => {
        const wrapper = mount(RatingSelector)
        await wrapper.findAll('button')[3]   // 4th button clicked
            .trigger('click')

        /* 
           wrapper.emitted('rating-selected') returns an array of all times that event was emitted.
        */
        expect(
            wrapper.emitted('rating-selected')
        ).toBeTruthy()

        /* 
            wrapper.emitted('rating-selected')[0] returns the event data by the first emitted event.
        */
        expect(
            wrapper.emitted('rating-selected')[0]
        ).toEqual([4])
    })

})