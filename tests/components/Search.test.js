import { shallowMount } from '@vue/test-utils'
import Search from '~/components/Search'

describe('components/Sarch.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Search)
  })

  test('선택 가능한 연도의 개수가 일치합니다', () => {
    const year = wrapper.vm.filters.find(f => f.name === 'year')
    // 2021 - 1985 + 1 = 37
    const yearLenth = new Date().getFullYear() - 1985 + 1
    expect(year.items.length).toBe(yearLenth)
  })
})