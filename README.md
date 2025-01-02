# 이냥저냥 프론트엔드 🐾

![표지](https://github.com/401-potenday/it-that-cat/assets/39180932/629b2f29-04b5-43cf-9178-2cabd31cb0a3)

이 레포지토리는 이냥저냥 서비스의 프론트엔드 코드를 포함하고 있습니다. 

<br/>

[🚀 배포 사이트](https://nyangnyang.co.kr/)

<br/>

## 📅 개발 기간

- MVP 기능 개발 : `2024.01.25` - `2024.02.04`
- 리팩토링 및 추가 기능 개발 : `2024.02.14` - `2024.10.19`

<br/>

## 📌 목차

- [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)<br/>
- [🔖 주요 구현 내용](#-주요-구현-내용)<br/>
- [✨ 기능 소개](#-기능-소개)<br/>
- [🕹️ 실행 방법](#%EF%B8%8F-실행-방법)<br/>
- [🧚‍♀️ 환경 변수 설정](#%EF%B8%8F-환경-변수-설정)<br/>
- [🖥️ 서버 개발 관련](#%EF%B8%8F-서버-개발-관련)<br/>

<br />

## 🛠️ 기술 스택

|          분류           | 사용 기술                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          언어           | <img src='https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white' /> <img src='https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white' /> <img src='https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white' /> <img src='https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' /> |
| 라이브러리 & 프레임워크 | <img src='https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' /> <img src='https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' />                                                                                                                                                                                                                           |
|        상태 관리        | <img src='https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white' /> <img src='https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white' />                                                                                                                                                                                                                   |
|        버전 관리        | <img src='https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white' />                                                                                                                                                                                                                                                                                                                                      |
|      커뮤니케이션       | <img src='https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white' /> <img src='https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white' /> <img src='https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white' /> <img src='https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white' />                     |

<br/>

## 🔖 주요 구현 내용

### 공통 지도 컴포넌트
- `kakao-map-sdk`를 활용하여 위치 표기, 커스텀 아이콘, 클러스터링 등을 구현
- 재사용성을 고려한 모듈형 설계

### Toast 커스텀 훅
- `useToast` 훅으로 정보, 성공, 에러 등 상태에 따른 메시지 동적 관리
- 메시지 상태에 따라 아이콘, 스타일 변경 가능

### 소셜 로그인
- 소셜 로그인 후 인증 토큰을 받아 상태 관리 및 페이지 리디렉션 구현

### 공통 Modal 커스텀 컴포넌트
- **다양한 모달 스타일 지원: variant 옵션을 통해 두 가지 모달 스타일을 지원**
  - Card Modal: 중앙에 표시되는 카드형 모달
  - Bottom Sheet Modal: 화면 하단에서 위로 올라오는 바텀 시트 스타일
- **다중 모달 관리**
  - Array 형태의 키 값을 사용하여 동시에 여러 모달을 관리할 수 있도록 설계
  - 모달의 상태와 키 값을 동적으로 바인딩하여 사용자가 여러 작업을 쉽게 처리할 수 있도록 함
- **재사용 가능 설계**
  - 다양한 화면 및 기능에서 동일한 로직으로 모달을 활용할 수 있도록 범용적인 구조로 구현

### 고양이 등록 및 상세 페이지 슬라이드
- **swiper 라이브러리 사용**
  - 사용자가 등록된 고양이의 사진을 쉽게 탐색하거나 추가 이미지를 확인할 수 있도록 슬라이드 컴포넌트를 구현
- **유연한 UI 제공**
  - 등록 과정에서 사용자 경험을 고려한 터치 제스처 및 애니메이션 효과 추가
  - 상세 페이지에서 슬라이드 기능을 통해 길고양이의 다양한 모습을 직관적으로 제공

### Tooltip 컴포넌트
- 사용자가 특정 UI 요소에 마우스를 올리거나 클릭했을 때 추가 정보를 제공하는 툴팁 컴포넌트를 제작
  - 예: 정보 아이콘 위에 툴팁을 표시하여 기능 설명 제공
- 동적 위치 조정
  - 상단, 하단 등의 방향 지원
- 재사용 가능한 설계
  - 다양한 요소에서 일관된 스타일로 동작하도록 설정
 
### NotFound 적용
- Next.js의 not-found 페이지 기능을 활용하여 사용자에게 유효하지 않은 페이지나 데이터를 요청했을 때 적절한 오류 메시지를 제공
- 데이터 요청 시 오류가 발생하면 커스텀 훅을 사용하여 NotFound 컴포넌트를 렌더링

<br/>

---

<br/>

## ✨ 화면 소개

### 소셜 로그인
- **Kakao**를 통한 간편 로그인
<img src="https://github.com/user-attachments/assets/0f7ab0b1-3e02-441b-b087-1cc5ec184b6e" alt="간편 로그인" width="300" />

### 홈화면
- 북마크 및 필터 기능을 활용하여 길고양이 정보를 탐색할 수 있습니다.
- 지도 뷰와 리스트 뷰를 지원합니다.

#### 지도 뷰
<img src="https://github.com/user-attachments/assets/374ef8b9-f258-4fa2-8a15-cc86f4505694" alt="홈화면_지도뷰_고양이 선택 O" width="300" />

#### 리스트 뷰
- **리스트뷰 무한 스크롤 지원**
- 데이터 예외 처리를 통해 다양한 UI 제공

<img src="https://github.com/user-attachments/assets/bb9d6939-aa66-4c48-bf1c-1ac7bb11ad7a" alt="홈화면_리스트뷰" width="300" />

### 새로운 길고양이 정보 등록
- **위치 등록**: 지도에서 클릭하여 길고양이 위치를 선택
- **상세 정보 등록**: 이름, 특징, 사진 등을 입력

<img src="https://github.com/user-attachments/assets/19345a6d-2e1d-4d5c-9918-6b684460e6b1" alt="새로운 길고양이 정보 등록" width="300" />

### 등록된 길고양이 상세 페이지
- 길고양이 정보 확인 및 댓글 작성

<img src="https://github.com/user-attachments/assets/56d3b22c-d0cc-4598-9029-a5c71e118d92" alt="길고양이 정보 확인" width="300" />
<img src="https://github.com/user-attachments/assets/d7809379-c41f-4fa6-a21f-2c4b2703f035" alt="댓글 확인" width="300" />

### **검색 기능**: 길고양이 이름 및 위치 기반 검색
- 한글 퍼지 검색을 추가하여 입력 받은 지역 명을 필터하여 하이라이팅

<img src="https://github.com/user-attachments/assets/a7b56681-473a-49aa-a025-08093b79b054" alt="한글 퍼지 검색" width="300" />
<img src="https://github.com/user-attachments/assets/4f194ef3-8f53-4a7b-b481-47aea4725e37" alt="검색" width="300" />

### **마이 페이지**
- 회원 정보 수정 및 탈퇴 지원
- 내가 등록한 냥이와 작성한 근황 소식 모아보기 가능

<img src="https://github.com/user-attachments/assets/84bbc5f0-587b-4144-97ba-aba6cf98843b" alt="마이페이지" width="300" />

### 기타 기능
- 게시글 신고 (신고 시 즉각 블라인드 처리, 관리자 확인 후 삭제 및 복구 처리)

<img src="https://github.com/user-attachments/assets/c6325b46-a49e-450c-b3a9-952f4f994a28" alt="게시글 신고" width="300" />

- 404 페이지

<img src="https://github.com/user-attachments/assets/4478516a-f063-440d-bf80-351463d64410" alt="404 페이지" width="300" />

- 로딩 화면
<img src="https://github.com/user-attachments/assets/0450ac5d-b743-4265-8eca-f97c837ee00d" alt="로딩" width="300" />

<br/>

---

<br/>

## 🕹️ 실행 방법

1. 저장소를 클론합니다.
   ```bash
   git clone https://github.com/401-potenday/it-that-cat.git
   ```

2. `it-that-cat` 디렉토리로 이동합니다.
   ```bash
   cd it-that-cat
   ```

3. 의존성을 설치합니다.
   ```bash
   npm install
   ```

4. 개발 서버를 시작합니다.
   ```bash
   npm run dev
   ```

5. 브라우저에서 `http://localhost:3000`으로 접속합니다.

<br/>

---

<br/>

## 🧚‍♀️ 환경 변수 설정

root 폴더에 `.env` 파일을 생성하고 다음과 같은 변수를 설정합니다:
```plaintext
NEXT_PUBLIC_KAKAO_API_KEY=your-kakao-api-key
```

<br />

---

<br />

## 🖥️ 서버 개발 관련

- [서버관련 문서](https://github.com/401-potenday/backend/blob/main/README.md)


<br />

---

<br />

이냥저냥 프론트엔드 프로젝트에 기여해주셔서 감사합니다! 🐾

<br />
<br />
<br />
<br />
