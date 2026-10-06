window.SECTIONS = window.SECTIONS || {};
window.SECTIONS["student"] = `
      <h1 class="page">학생관리</h1>
      <p>등록된 학생을 한눈에 보고, 학생을 선택하면 그 학생의 모든 것을 관리하는 상세 화면으로 들어갑니다. 상세 화면은 프로필·생활·학습·상담·리포트 영역으로 나뉩니다.</p>
      <h2 class="h2">학생 리스트</h2>
      <h3 class="h3">학생 리스트</h3>
      <div class="shot"><img decoding="async" width="1440" height="810" src="assets/student/student_01.png" alt="학생관리 리스트 — 검색·전화·메시지·G3 점수·소속·페널티"></div>
      <p>학생 리스트에서는 학생을 검색하고, 각 학생의 <b>전화·메시지·행동기록 입력</b>을 할 수 있습니다. 리스트에는 성별·나이·생년월일·전화번호·<b>G3 점수(지난달 대비 증감)</b>·소속·페널티가 함께 표시됩니다.</p>
      <h3 class="h3">학생 프로필 카드</h3>
      <div class="shot"><img decoding="async" width="1440" height="810" src="assets/student/student_02.png" alt="학생 상세 — 프로필 카드·케어 탭·일간 체크리스트·혜택 및 페널티"></div>
      <p>학생을 클릭하면 <b>학생 상세 화면</b>으로 들어갑니다. 좌측 <b>프로필 카드</b>의 오른쪽 위 아이콘에서 전화·메시지·학생 정보 관리를 할 수 있고, <b>미완료 체크리스트·미완료 과제</b> 건수와 케어 상담 리포트를 한눈에 볼 수 있습니다.</p>
      <h3 class="h3">전화와 메시지 사용</h3>
      <div class="shot"><img decoding="async" width="1572" height="864" src="assets/student/student_03.png" alt="학생 프로필 카드 · 전화 · 메시지 플로팅 창"></div>
      <p>프로필 카드의 전화 아이콘 또는 메시지 아이콘을 누르면 학생과 다양한 방식으로 통신할 수 있어요. 전화와 메시지 모두 작은 웹 페이지 내의 <b>플로팅 창</b>으로 뜨기 때문에 다른 작업과 동시에 사용할 수 있어요.</p>
      <h3 class="h3">학생 정보 관리</h3>
      <div class="shot fl"><img decoding="async" width="1572" height="880" style="width:100%" src="assets/student/student_04.png" alt="학생 정보 관리 — 개인정보 · 등원 정보 · 계좌 관리"></div>
      <p>프로필 카드 가장 오른쪽 끝의 <b>수정 버튼</b>을 누르면 개인정보·등원정보·계좌관리를 할 수 있어요.</p>
      <p class="tip"><span class="lbl">참고</span><span><b>개인정보</b> — 학생의 기본 정보를 관리하고, 비상연락망을 추가하거나 특이사항을 기록할 수 있어요.</span></p>
      <p class="tip"><span class="lbl">참고</span><span><b>등원정보</b> — 소속과 담당 매니저를 설정하고 등원 요일·시간을 설정할 수 있어요. (등원 시간을 설정해야 학생의 등원 상태를 알 수 있어요.)</span></p>
      <p class="tip"><span class="lbl">참고</span><span><b>계좌관리</b> — 학생 용돈 계좌를 등록할 수 있어요.</span></p>
      <h3 class="h3">ZPT 관리</h3>
      <div class="shot"><img decoding="async" width="925" height="616" style="width:70%;margin-inline:auto" src="assets/student/student_05.png" alt="ZPT 카드 → 포인트 내역 (차감·지급)"></div>
      <p>ZPT는 학생에게 보상으로 지급되는 포인트예요. 프로필 카드 하단의 <b>ZPT 카드</b>를 클릭하면 포인트 발급 내역을 볼 수 있고, 포인트 내역 화면에서 포인트를 직접 <b>차감</b>하거나 <b>지급</b>할 수 있습니다.</p>
      <h2 class="h2">플래너 및 관찰일지</h2>
      <p>해당 영역의 날짜를 클릭하면 날짜를 이동하거나 관찰일지·플래너를 볼 수 있으며, 플래너 승인 또는 일일 피드백을 할 수 있습니다.</p>
      <div class="shot bleedbottom"><img decoding="async" width="1647" height="366" src="assets/student/student_06.png" alt="학생 상세 상단 — 날짜 이동 · 관찰일지 보기 · 플래너 보기 · 귀가 검사"></div>
      <h3 class="h3">플래너 조회</h3>
      <div class="shot"><img decoding="async" width="1486" height="718" src="assets/student/student_07.png" alt="플래너 — 승인 전(계획)과 승인 후(실제 일정)"></div>
      <p>플래너 <b>승인 전</b>에는 학생의 오늘 계획을, <b>승인 후</b>에는 계획과 비교할 수 있는 실제 하루 일정을 확인할 수 있어요.</p>
      <details class="case"><summary>학습에서 플래너를 생성할 수 없는 경우<span class="chev">▾</span></summary><div class="cbody"><p class="tight">학생이 학습 플래너를 사용하려면 <b>교재 등록</b>과 <b>주간계획</b>이 모두 준비되어 있어야 합니다. 둘 중 하나라도 빠지면 학생 앱 학습 탭에는 플래너 대신 ‘아직 플래너가 없어요’ 화면만 표시됩니다.</p><p class="tight">교재는 등록됐지만 주간계획이 없을 때는 ‘플래너 생성’ 버튼과 함께 ‘작성된 주간계획이 없습니다 · 매니저에게 요청해주세요’ 안내가 나타나고, 교재부터 등록되지 않았을 때는 별도 안내 없이 빈 화면만 보입니다.</p><div class="okbox"><span class="ico">✓</span><span>학습 관리를 받는 학생이라면, 매니저가 <b>교재를 등록하고 주간계획까지 만들어</b> 주어야 플래너가 정상적으로 생성됩니다.</span></div><div class="shot bare"><img decoding="async" width="1508" height="1014" src="assets/student/student_08.png" alt="학생 모바일 — 교재/주간계획 유무에 따른 플래너 없음 화면"></div></div></details>
      <h3 class="h3">관찰일지 조회</h3>
      <div class="shot fl"><img decoding="async" width="1677" height="926" style="width:100%" src="assets/student/student_09.png" alt="관찰 일지 → 회의록 작성"></div>
      <p>보호자가 학생의 전날 관찰일지를 업데이트하면, 매니저는 이 화면에서 보호자가 작성한 관찰일지를 확인할 수 있습니다. 화면을 보고 간단히 메모할 내용을 <b>회의록</b>에 작성하거나 매니징 방향을 적어 둘 수 있습니다.</p>
      <h2 class="h2">생활 관리</h2>
      <p>학생 상세 화면에서 생활에 관련된 규칙을 생성할 수 있습니다. 매일 루틴화하여 생성하는 <b>일간 체크리스트</b>와, 그 수행률을 보조하는 장치인 <b>혜택 및 페널티</b>를 관리할 수 있습니다.</p>
      <h3 class="h3">체크리스트 카테고리 이해하기</h3>
      <p>체크리스트는 카테고리별로 매니저가 설정하는 항목과 인증 지표가 다르며, 입력된 지표는 <b>G3 리포트 점수 산출</b>에 쓰입니다.</p>
      <div class="tablewrap"><table><thead><tr><th class="k">카테고리</th><th>매니저 설정 항목</th><th>G3 산출방식</th></tr></thead><tbody><tr><td class="k">부모님께 예의</td><td>문자열</td><td>행동기록</td></tr><tr><td class="k">준법정신</td><td>문자열</td><td>행동기록</td></tr><tr><td class="k">취침</td><td>시각</td><td>체크리스트</td></tr><tr><td class="k">기상</td><td>시각</td><td>체크리스트</td></tr><tr><td class="k">외출 및 귀가 습관</td><td>시각</td><td>체크리스트</td></tr><tr><td class="k">방 및 공간 정리</td><td>문자열</td><td>체크리스트</td></tr><tr><td class="k">위생 및 청결 습관</td><td>횟수(샤워/양치)</td><td>체크리스트</td></tr><tr><td class="k">식사 습관</td><td>문자열</td><td>평가</td></tr><tr><td class="k">휴대폰·인터넷 사용</td><td>시간</td><td>체크리스트</td></tr><tr><td class="k">학교 출결</td><td>시각</td><td>체크리스트</td></tr><tr><td class="k">센터 출석</td><td>시각</td><td>체크리스트</td></tr><tr><td class="k">센터 체류시간</td><td>시간</td><td>자동 계산</td></tr><tr><td class="k">대화 예절 습관</td><td>문자열</td><td>평가</td></tr><tr><td class="k">감정 조절</td><td>문자열</td><td>평가</td></tr><tr><td class="k">학습 시간</td><td>시간</td><td>자동 계산</td></tr><tr><td class="k">자기 계발</td><td>문자열</td><td>평가</td></tr><tr><td class="k">독서</td><td>문자열</td><td>평가</td></tr><tr><td class="k">운동</td><td>문자열</td><td>체크리스트</td></tr><tr><td class="k">기타</td><td>문자열</td><td>—</td></tr></tbody></table></div>
      <h3 class="h3">일간 체크리스트</h3>
      <div class="shot"><img decoding="async" width="1403" height="664" style="width:97%;margin-inline:auto" src="assets/student/student_10.png" alt="일간 체크리스트 → 체크리스트 추가"></div>
      <p>체크리스트를 추가하면 오른쪽에 입력 창이 뜹니다. 여기서 카테고리·시간·보상·인증방식을 설정해 매니징을 더 효과적으로 할 수 있습니다.</p>
      <p class="tip"><span class="lbl">참고</span><span>보상을 추가해서 학생의 체크리스트 <b>달성률</b>을 높여 봐요.</span></p>
      <p class="tip"><span class="lbl">참고</span><span>인증방식을 추가해서 학생의 체크리스트 <b>인증도</b>를 높여 봐요.</span></p>
      <h3 class="h3">일간 체크리스트 승인</h3>
      <div class="shot fl fr"><img decoding="async" width="1776" height="926" style="width:100%" src="assets/student/student_11.png" alt="인증 확인 · 지표 입력 → G3 점수 산출"></div>
      <p>체크리스트 승인 시 입력하는 지표를 모아 학생의 <b>G3 리포트 점수</b>를 산출합니다.</p>
      <h3 class="h3">체크리스트 수정·삭제</h3>
      <p>인증 확인 패널에서 규칙정보 오른쪽의 <b>연필(수정)·휴지통(삭제)</b> 아이콘으로 체크리스트를 고치거나 지울 수 있습니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="935" src="assets/student/checklist_panel.png" alt="인증 확인 패널 — 규칙정보 옆 수정·삭제 아이콘"></div>
      <p class="tip"><span class="lbl">참고</span><span><b>미실시</b> 상태가 아니면(승인요청·완료·미달성) 아이콘을 눌러도 안내만 뜨고 아무것도 열리지 않습니다. 고칠 수 있는 건 미실시 상태뿐입니다.</span></p>
      <p>미실시 상태에서 <b>패널 우상단의 수정 아이콘</b>을 누르면 범위를 먼저 고릅니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="1022" src="assets/student/checklist_range.png" alt="범위 선택 — 이 체크리스트만 / 모든 체크리스트"></div>
      <ul class="blist">
        <li><b>이 체크리스트만</b> — 그 항목 하나만 바뀝니다.</li>
        <li><b>모든 체크리스트</b> — 미실시 항목과 앞으로 생성될 반복 항목까지 바뀝니다.</li>
      </ul>
      <details class="case"><summary>수정 폼 — ‘이 체크리스트만’과 ‘모든 체크리스트’의 차이<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight"><b>이 체크리스트만 수정</b> — 요일 선택 칸이 없습니다.</p>
        <div class="shot bare"><img decoding="async" width="1508" height="980" src="assets/student/checklist_form_thisonly.png" alt="이 체크리스트만 수정 — 요일 선택 없음"></div>
        <p class="tight"><b>모든 체크리스트 수정</b> — 요일 선택 칸이 추가로 있습니다. 여기서 고른 요일에 맞춰 앞으로의 항목이 다시 생성됩니다.</p>
        <div class="shot bare"><img decoding="async" width="1508" height="980" src="assets/student/checklist_form_all.png" alt="모든 체크리스트 수정 — 요일 선택 있음"></div>
        <div class="okbox"><span class="ico">✓</span><span><b>카테고리는 못 바꿉니다.</b> ‘반복없음’은 켜고 끄는 스위치가 아니라 요일 목록 안의 항목 하나라, 반복없음을 고르지 않아도 여러 요일을 한꺼번에 고를 수 있습니다.</span></div>
      </div></details>
      <h3 class="h3">체크리스트 삭제할 때</h3>
      <p>삭제도 같은 범위 선택을 거칩니다. <b>이 체크리스트만</b>은 미실시 상태에서만 되고, <b>모든 체크리스트</b>는 반복 여부에 따라 확인 문구가 다릅니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="1022" src="assets/student/checklist_delete_confirm.png" alt="모든 체크리스트 삭제 2차 확인 — 반복 있음"></div>
      <ul class="blist">
        <li><b>반복 있는 체크리스트</b> — “모든 체크리스트를 삭제하시겠습니까? 미실시 항목과 이후 반복이 삭제됩니다.”</li>
        <li><b>반복 없는 체크리스트</b> — “모든 체크리스트를 삭제하시겠습니까? 미실시 항목이 삭제됩니다.” (미실시 항목이 있을 때만 눌립니다)</li>
      </ul>
      <details class="case"><summary>미실시가 아닌 상태에서 고치려 하면<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight">이미 결과가 난 항목은 어느 쪽으로도 손댈 수 없습니다. <b>패널 우상단의 수정·삭제 아이콘</b>을 눌러도 상태에 맞는 안내만 뜹니다.</p>
        <div class="shot bare"><img decoding="async" width="1508" height="980" src="assets/student/checklist_blocked_alert.png" alt="승인요청 체크리스트는 수정이 불가합니다"></div>
        <ul class="blist">
          <li><b>수정 시도</b> — “승인요청 체크리스트는 수정이 불가합니다” / “완료한 체크리스트는 수정이 불가합니다”</li>
          <li><b>삭제 시도</b> — “승인요청 체크리스트는 삭제가 불가합니다” / “완료한 체크리스트는 삭제가 불가합니다”</li>
        </ul>
        <p class="tip"><span class="lbl">참고</span><span><b>미달성</b> 상태는 <b>완료</b>와 같이 취급되어 같은 안내 문구가 뜹니다.</span></p>
      </div></details>
      <h3 class="h3">혜택 및 페널티 규칙 추가</h3>
      <div class="shot"><img decoding="async" width="1400" height="664" style="width:97%;margin-inline:auto" src="assets/student/student_12.png" alt="혜택 및 페널티 → 규칙 추가"></div>
      <p>혜택 및 페널티 규칙을 생성해 체크리스트의 수행도를 높일 수 있습니다. 입력 항목은 다음과 같습니다.</p>
      <p class="tip"><span class="lbl">참고</span><span><b>항목</b> — 혜택 또는 페널티를 선택합니다.</span></p>
      <p class="tip"><span class="lbl">참고</span><span><b>내용</b> — 어떤 상황에서 적용되는지 텍스트로 적습니다. (예: 용돈 체크리스트 3회 어길 시)</span></p>
      <p class="tip"><span class="lbl">참고</span><span><b>종료일</b> — 규칙을 언제까지 유지할지 종료일을 선택합니다.</span></p>
      <p class="tip"><span class="lbl">참고</span><span><b>혜택/페널티</b> — 규칙을 지키거나 안 지키면 어떤 혜택/페널티를 적용하는지 적습니다.</span></p>
      <h3 class="h3">혜택 및 페널티 규칙 관리</h3>
      <div class="shot"><img decoding="async" width="1494" height="620" src="assets/student/student_13.png" alt="규칙 기록 (달력·기록 추가·집행)"></div>
      <p>좌측 달력에서 날짜별 기록·집행 여부를 확인할 수 있습니다. 규칙 자체를 수정하거나 삭제할 수 있고, <b>기록 추가</b>로 규칙을 지키거나 어긴 내역을 남길 수 있습니다. 정해진 횟수를 초과하면 <b>혜택/페널티 기록을 추가해 집행</b>할 수 있으며, 집행하면 리스트의 현황이 <b>0회로 초기화</b>되어 노출됩니다.</p>
      <p class="tip"><span class="lbl">참고</span><span>발생 횟수는 매니저가 직접 입력하며, 횟수가 찼다고 혜택/페널티가 자동 집행되지는 않습니다. 이행은 매니저가 별도로 기록합니다.</span></p>
      <details class="case"><summary>자녀가 앱을 사용하지 않을 때 (직접 체크 모드)<span class="chev">▾</span></summary><div class="cbody"><p class="tight">자녀가 앱을 사용하지 않는 경우, 학부모 앱에서 <b>직접 체크 모드</b>로 전환하면 <b>일간 체크리스트</b>와 <b>혜택 및 페널티</b>를 학부모가 가정에서 직접 관리할 수 있습니다.</p><ol class="flist"><li>학부모 앱에서 <b>일반 모드 → 직접 체크 모드</b>로 변경합니다.</li><li>오늘의 현황에서 <b>일간 체크리스트·혜택 및 페널티</b>를 학부모가 직접 체크합니다.</li></ol><div class="okbox"><span class="ico">✓</span><span>규칙 <b>생성은 매니저</b>가, <b>관리(체크)는 학부모</b>가 하는 형태입니다.</span></div><div class="shot bare"><img decoding="async" width="1776" height="924" src="assets/student/student_14.png" alt="학부모 앱 — 모드 변경 · 오늘의 현황 · 혜택/페널티"></div></div></details>

      <h2 class="h2">학습 관리</h2>
      <h3 class="h3">학습 시간</h3>
      <div class="shot"><img decoding="async" width="1610" height="533" src="assets/student/student_15.png" alt="학습 — 일간·주간 학습시간 (자습시간만 보기)"></div>
      <p>학습 탭에서 학생의 학습시간을 확인할 수 있습니다. 우측 상단의 <b>‘자습시간만 보기’</b>를 켜면 프로그램·시험 시간을 제외한 실제 <b>순공 시간</b>만 볼 수 있습니다.</p>
      <h3 class="h3">학습 일정</h3>
      <div class="shot"><img decoding="async" width="1600" height="338" src="assets/student/student_16.png" alt="학습 일정 — 시간·현황·분류·일정명·매니저"></div>
      <p>일정 카드에서 학생의 학습 일정을 확인할 수 있습니다. 프로그램과 프로그램 피드백을 함께 볼 수 있습니다.</p>
      <h3 class="h3">오늘의 과제</h3>
      <div class="shot"><img decoding="async" width="1600" height="403" src="assets/student/student_17.png" alt="오늘의 과제 · 밀린 과제 — 유형·과목·교재·목표량·달성량·상태"></div>
      <p><b>‘오늘의 과제’</b>에서는 오늘 학생이 계획한 과제를, <b>‘밀린 과제’</b>에서는 부분완료·미완료된 지난 과제를 확인할 수 있습니다.</p>
      <p class="subh">주간 계획 관리</p>
      <div class="shot"><img decoding="async" width="1600" height="960" src="assets/student/student_18.png" alt="주간 계획 관리 — 교재별 요일 목표량 설정"></div>
      <p>상단의 <b>‘주간계획 관리’</b> 버튼을 클릭하면 학생에게 과제를 내줄 수 있습니다. <b>프로그램 과제</b>는 프로그램 내 학습관리 매니저가 내준 과제로, 리스트를 누르면 과제 기한과 범위를 확인할 수 있습니다. <b>‘주간 계획 일괄작성’</b>에서 전체 페이지 수를 입력 후 저장하면 요일별로 자동 배분됩니다. <b>‘교재 관리’</b> 탭에서는 과제를 추가할 교재를 등록하며, 교재를 중단하거나 완료로 이동·추가할 수 있습니다.</p>
      <div class="shot"><img decoding="async" width="1321" height="368" src="assets/student/student_19.png" alt="프로그램 과제 — 교재·과제 범위·기한"></div>
      <p class="tight"><b>프로그램 과제</b> — 프로그램 내 학습관리 매니저가 내준 과제로, 리스트를 누르면 기한·범위를 확인할 수 있어요.</p>
      <div class="shot fl fb"><img decoding="async" width="1644" height="574" style="width:100%" src="assets/student/student_20.png" alt="주간 계획 일괄작성 — 전체 페이지 입력 시 요일별 자동 배분"></div>
      <p class="tight"><b>주간 계획 일괄작성</b> — 전체 페이지 수를 입력하면 요일별로 균등하게 자동 배분돼요.</p>
      <div class="shot fb"><img decoding="async" width="1200" height="588" style="width:83%;margin-inline:auto" src="assets/student/student_21.png" alt="교재 관리 — 진행중·중단·완료 교재"></div>
      <p class="tight"><b>교재 관리</b> — 과제에 쓸 교재를 먼저 등록하고, 진행중·중단·완료로 옮길 수 있어요.</p>
      <p class="tip"><span class="lbl">참고</span><span>과제에 쓸 교재는 <b>교재 관리</b> 탭에서 먼저 등록되어 있어야 추가할 수 있습니다.</span></p>
      
      <h3 class="h3">일정 관리</h3>
      <div class="shot fb"><img decoding="async" width="1600" height="1652" style="width:100%" src="assets/student/student_22.png" alt="일정 — 주간 시간표(과목별 색상)"></div>
      <p>일정 탭에서 학생의 일정을 한 번에 볼 수 있고, 추가·삭제할 수 있습니다. 단, 프로그램이나 시험 일정은 이 화면이 아니라 <b>프로그램 관리·시험 관리</b> 화면에서 삭제합니다.</p>
      <p class="tip"><span class="lbl">참고</span><span>담당학생이 여럿이거나 센터 전체 일정이면 이 화면에서 열리지 않고, <b>대시보드</b>에서만 고칠 수 있습니다.</span></p>
      <h3 class="h3">반복 일정 고치기</h3>
      <div class="shot bare"><img decoding="async" width="1004" height="544" src="assets/dashboard/schedule_range_select.png" alt="반복 일정 고치기 — 이 일정만 수정 / 전체 반복 일정 수정 범위 선택"></div>
      <p>반복 일정은 수정하거나 지우기 전에 범위를 먼저 묻습니다. 이 일정만 고치면 그 날 하루만 바뀌고, 전체 반복 일정을 고치면 반복 규칙 자체가 바뀝니다.</p>
      <details class="case"><summary>‘이 일정만 수정’과 ‘전체 반복 일정 수정’의 차이<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight"><b>이 일정만 수정</b> — 선택한 그 날짜의 일정만 바뀌고, 나머지 반복 일정은 그대로 유지됩니다.</p>
        <div class="shot bare"><img decoding="async" width="1004" height="1348" src="assets/dashboard/schedule_edit_thisonly.png" alt="이 일정만 수정 — 해당 날짜만 변경"></div>
        <p class="tight"><b>전체 반복 일정 수정</b> — 반복 규칙 자체가 바뀌어, 이후 생성되는 회차 전부에 적용됩니다.</p>
        <div class="shot bare"><img decoding="async" width="1004" height="1860" src="assets/dashboard/schedule_edit_all.png" alt="전체 반복 일정 수정 — 반복 규칙 변경"></div>
        <div class="confirm"><span class="ico">!</span><span>전체 반복 일정을 수정해도 이미 지난 회차와 지금 진행 중인 회차는 바뀌지 않습니다. 앞으로 올 회차부터 적용됩니다. 삭제도 같은 규칙을 따릅니다.</span></div>
      </div></details>
      <h3 class="h3">일일 피드백</h3>
      <p>하루가 끝나면 그 날의 체크리스트·학습 기록이 <b>일일 피드백</b>으로 모입니다. 매니저가 직접 닫는 <b>정상 마감</b>과, 24:00이 지나면 저절로 닫히는 <b>자동 마감</b> 두 가지가 있습니다.</p>
      <p class="tip"><span class="lbl">참고</span><span>학생이 남긴 오늘의 응답 내용은 <b>자기인식 응답</b>에도 함께 노출됩니다.</span></p>
      <div class="shot bare"><img decoding="async" width="1572" height="1022" src="assets/student/feedback_daily_auto.png" alt="일일 피드백 · 자동 마감 — 미지급 용돈·체크리스트·피드백 입력"></div>
      <p>상단에 <b>마감 유형과 시각</b>(예: 자동 마감 · 8월 13일 (월) 24:00)이 표시되고, 자동 마감이면 “자동으로 마감된 일자입니다. 용돈 송금은 관리자만 가능합니다.” 안내줄이 함께 뜹니다. 지급 항목 영역은 자동 마감이면 <b>미지급 용돈</b>, 정상 마감이면 <b>‘[날짜] 지급’</b>으로 제목이 다르며, <b>ZPT·용돈·재량지급·지연 완료</b> 네 항목으로 나뉩니다. <b>지연 완료</b>는 인증 확인에서 지연달성으로 승인된 금액이 합산되는 항목입니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="1138" src="assets/student/feedback_daily_reference.png" alt="학생 모바일 오늘의 질문 → 일일피드백 확인 매니저 자기인식 응답 → 용돈지급 매니저"></div>
      <ol class="flist">
        <li>학생이 일일 피드백 요청을 보내면 오늘의 질문에 응답하게 됩니다.</li>
        <li>학생이 응답한 내용은 자기인식 응답에 노출이 됩니다.</li>
        <li>매니저는 좌측에 있는 AI일일 리포트 요약과 우측의 오늘 수행한 내용을 보고 일일 피드백을 적습니다. 이 과정에서 보상을 추가로 줄 수 있습니다.</li>
        <li>피드백을 적고 승인 후엔 학생에게 총 지급되는 보상을 확인 후 완료하면 자동 송금을 합니다.</li>
      </ol>
      <p>일일 피드백은 <b>매니저가 그날 안에 마감하는 것이 원칙</b>입니다. 학생이 일일 피드백을 요청하지 않았거나, 운영 시간 밖에 요청했거나, 매니저가 놓친 날은 <b>자동 마감</b>되며, 이때 체크리스트 용돈은 지급되지 않고 <b>지급 대기</b>로 남습니다. 자동 마감은 아래 조건에 모두 맞는 학생에게 적용됩니다.</p>
      <ul class="blist">
        <li><b>정상 등록된 활성 학생</b> — 계정이 활성이고 탈퇴·삭제되지 않았으며, 소속 팀이 삭제되지 않고 가족 그룹의 초대가 완료된 상태입니다.</li>
        <li><b>그날 휴무가 없는 학생</b> — 휴가·병가·특별 휴가 일정이 있는 날은 제외됩니다.</li>
        <li><b>등원 설정이 맞는 학생</b> — 그 요일에 등원이 설정돼 있거나, 등원 설정 없이 운영되는 학생입니다.</li>
      </ul>
      <p class="tip"><span class="lbl">참고</span><span>마감되면 <b>미달성 항목만, 한 번만</b> 고칠 수 있습니다. 이미 달성 처리된 항목은 되돌릴 수 없습니다.</span></p>
      <h3 class="h3">마감 놓친 날 확인하기</h3>
      <p>마감을 놓친 날이 있으면 학생 상세 아래에 알럿이 늘 떠 있습니다.</p>
      <div class="shot bare"><img decoding="async" width="1370" height="228" src="assets/student/feedback_alert.png" alt="마감 누락 일일 피드백 3일 — 확인하기"></div>
      <p><b>확인하기</b>를 누르면 밀린 날짜와 경과일 목록이 뜨고, 날짜를 누르면 그 날 일일 피드백으로 이동합니다.</p>
      <div class="shot bare"><img decoding="async" width="1000" height="704" src="assets/student/feedback_list.png" alt="마감 누락 일일 피드백 목록 — 날짜·경과일"></div>
      <p class="tip"><span class="lbl">참고</span><span>매니저가 여기서 할 수 있는 건 놓친 날을 확인하고 그 날로 이동하는 것뿐입니다. 이동한 뒤 <b>미달성 항목 수정</b>과 <b>지연달성 승인</b>은 매니저가 할 수 있지만, 자동 마감된 날의 <b>최종 마감 확정과 송금</b>은 <b>관리자 화면</b>에서만 처리됩니다.</span></p>
      <h3 class="h3">지연달성 승인하기</h3>
      <p>마감된 날 뒤늦게 인증이 올라온 항목은 <b>승인 요청</b> 줄이 됩니다. 그 줄을 누르면 인증 확인 패널에서 <b>달성·지연달성·미달성</b> 중 하나로 승인 여부를 정합니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="1022" src="assets/student/feedback_verify_auto.png" alt="인증 확인 — 지표 입력 · 승인 여부 · 지급액"></div>
      <ul class="blist">
        <li><b>정상 마감 · 지급액 있음</b> — 확인을 누르면 송금 창이 뜹니다. 비밀번호까지 넣어야 그 자리에서 돈이 나갑니다.</li>
        <li><b>정상 마감 · 0원</b> — 창 없이 승인만 되고 끝납니다.</li>
        <li><b>자동 마감</b> — 창 없이 승인만 되고, 지급은 관리자 화면에서 처리되는 <b>지급 대기</b> 상태가 됩니다.</li>
      </ul>
      <div class="shot bare"><img decoding="async" width="1572" height="1022" src="assets/student/feedback_payment.png" alt="체크리스트 달성 송금 — 입금 계좌·지급 내역·비밀번호"></div>
      <p><b>정상 마감 · 지급액 있음</b>일 때 뜨는 송금 창입니다. <b>입금 계좌 정보</b>와 <b>지급 내역</b>(용돈 금액)이 표시되고, <b>비밀번호</b>를 넣고 완료를 누르면 그 자리에서 바로 송금이 실행됩니다.</p>
      <details class="case"><summary>정상 마감 · 0원이거나 자동 마감이면<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight">이 송금 창 없이 승인만 처리됩니다. <b>정상 마감 · 0원</b>은 지급액이 없어 그대로 끝나고, <b>자동 마감</b>은 지급액이 있어도 <b>지급 대기</b> 상태로만 남아 관리자 화면에서 나중에 송금을 처리합니다.</p>
      </div></details>
      <details class="case"><summary>마감된 날 미달성 항목을 고치려 하면<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight">마감된 날의 상태를 바꾸기 전에 한 번 더 확인합니다. 되돌릴 수 없기 때문입니다.</p>
        <div class="shot bare"><img decoding="async" width="1508" height="980" src="assets/student/feedback_checklist_confirm.png" alt="체크리스트 승인 — 달성으로 바꾸시겠습니까? 이 작업은 되돌릴 수 없습니다."></div>
      </div></details>
      <details class="case"><summary>승인 요청이 남아있는데 정상 마감을 누르면<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight">처리하지 않은 승인 요청이 하나라도 남아 있으면 그 날은 정상 마감되지 않습니다.</p>
        <div class="shot bare"><img decoding="async" width="1508" height="980" src="assets/student/feedback_toast_blocked.png" alt="처리하지 않은 항목이 있습니다."></div>
      </div></details>
      <h2 class="h2">학생 상담</h2>
      <div class="shot"><img decoding="async" width="1600" height="900" src="assets/student/student_24.png" alt="학생 상담 — 상담 탭 · 직접 입력/음성 업로드"></div>
      <p>학생 상담은 학생 상세의 <b>상담 탭</b>에서 기록할 수 있습니다. 오른쪽 위 <b>'상담 기록' 버튼</b>을 누르면 기록 방식(직접 입력/음성 첨부)을 선택하는 창이 뜹니다. <b>음성 파일</b>을 첨부하면 바로 상담이 생성되고, 요약이 끝나면 확인할 수 있습니다. 음성 파일로 생성된 스크립트는 수정할 수 있습니다.</p>
      <h2 class="h2">리포트</h2>
      <p>리포트는 <b>생활·학습·G3</b> 탭으로 나뉘며, 상단에서 기간을 조정해 최근 동향을 확인할 수 있습니다.</p>
      <h3 class="h3">생활</h3>
      <div class="shot fl fr fb"><img decoding="async" width="1749" height="980" style="width:112%;max-width:112%" src="assets/student/student_25.png" alt="리포트 생활 — AI 종합 분석 · 기상취침/등원하원/컨디션 패턴"></div>
      <p>생활 탭에서는 생활 관련 내용을 조회합니다. <b>AI 분석 리포트</b>를 생성하면 학생의 생활 요약과 매니징 가이드를 확인할 수 있습니다.</p>
      <div class="shot"><img decoding="async" width="1321" height="488" src="assets/student/student_26.png" alt="생활 관리 카테고리별 현황 — 카테고리 상세·AI 맞춤형 가이드"></div>
      <p class="tip"><span class="lbl">참고</span><span>하단 <b>‘생활 관리 카테고리별 현황’</b>에서 각 카테고리별 상세를 보고, 같은 카테고리 내 어떤 체크리스트의 수행률이 낮은지 확인하고 맞춤형 가이드로 개선 팁을 얻을 수 있습니다.</span></p>
      <div class="shot"><img decoding="async" width="1380" height="588" style="width:96%;margin-inline:auto" src="assets/student/student_27.png" alt="행동기록 분석 · 혜택/페널티 — 최근 이행 내역"></div>
      <p class="tip"><span class="lbl">참고</span><span>하단 <b>‘행동기록 분석’</b>은 기간 내 행동기록을 분석해 보여 주며, <b>‘혜택/페널티’</b>는 최근 이행 내역에서 규칙을 어긴 횟수와 집행 횟수를 확인할 수 있습니다.</span></p>
      <h3 class="h3">학습</h3>
      <div class="shot fl fr"><img decoding="async" width="1776" height="900" src="assets/student/student_28.png" alt="리포트 학습 — 학습시간·과목별·교재별 달성률 · 학습시간 조회"></div>
      <p>학습 탭에서는 학습 관련 내용을 조회합니다. 생활 탭과 동일하게 상단 기간을 조정할 수 있고, 우측 상단의 <b>‘학습시간 조회’</b> 버튼으로 전체 기간을 설정해 공부시간을 확인할 수 있습니다. 학습시간은 프로그램·시험 시간을 제외한 <b>자습시간</b>만 확인합니다.</p>
      <h3 class="h3">G3</h3>
      <div class="shot"><img decoding="async" width="1600" height="900" style="width:100%" src="assets/student/student_29.png" alt="G3 현황 — 9개 영역 44개 지표 트리맵"></div>
      <p>G3 탭에서는 월별 지표당 점수와 지표 변동 추이를 확인합니다. <b>종합 평가 점수</b>는 44개 항목을 5점으로 환산해 측정하며, <b>영역별 밸런스</b>로 지난달 추이와 부족한 지표를 확인할 수 있습니다. 하단 <b>G3 현황</b>에서는 9개 영역 44개 지표의 분포를 트리맵으로 한눈에 볼 수 있습니다.</p>
      <div class="shot"><img decoding="async" width="1321" height="437" src="assets/student/student_30.png" alt="G3 상세 지표 — 카테고리 클릭 후 단계별 지표 입력"></div>
      <p class="tip"><span class="lbl">참고</span><span>하단 상세 내역에서는 데이터가 없는 지표를 직접 채울 수 있습니다. (카테고리 클릭 → 단계 설명 확인 → 지표 입력 완성)</span></p>
      <h3 class="h3">G3 기간별 추이</h3>
      <div class="shot fl fr fb"><img decoding="async" width="1745" height="970" style="width:106%;max-width:106%" src="assets/student/student_31.png" alt="G3 기간별 추이 — 전체 평균 추이 · 상세 항목별 추이"></div>
      <p><b>‘기간별 추이’</b>를 클릭하면 G3 지표의 추이를 볼 수 있습니다.</p>
      <h3 class="h3">리포트 발행</h3>
      <div class="shot"><img decoding="async" width="1321" height="483" src="assets/student/student_32.png" alt="리포트 발행 — G3 지표 선택 · 매니저 종합 의견(학부모 화면)"></div>
      <p>리포트 발행 시 <b>G3 지표</b>를 선택해 발송할 수 있으며 매니저 소견을 입력할 수 있습니다. <b>매니저 종합 의견</b>은 학부모에게 보이는 화면입니다.</p>
      <p class="tip"><span class="lbl">참고</span><span>주 단위 생활/학습 리포트는 매주 월요일 자동 발송되고, 월 단위 생활/학습/G3 리포트는 매월 매니저가 발송합니다.</span></p>
      
`;
