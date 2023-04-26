import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Netflix" />
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Films</a>
          </li>
          <li>
            <a href="#">Nouveautés les plus regardés</a>
          </li>
          <li>
            <a href="#">Ma liste</a>
          </li>
          <li>
            <a href="#">Explorer par langue</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
