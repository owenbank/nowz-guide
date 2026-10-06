# NOWZ 사용가이드 — 분리본 (v2 준비용)

원본(단일 index.html, 17MB)을 요소별로 분리한 버전입니다. 화면·기능은 원본과 동일합니다.

## 구조
```
guide/
├── index.html      # 마크업 뼈대 (43KB, 이미지·CSS·JS는 아래 파일 참조)
├── styles.css      # 전체 스타일
├── app.js          # 네비게이션 / showPage / 아코디언 / 로고 클릭 등
├── search.js       # 검색 엔진 (초성·다중키워드·동의어·랭킹)
└── assets/         # 이미지 (base64 → png 파일, 섹션별 폴더)
    ├── signup/  member/  enroll/  student/  ...
```

## 사용
- 로컬: `guide/index.html`을 브라우저로 그대로 열면 됩니다.
- 서버/깃허브: 폴더 통째로 올리면 상대경로(assets/…, styles.css, app.js, search.js)로 동작합니다.

## 장점 (분리 이유)
- 파일 17MB → 43KB. 수정·협업·버전관리 쉬움.
- 이미지가 실제 파일이라 **저해상 교체가 간단**: 해당 png를 2x(고해상)로 덮어쓰기만 하면 끝.
- CSS/JS 분리로 유지보수 편함. 나중에 정적사이트(Docusaurus 등)나 React로 이전도 수월.

## 이미지 교체 방법 (예: 저해상 송금 이미지)
1. 해당 화면의 png 파일을 `assets/<섹션>/` 에서 찾음 (파일명은 섹션_순번).
2. 같은 파일명으로 2x 고해상 png를 덮어쓰기.
3. 끝. (index.html 수정 불필요 — 경로 그대로)
