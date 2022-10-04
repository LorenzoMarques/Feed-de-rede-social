import "./style.css";
import brasilianFlag from "../../assets/brasilianFlag.svg";
import mail from "../../assets/mail.svg";
import notification from "../../assets/notification.svg";
import points from "../../assets/points.svg";
import avatar from "../../assets/avatar_default.png";

const Header = () => {
  return (
    <header>
      <button className="button-image">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>

      <ul className="nav-bar">
        <li>
          <button>
            <img src={brasilianFlag} className="nav-bar-img" alt="" />
          </button>
        </li>
        <li>
          <button>
            <img src={mail} alt="" className="nav-bar-img" />
          </button>
        </li>
        <li>
          <button>
            <img src={notification} alt="" className="nav-bar-img" />
          </button>
        </li>
        <li>
          <button>
            <img src={points} alt="" className="nav-bar-img" />
          </button>
        </li>
        <li>
          <button>
            <img src={avatar} alt="" className="avatar-img" />
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
