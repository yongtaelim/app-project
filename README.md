# app-project
App 생성 및 로직....

## future
- React Native를 통해 App 개발..
- ReactJS 학습 - 누구든지 하는 리액트 youtube참조 ( #10 life cycle... )


## RactJS
### 도구
1. Webpack 
- 코드들을 의존하는 순서대로 합쳐서 하나 또는 N개의 결과물로 만들어 낸다.
- import를 사용하여 불러올때
2. Babel
- JavaScript 변환 도구
3. CodeSandbox
- 간단한 코드 작성을 하여 바로 View로 볼 수 있는 페이지.
- Class 문법 사용, React는 필수 입력! (import React, { Component } from 'react')
- render :: method -> return값은 jsx

### jsx
- html 과 비슷하지만 javascript로 변환하여 사용한다.
- ReactComponent를 사용할 때 사용하는 문법이다.
#### 사용규칙
1. tag는 반드시 닫혀있어야한다.
2. 모든 태그는 하나로 감싸줘야한다. ( v16.2 이상 버전에서 Fragment 사용할 수 있다. )
[![Edit sharp-dream-3pymd](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/sharp-dream-3pymd?fontsize=14)
3. 자바스크립트 값을 사용할 때는 {}를 사용
[![Edit great-engelbart-qscib](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/great-engelbart-qscib?fontsize=14)
4. 조건부 렌더링 (삼학 연산자)
[![Edit great-engelbart-qscib](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/great-engelbart-qscib?fontsize=14)
5. props ( 부모가 자식에게 넘겨주는 값 )
[![Edit objective-feather-if8ps](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/objective-feather-if8ps?fontsize=14)
6. state ( 자식이 자기 자신이 값을 들고 있어서 변경이 가능하다. )
[![Edit still-forest-hd1fd](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/still-forest-hd1fd?fontsize=14)
7. lifecycle
  - mounting : component brower에 나타날때 
  - Updaing : component가 바뀔때
  - Unmounting : component가 없어질때
  [![Edit React Basics](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-basics-h9vci?fontsize=14)
