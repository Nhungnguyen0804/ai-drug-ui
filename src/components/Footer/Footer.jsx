import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-section">
          <h3 className="footer-title">ToxiPedictAI</h3>
          <p className="footer-text">
            Website demo model dự đoán độc tính thuốc 💊
          </p>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Team 13</h4>
          <p>22024569 - Nguyễn Thị Hồng Nhung</p>
          <p>22024570 - Hồ Anh Thơ</p>
          <p>22024522 - Trần Hoàng Lương</p>
          <p>22024580 - Thái Thị Diệp</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ToxiPedictAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
