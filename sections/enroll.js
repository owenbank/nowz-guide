window.SECTIONS = window.SECTIONS || {};
window.SECTIONS["enroll"] = `
      <h1 class="page">등록관리</h1>


      <h2 class="h2">신규 학생 등록</h2>
      <p class="tight">등록관리에 등록되지 않은 학생·학부모는 모바일 앱에서 <b>‘현재 소속된 그룹이 없어요’</b> 화면만 보게 됩니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="934" src="assets/enroll/enroll_01.png" alt="학생·학부모 모바일 — 현재 소속된 그룹이 없어요"></div>
      <p class="tight">매니저 웹 등록관리에서 사용자를 추가하면 앱에서 정상적으로 이용할 수 있습니다. 새로운 학생은 <b>등록관리 화면에서 직접 등록</b>하는 것이 기본입니다. (운영사에서 NOWZ 상담을 통해 넘어온 경우는 맨 아래 <b>참고</b>에서 확인할 수 있습니다.)</p>
      <div class="confirm"><span class="ico">!</span><span>사용자를 추가하더라도 <b>담당팀이 배정되지 않으면 채팅 등 일부 기능은 사용할 수 없습니다.</b></span></div>

                  <h3 class="h3">등록 관리에서 직접 등록</h3>
      <div class="shot"><img decoding="async" width="1440" height="810" src="assets/enroll/enroll_02.png" alt="등록관리 목록 — 우측 상단 신규 등록 버튼"></div>
      <p class="tight"><span class="cap"><span class="num">1.</span> 우측 상단의 <b>[신규 등록]</b> 버튼을 클릭합니다.</span></p>
      <div class="shot fit70"><img decoding="async" width="924" height="566" src="assets/enroll/enroll_03.png" alt="신규 등록 모달 → 연동 가족 초대 화면"></div>
      <p class="tight"><span class="cap"><span class="num">2.</span> 정보를 입력한 후 서비스의 종류(케어Q, 센터Q)에 따라 서비스 연동 대상을 확인한 후 초대링크를 발송합니다.</span></p>
      <p class="tip"><span class="lbl">참고</span><span>학생의 정보로만 등록이 가능하나 일부 기능 사용이 제한될 수 있습니다.</span></p>

      <p class="tight">등록 시 아래 경우에 해당하면 참고할 내용이 있습니다.</p>
      <details class="case"><summary>학생이 앱을 사용하지 않는 경우 (학부모만 이용)<span class="chev">▾</span></summary><div class="cbody"><p class="tight">학생이 직접 앱을 사용하지 않고 <b>학부모만 이용</b>하는 경우입니다.</p><ol class="flist"><li>신규 등록 후 <b>연동 가족 초대</b> 화면으로 넘어갑니다.</li><li>학생(자녀)의 체크를 <b>해제</b>하고, 앱을 사용하는 <b>사용자만 체크</b>한 뒤 <b>완료</b>합니다.</li></ol><div class="shot bare"><img decoding="async" width="1776" height="656" src="assets/enroll/enroll_04.png" alt="연동 가족 초대 — 학생 체크 해제, 앱 사용자만 체크"></div></div></details>
      <details class="case"><summary>자녀가 두 명 이상인 경우<span class="chev">▾</span></summary><div class="cbody"><p class="tight">NOWZ는 학생 단위로 관리하기 때문에, 자녀가 둘이면 한 명씩 각각 등록합니다. 이때 두 학생의 <b>보호자 번호를 동일하게 입력</b>하면 시스템이 <b>같은 학부모의 자녀로 인식</b>해, 학부모가 <b>하나의 채팅방에서 두 자녀를 함께</b> 관리·소통할 수 있습니다.</p><ol class="flist"><li>자녀 수만큼 학생을 <b>각각 새로 등록</b>합니다.</li><li>두 학생 모두 <b>학생·보호자 번호를 동일하게</b> 입력합니다.</li></ol><div class="shot bare"><img decoding="async" width="1776" height="1056" src="assets/enroll/enroll_05.png" alt="등록관리 목록 — 자녀별 각각 등록"></div><div class="shot bare"><img decoding="async" width="1776" height="1056" src="assets/enroll/enroll_06.png" alt="신규 등록 모달 — 학생·보호자 번호 동일 입력"></div></div></details>

      <h3 class="h3">연동현황 이해하기</h3>
      <div class="tablewrap"><table><thead><tr><th class="k">연동 현황</th><th>노출 조건</th></tr></thead><tbody>
        <tr><td class="k"><span class="muted">미노출</span></td><td>등록 후 아무도 초대하지 않은 경우 또는 모든 구성원 초대를 취소하거나 연동해제를 한 경우</td></tr>
        <tr><td class="k"><span class="badge o">초대 만료</span></td><td>초대한 인원 중 1명이라도 초대가 만료된 경우</td></tr>
        <tr><td class="k"><span class="badge b">초대 보냄</span></td><td>1명 이상에게 초대를 보낸 경우</td></tr>
        <tr><td class="k"><span class="badge g">연동 완료</span></td><td>초대한 인원이 모두 연동된 경우</td></tr>
      </tbody></table></div>

      <h3 class="h3">상담에서 등록</h3>
      <div class="shot"><img decoding="async" width="1440" height="889" src="assets/enroll/enroll_07.png" alt="NOWZ 상담 프로그램 — 상담 보고서·파일 관리 화면"></div>
      <p class="tight">1. NOWZ 상담에서 학생 상담을 진행한 후 <b>[등록 전환]</b>을 누르면, 가족(학생·학부모) 정보와 상담 내역이 NOWZ 등록관리로 넘어옵니다. 목록에는 연동현황 ‘미노출’ 상태로 표시됩니다.</p>
      <div class="shot bare"><img decoding="async" width="1776" height="1056" src="assets/enroll/enroll_08.png" alt="등록관리 목록 — 학생(리스트) 선택"></div>
      <p class="tight">2. 등록관리 목록에서 학생(리스트)을 <b>클릭</b>합니다.</p>
      <div class="shot bare"><img decoding="async" width="1572" height="874" src="assets/enroll/enroll_09.png" alt="가족 상세 — 초대 발송"></div>
      <p class="tight">3. <b>가족 상세</b>가 뜨면, 서비스 사용자에 맞게 <b>초대를 발송</b>합니다.</p>
      <div class="confirm"><span class="ico">!</span><span>자녀가 앱을 사용하지 않는 경우에도, 자녀는 <b>가족 상세에서 삭제할 수 없으며</b> 자녀로 계속 관리됩니다. 이 경우 <b>초대만 보내지 않으면</b> 됩니다.</span></div>
    
`;
