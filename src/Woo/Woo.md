## 김동영의 Source Code 저장 공간
- 각자의 공간에서 개발을 진행 한 뒤, 추후 합친다.
- Commit/Push 할 때는 각자의 Branch를 사용하고, Push 하기 전에 Pull/Update를 하여 상대가 이전에 올린 코드가 있는지 확인한다.

## Commit Message Convention
```text
Type(옵션): [#issueNumber - ]Subject  // -> 제목
(한 줄을 띄워 분리합니다.)
body(옵션) //  -> 본문 
(한 줄을 띄워 분리합니다.)
footer(옵션) // -> 꼬리말
```

1. 개요
- Type : 어떤 의도로 커밋했는지를 type에 명시합니다. 자세한 사항은 아래서 설명하겠습니다.
- subject : 최대 50글자가 넘지 않도록 하고 마침표는 찍지 않습니다. 영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 첫 글자는 대문자로 표기합니다. 
- body : 긴 설명이 필요한 경우에 작성합니다. 어떻게 했는지가 아니라, 무엇을 왜 했는지를 작성합니다. 최대 75자를 넘기지 않도록 합니다. 
    - 간단한 수정사항의 경우, 1줄만 작성해도 무방하다.
- footer : issue tracker ID를 명시하고 싶은 경우에 작성합니다.

2. Type
- 기능
    - Feat 새로운 기능을 추가할 경우
    - Fix 버그를 고친 경우 Design CSS 등 사용자 UI 디자인 변경 
    - !BREAKING CHANGE 커다란 API 변경의 경우 
    - !HOTFIX 급하게 치명적인 버그를 고쳐야하는 경우 
- 개선 
    - Style 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 
    - Refactor 프로덕션 코드 리팩토링 
    - Comment 필요한 주석 추가 및 변경 
- 기타
    - Docs 문서를 수정한 경우 
    - Test 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X) 
    - Chore 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X) 
    - Rename 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 
    - Remove 파일을 삭제하는 작업만 수행한 경우

3. Subject
    - 제목의 처음은 동사 원형으로 시작합니다.
    - 총 글자 수는 50자 이내로 작성합니다.
    - 마지막에 특수문자는 삽입하지 않습니다. 예) 마침표(.), 느낌표(!), 물음표(?)
    - 제목은 개조식 구문으로 작성합니다.
    - 영어로 작성하는 경우, 다음 규칙을 따릅니다.
        - 첫 글자는 대문자로 작성합니다.
        - "Fix", "Add", "Change"의 명령어로 시작합니다.
4. 본문
    - 본문은 한 줄 당 72자 내로 작성합니다.
    - 본문 내용은 양에 구애받지 않고 최대한 상세히 작성합니다.
    - 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 또는 왜 변경했는지를 설명합니다.

5. 꼬리말
- 꼬리말은 optional이고 이슈 트래커 ID를 작성합니다.
- 꼬리말은 "유형: #이슈 번호" 형식으로 사용합니다.
- 여러 개의 이슈 번호를 적을 때는 쉼표로 구분합니다.
- 이슈 트래커 유형은 다음 중 하나를 사용합니다.
    - Fixes: 이슈 수정중 (아직 해결되지 않은 경우)
    - Resolves: 이슈를 해결했을 때 사용
    - Ref: 참고할 이슈가 있을 때 사용
    - Related to: 해당 커밋에 관련된 이슈번호 (아직 해결되지 않은 경우)
- ex) Fixes: #45 Related to: #34, #23

6. 출처
    - https://overcome-the-limits.tistory.com/entry
    - 협업-협업을-위한-기본적인-git-커밋컨벤션-설정하기 [Plus Ultra]