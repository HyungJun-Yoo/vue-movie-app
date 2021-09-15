module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정
  moduleFileExtensions: [
    'js',
    'vue'
  ],

  // `~` 같은 경로 별칭을 매핑
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있다
  // E.g. `import HelloWorld from '~/components/HelloWorld.vue';`
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },

  // // 일치하는 경로에서는 모듈을 가져오지 않음
  // // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있다
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/dist',
    '<rootDir>/cypress'
  ],

  // jsdom 환경에 대한 URL을 설정
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',

  // 정규식과 일치하는 파일의 변환 모듈을 지정
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest'
  }
}