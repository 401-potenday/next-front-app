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

[기술 스택](##-기술-스택)<br/>
[주요 구현 내용](##-주요-구현-내용)<br/>
[기능 소개](##-기능-소개)<br/>
[실행 방법](##-실행-방법)<br/>
[환경 변수 설정](##-환경-변수-설정)<br/>
[서버 개발 관련](##-서버-개발-관련)<br/>

<br />

## 기술 스택

|          분류           | 사용 기술                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :---------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          언어           | <img src='https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white' /> <img src='https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white' /> <img src='https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white' /> <img src='https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white' /> |
| 라이브러리 & 프레임워크 | <img src='https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white' /> <img src='https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' />                                                                                                                                                                                                                           |
|        상태 관리        | <img src='https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white' /> <img src='https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white' />                                                                                                                                                                                                                   |
|        버전 관리        | <img src='https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white' />                                                                                                                                                                                                                                                                                                                                      |
|      커뮤니케이션       | <img src='https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white' /> <img src='https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white' /> <img src='https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white' /> <img src='https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white' />                     |

<br/>

## 주요 구현 내용

### 공통 지도 컴포넌트
- `kakao-map-sdk`를 활용하여 위치 표기, 커스텀 아이콘, 클러스터링 등을 구현
- 재사용성을 고려한 모듈형 설계

### Toast 커스텀 훅
- `useToast` 훅으로 정보, 성공, 에러 등 상태에 따른 메시지 동적 관리
- 메시지 상태에 따라 아이콘, 스타일 변경 가능

### 소셜 로그인
- 소셜 로그인 후 인증 토큰을 받아 상태 관리 및 페이지 리디렉션 구현

<br/>

---

<br/>

## 기능 소개

### 소셜 로그인
- **Kakao**를 통한 간편 로그인
<img src="https://github.com/user-attachments/assets/0f7ab0b1-3e02-441b-b087-1cc5ec184b6e" alt="간편 로그인" width="300" />

### 홈화면
- 북마크 및 필터 기능을 활용하여 길고양이 정보를 탐색할 수 있습니다.
- 지도 뷰와 리스트 뷰를 지원합니다.

#### 지도 뷰
<img src="https://github.com/user-attachments/assets/374ef8b9-f258-4fa2-8a15-cc86f4505694" alt="홈화면_지도뷰_고양이 선택 O" width="300" />

#### 리스트 뷰
- **리스트뷰 empty 데이터 처리**
- **리스트뷰 무한 스크롤 지원**

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

<br/>

---

<br/>

## 실행 방법

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

## 환경 변수 설정

root 폴더에 `.env` 파일을 생성하고 다음과 같은 변수를 설정합니다:
```plaintext
NEXT_PUBLIC_KAKAO_API_KEY=your-kakao-api-key
```

<br />

---

<br />

## 서버 개발 관련

- [서버관련 문서](https://github.com/401-potenday/backend/blob/main/README.md)


<br />

---

<br />

이냥저냥 프론트엔드 프로젝트에 기여해주셔서 감사합니다! 🐾

<br />
<br />
<br />
<br />
