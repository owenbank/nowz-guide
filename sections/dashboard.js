window.SECTIONS = window.SECTIONS || {};
window.SECTIONS["dashboard"] = `
      <h1 class="page">대시보드</h1>
      <p class="lead">하루 업무를 한 화면에서 처리하는 곳입니다. 여섯 가지 영역으로 나뉩니다.</p>
      <div class="shot" style="padding:0"><img decoding="async" width="1900" height="1200" style="width:100%" src="assets/dashboard/dashboard_01.png" alt="대시보드 — 긴급 처리사항·출석현황·행동 기록·일정 관리·혜택 및 페널티·최근 상담 이력"></div>
      <ul class="blist">
        <li><b>긴급 처리사항</b> — 우선 처리가 필요한 업무를 모아 봅니다. 미완료·완료 탭으로 상태를 구분하고, ‘내 업무만’ 필터로 본인 담당만 볼 수 있습니다. 기한이 지난 업무는 빨간색으로 표시됩니다.</li>
        <li><b>출석현황</b> — 등원예정·등원·결석·공결 현황을 실시간으로 확인합니다. 지각 중인 학생은 지각 시간이 함께 표시됩니다. 학생 이름 옆 메뉴에서 전화·메시지·출석 코멘트를 바로 보낼 수 있습니다.</li>
        <li><b>행동 기록</b> — 오늘 등록된 행동기록을 긍정·부정·기록 건수로 요약합니다. 아래에 학생별 기록 내역이 최신순으로 표시됩니다.</li>
        <li><b>일정 관리</b> — 오늘의 일정을 확인하고 추가합니다. 생일·개인일정·휴가·외부활동·프로그램 등이 표시되며, ‘전체보기’를 누르면 캘린더 뷰로 전환됩니다.</li>
        <li><b>혜택 및 페널티</b> — 현재 진행 중인 혜택·페널티 건수와 대상 학생, 남은 기간을 확인합니다.</li>
        <li><b>최근 상담 이력</b> — 일주일간의 상담 내역을 최신순으로 봅니다. 학생 이름과 상담 주제가 표시됩니다.</li>
      </ul>

      <h2 class="h2">일정 관리</h2>
      <p>대시보드의 일정 관리 영역에서 일정을 누르면 상세를 확인하고, 수정하거나 지울 수 있습니다. 담당학생이 몇 명인지와 반복 여부에 따라 어디서 고칠 수 있는지, 뜨는 화면이 달라집니다.</p>
      <h3 class="h3">일정 확인</h3>
      <div class="shot bare"><img decoding="async" width="1000" height="636" src="assets/dashboard/schedule_popover_dashboard.png" alt="일정 확인 — 대시보드에서 일정을 누르면 뜨는 팝오버"></div>
      <p>일정을 누르면 팝오버로 담당 학생과 시간 등 상세 정보를 확인할 수 있습니다.</p>
      <h3 class="h3">수정하기</h3>
      <div class="shot bare"><img decoding="async" width="1004" height="1348" src="assets/dashboard/schedule_edit_dashboard.png" alt="수정하기 — 일정 수정 창"></div>
      <p>팝오버 <b>우상단의 수정 아이콘</b>을 누르면 일정 수정 창이 뜹니다. 카테고리, 날짜, 시간, 담당학생 등을 바꿀 수 있습니다.</p>
      <p class="tip"><span class="lbl">참고</span><span>담당학생이 한 명인 일정은 학생 상세와 대시보드 어디서 열어도 고칠 수 있습니다. 담당학생이 여럿이거나 센터 전체 일정이면 대시보드에서만 고칠 수 있습니다.</span></p>
      <h3 class="h3">삭제하기</h3>
      <div class="shot bare"><img decoding="async" width="1004" height="480" src="assets/dashboard/schedule_delete_dashboard.png" alt="삭제하기 — 삭제 확인 창"></div>
      <p>팝오버 <b>우상단의 삭제 아이콘</b>을 누르면 확인 없이 바로 지워집니다. 반복 일정이면 범위 선택 창이 먼저 뜨고, 지워지는 회차 규칙은 수정과 같습니다.</p>
      <details class="case"><summary>못 고치는 일정<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight">고칠 수 없는 일정에서 수정·삭제 아이콘을 누르면, 어디서 고쳐야 하는지 화면 아래에 안내가 뜹니다.</p>
        <p class="tight"><b>여러 학생 · 센터 전체 일정을 학생 상세에서 삭제하려 했을 때</b></p>
        <div class="shot bare"><img decoding="async" width="768" height="208" src="assets/dashboard/schedule_alert_multi.png" alt="여러 학생 · 센터 전체 일정 — '대시보드에서 삭제할 수 있습니다.'"></div>
        <p class="tight"><b>프로그램 일정을 수정하려 했을 때</b></p>
        <div class="shot bare"><img decoding="async" width="768" height="208" src="assets/dashboard/schedule_alert_program.png" alt="프로그램 일정 — '프로그램관리에서 수정할 수 있습니다.'"></div>
        <ul class="blist">
          <li><b>여러 학생 · 센터 전체 일정</b> — 학생 상세에서 열면 안내만 뜨고, 대시보드로 가야 고칠 수 있습니다.</li>
          <li><b>프로그램 일정</b> — 안내만 뜨며, 프로그램 관리에서 고쳐야 합니다.</li>
          <li><b>시험 일정</b> — 안내만 뜨며, 시험지 관리에서 고쳐야 합니다.</li>
          <li><b>학생 생일</b> — 자동으로 생성되는 일정이라 고칠 수 없습니다.</li>
        </ul>
      </div></details>
      <details class="case"><summary>센터 전체 일정<span class="chev">▾</span></summary><div class="cbody">
        <p class="tight">담당학생을 정하지 않고 센터 전체를 대상으로 만드는 일정입니다.</p>
        <p class="tight"><b>일정을 누르면 뜨는 팝오버</b></p>
        <div class="shot bare"><img decoding="async" width="1000" height="496" src="assets/dashboard/schedule_popover_centerwide.png" alt="센터 전체 일정 — 팝오버"></div>
        <p class="tight"><b>수정 창</b></p>
        <div class="shot bare"><img decoding="async" width="1004" height="1088" src="assets/dashboard/schedule_edit_centerwide.png" alt="센터 전체 일정 — 수정 창"></div>
        <div class="okbox"><span class="ico">✓</span><span><b>대시보드에서만 만들고 고칠 수 있습니다.</b> 학생 상세에서는 여러 학생 일정과 마찬가지로 안내만 뜹니다.</span></div>
      </div></details>

`;
