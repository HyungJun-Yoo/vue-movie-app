/* 페이지를 관리해주는 구성 파일 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

/* createRouter()를 기본 내보내기 */
/* main.js 에서 router 라는 이름으로 받아서 하나의 플러그인으로 프로젝트에 적용 */
export default createRouter({
  // Hash 모드
  // 예시 - https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  // pages (페이지를 구분)
  routes: [
    {
      // 페이지를 구분해주는 각각의 경로
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})