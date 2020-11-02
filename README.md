# 프로젝트에서 배운 점

- 리액트를 사용한다면 프론트 서버에서 브라우저가 필요한 모든 것을 받아와야 하기 때문에 정작 백엔드 서버에서 API를 받아오는 시간까지 합한다면 다른 프레임워크들에 비해서 더 시간이 오래 걸릴 수도 있다. 하지만 로딩 페이지 등의 눈에 보이는 인터렉션을 통해서 조금이라도 늦어지는 로딩시간동안 사용자를 잡아놓을 수 있다는 장점이 있다. 실제로 이 로딩페이지는 역으로 검색 엔진에게 혼동을 주어 검색 순위가 밀릴 수 있다는 문제점이 있다.

## Next.js를 사용하는 이유

- Next.js를 사용하면 브라우저에서 전통적인 SSR 방식을 사용하며 처음으로 페이지를 방문할 때에 페이지에 존재하는 라우팅 링크를 통해 갈 수 있는 페이지의 뼈대까지도 모두 가져와 캐싱하므로 첫 로딩 시간은 걸리나 후에 캐싱된 데이터로 좀 더 빠른 로딩을 보여준다.

- Next.js에서는 ***import React from 'react'*** 구문을 ***생략하는 것이 가능***하다.
- 또한 pages 폴더내 파일들의 구조와 이름에 의거하여 라우팅 기능을 기본 제공한다.

> Next 9버전부터 추가 된 기능으로 동적 라우팅을 사용할 수도 있다.

## Inline Style을 사용하면 좋지 않은 이유

- 보통 Inline Style을 사용하게 되면 객체로 스타일을 전달하게 되는데 객체는 아무리 같은 값을 가지고 있더라도 가리키는 주소값이 다르므로 서로 다른 객체로 인식하게 된댜. 때문에 스타일로 적용한 값이 바뀌지 않았음에도 리렌더링이 되므로 사용하면 좋지 않다.
- 리액트에서는 styled-component를 사용해서 스타일을 대체하는 경우가 많다.
- styled-component를 사용하면 스타일로 인해 생기는 리렌더링을 막을 수 있다.

## 보안위협

- a 태그를 _blank 속성으로 열게 되면 언제나 opener를 참조할 수 있다. 때문에 부모 탭과 같은 스레드에서 페이지가 동작한다. Noopener 속성을 사용한다면 열린 탭은 부모를 호출 할 일이 없다.

  > Tabnabbing : a 태그의 target이 _blank인 경우 새롭게 열린 탭에서 기존 location을 피싱 사이트로 변경, 정보를 탈취하는 공격
- 몇 몇 취약한 웹사이트들은 메일을 통해서 옮겨짐

- 또한 Tabnabbing 등 악의적인 공격으로부터 무방비하므로 noopener noreferrer를 사용해서 새로운 페이지로 인해서 생길 수 있는 성능 저하를 막고 window.opener를 통한 악의적인 location 편경을 막을 수 있다.

## React-Slick
- corousel slider를 사용하기 위한 라이브러리로 기본적인 형태가 이미 정해져있어서 다시 스타일을 적용하는 것이 어려움.

## Redux-thunk 대신 Redux-saga를 사용한 이유
- redux-thunk에서는 특별한 처리를 하지 않으면 여러번 클릭해서 생기는 모든 요청을 한꺼번에 보내게 되는데 이러한 상황에 대해 대처가 되지 않는다면 DoS 공격으로부터 취약해진다.redux-saga에서는 이러한 요청들 차단하고 마지막 요청만을 처리하는 등의 기능들을 제공한다.

## Redux-Saga
- call과 fork의 차이는 call은 동기함수 fork는 비동기함수 호출이라는 점.
- take는 1회용이므로 한 번 사용후에는 이벤트 리스너를 사용할 수 없다. 때문에 while(true)를 사용해서 중단점을 두어 계속 다시 실행할 수 있도록 한다. (직관적이지 않은 코드이므로 비추)
- takeEvery는 while(true) take와 달리 비동기로 동작 이는 takeLatest도 마찬가지이며 보통 여러번의 request를 모두 처리하지 않고 제일 마지막의 요청만을 처리하는 takeLatest를 많이 사용한다.
- takeLatest에는 치명적인 단점이 존재하는데 모든 request들 중에서 가장 마지막 request만을 처리한다고 하지만 실제로는 보내는 request를 제한하는 것이 아닌 받는 response를 제한하는 것이므로 실제로는 여러번 보낸 request가 실제로 서버에서 처리되는 경우들이 있으므로 서버쪽에서도 체크를 해주어야 한다.
- 이를 처리하기 위해서 throttle을 이용해서 특정 시간 이내에는 같은 리퀘스트를 다시 보낼 수 없도록 처리르 하는 경우도 있다.
- saga와 reducer는 거의 동시에 실행되지만 reducer가 saga보다 조금 더 먼저 실행된다.
- saga와 reducer를 동시에 적용하게 되면 전체적인 코드의 길이는 늘어나게 된다.
- 보통 커다란 덩어리를 먼저 만들고 분리하는 것이 더 간단하다.

## 유용한 라이브러리
---
### shortid
- 간단하게 중복되지 않는 아이디를 생성하기 위한 라이브러리

### faker
- 가짜 데이터를 생성해서 서버가 보내줄 형태의 자료들을 임의로 보여줄 수 있는 라이브러리
- 대량의 데이터를 불러오는 등 다양한 테스트에 용이함

### Immer
- 불변성 유지를 위해서 기하급수적으로 늘어나는 코드를 정리하기 위한 라이브러리
- Immer를 사용하지 않을 경우 리덕스와 리덕스 사가에서 중복된 형태로 몇 배씩 코드가 늘어나게 된다.
- 불변성을 지키는 것에 대한 개념을 알고 있다면 가능한 간단하게 코드를 짜는 것에 의의를 두어야 하므로 코드의 간략화를 도와주는 라이브러리를 적극 활용하는 것은 좋은 일이다.

### React Virtualized
- 로딩되는 수백개의 포스트를 화면에 보여지는 부분에 해당되는 포스트만을 만들고 보이지 않는 포스트를 화면에서 지우는 대신 메모리에서만 가지고 있는 방법을 제공해주는 라이브러리.

## AWS
- AWS를 사용할 때에 프리 티어를 사용하더라도 일정 기간이 지나거나 용량을 초과하면 금액이 부과된다.
- MongDB를 사용하면 프리티어를 평생무료로 사용 가능하다 (2020년 기준)

### Swagger.io
- API document를 작성하는데에 도움을 주는 툴

### mysql
- 관계형 데이터베이스
- column: 각 데이터들을 지칭하는 객체
- row: 실제 각 데이터들

### mysql2
- node와 mysql을 연결해주는 드라이버 역할

### DataGrip
- ERD(데이터의 도식화)를 만드는 데에 도움을 주는 페이지


### bcrypt
- 보안을 위한 비밀번호 암호화 라이브러리
- bcrypt는 비동기 함수
- 두 번째 인자로 전달되는 숫자가 클수록 보안도가 높아지며 복잡한 암호가 되는 대신 느려진다. (보통 10~13으로 설정)
- ERD(데이터의 도식화)를 만드는 데에 도움을 주는 페이지      
 

