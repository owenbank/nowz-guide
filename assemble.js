// 섹션 스크립트(sections/*.js)가 채워둔 window.SECTIONS를 순서대로 <main>에 조립한다.
// app.js/search.js가 document.querySelectorAll('.section')을 읽기 전에 실행되어야 하므로
// index.html에서 반드시 sections/*.js 다음, app.js 이전에 로드한다.
(function () {
  const ORDER = ["signup","member","enroll","student","dashboard","message","weekly","book","program","exam","test","score","studyroom","cost"];
  const TITLES = {
    signup: "회원가입", member: "구성원 관리", enroll: "등록관리", student: "학생관리",
    dashboard: "대시보드", message: "메시지", weekly: "주간보고", book: "교재 관리",
    program: "프로그램 관리", exam: "시험지 관리", test: "테스트 관리", score: "성적 관리",
    studyroom: "공부방 관리", cost: "비용 관리"
  };
  const main = document.querySelector('main.main');
  const missing = [];
  ORDER.forEach(id => {
    const html = window.SECTIONS && window.SECTIONS[id];
    if (!html) { missing.push(id); return; }
    const sec = document.createElement('section');
    sec.className = 'section';
    sec.id = id;
    sec.dataset.title = TITLES[id];
    sec.innerHTML = html;
    main.appendChild(sec);
  });
  if (missing.length) console.error('섹션 콘텐츠 누락:', missing.join(', '));
})();
