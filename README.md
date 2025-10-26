# 자동차 경주 (JavaScript)

## 기능 목록 (Requirements Checklist)

-   [x] Node.js 22.19.0에서 실행 가능, 시작점은 `src/App.js`의 `run()`
-   [x] `@woowacourse/mission-utils`의 `Console`, `Random` 사용
-   [x] 자동차 이름 입력: 쉼표로 구분, 각 이름은 공백 제거 후 1~5자
-   [x] 시도 횟수 입력: 양의 정수(>=1)
-   [x] 잘못된 입력 시 `[ERROR]`로 시작하는 메시지로 에러 발생 후 종료
-   [x] 시뮬레이션: 각 라운드에서 자동차마다 0~9 난수, 4 이상이면 전진
-   [x] 라운드 종료마다 `이름 : -...` 형태로 출력
-   [x] 최종 우승자 출력: 최댓값 동점자 모두, `, `로 구분
-   [x] Jest 테스트로 기능 확인 (제공 테스트 통과)

## 입출력 형식 요약

-   입력
    -   경주할 자동차 이름(쉼표 기준)
    -   시도할 횟수(정수)
-   출력
    -   차수별 실행 결과 `이름 : -...`
    -   최종 우승자: `최종 우승자 : 이름1, 이름2`

## 개발 계획

1. 입력 및 검증

-   `Console.readLineAsync()`로 이름, 횟수 입력
-   이름: 공백 트리밍, 1~5자 검증, 비어있음 금지
-   횟수: 정수 문자열, 1 이상
-   위반 시 `throw new Error('[ERROR] ...')`

2. 시뮬레이션과 출력

-   자동차 상태 `{ name, position }`
-   매 라운드마다 각 자동차에 대해 `Random.pickNumberInRange(0, 9)` → 4 이상 시 `position++`
-   라운드 종료 후 각 자동차 상태 출력

3. 우승자 결정 및 출력

-   최댓값 계산, 동점 모두 우승자로 선정
-   `최종 우승자 : {names}` 출력

## 커밋 메시지 컨벤션 (AngularJS)

-   `docs: add feature list and plan to README`
-   `feat: implement input parsing and validation`
-   `feat: implement racing simulation and per-round output`
-   `feat: print final winners`
-   `refactor: extract helpers for validation/formatting`

## 실행 방법

-   테스트: `npm test`
-   실행: `npm start`
