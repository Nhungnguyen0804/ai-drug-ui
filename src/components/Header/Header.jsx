import "./Header.css";
import logo from "../../assets/logo.png";
function Header() {
  return (
    <header className="app-header">
      <div className="header-left">
        {/* Logo dạng icon (nếu có) */}
        <div className="logo-icon">
          <img src={logo} alt="Logo ToxiPredict AI" className="header-logo" />
        </div>

        <div className="text-logo">
          <h1 className="header-title" style={{ color: "black" }}>
            ToxiPredict AI
          </h1>
          <p className="header-subtitle">
            Hệ thống dự đoán độc tính thuốc bằng AI
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
