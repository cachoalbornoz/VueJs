import { mount } from '@vue/test-utils'
import { test, vi, describe, expect } from "vitest";
import { computed } from 'vue';
import * as todosSetup from '../todosSetup'

const setupMock = {
    uncompletedTodos: computed(() => []),
    completedTodos: computed(() => []),
    toggle: vi.fn(),
    agregar: vi.fn(),
    actualizar: vi.fn(),
    borrar: vi.fn(),
}

import HomeView from '../views/HomeView.vue'

describe('mi primer test', () => {

    test('testeando componente', () => {
        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('Todo List')
    })

    test('List is empty', () => {
        const spy = vi.spyOn(todosSetup, 'todosFactory').mockReturnValue({
            ...setupMock
        })

        const wrapper = mount(HomeView)
        expect(wrapper.text()).toContain('Todo List')

    })

})