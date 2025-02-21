export default function PrivacyContent() {
  return (
    <div className="privacy_container">
      <h1>개인정보 처리방침</h1>

      <section className="privacy_section">
        <h2>1. 개인정보의 처리 목적</h2>
        <p>
          편해점은 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는
          다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는
          사전동의를 구할 예정입니다.
        </p>
        <ul>
          <li>서비스 제공</li>
          <li>콘텐츠 제공</li>
          <li>커뮤니티 운영</li>
        </ul>
      </section>

      <section className="privacy_section">
        <h2>2. 개인정보의 처리 및 보유 기간</h2>
        <p>
          편해점은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
          개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서
          개인정보를 처리·보유합니다.
        </p>
      </section>

      <section className="privacy_section">
        <h2>3. 정보주체의 권리·의무 및 그 행사방법</h2>
        <p>이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
        <ul>
          <li>개인정보 열람요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제요구</li>
          <li>처리정지 요구</li>
        </ul>
      </section>
    </div>
  );
}
