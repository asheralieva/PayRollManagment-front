import "../header/Header.scss";
import logo from "../../assets/logo.png";

const Header = ({ logoItems, activePage, setActivePage }) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header_top">
          <img src={logo} alt="" />
          <span>Pay Roll Managment</span>
        </div>
        <div className="header__menu">
          {logoItems.map((item, index) => (
            <div
              key={index}
              className={`header__menu-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(index + 1)}
            >
              <img src={item.src} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
