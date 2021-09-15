import { shallowMount } from '@vue/test-utils'
import router from '~/routes'
import store from '~/store'
import Header from '~/components/Header'

describe('components/Header.vue', () => {
  let wrapper
  // 각각의 테스트가 동작하기 직전에 실행
  beforeEach(async () => {
    // window.scrollTo를 모의 함수로 동작하는 것처럼 구성
    window.scrollTo = jest.fn()
    // 페이지 이동
    router.push('/movie/tt1234567')
    // 페이지 기다림
    await router.isReady()

    // Header 컴포넌트 연결
    wrapper = shallowMount(Header, {
      global: {
        plugins: [
          router,
          store
        ]
      }
    })  
  })

  // 각각의 테스트 함수 내부에서는 고유한 환경으로 테스트가 동작해야 함

  test('경로 정규표현식이 없는 경우 일치하지 않습니다', () => {
    const regExp = undefined
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })

  test('경로 정규표현식과 일치해야 합니다', () => {
    const regExp = /^\/movie/
    expect(wrapper.vm.isMatch(regExp)).toBe(true)
  })

  test('경로 정규표현식과 일치하지 않아야 합니다', () => {
    const regExp = /^\/ITBlue/
    expect(wrapper.vm.isMatch(regExp)).toBe(false)
  })
})