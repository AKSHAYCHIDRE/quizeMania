import Logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <img src={Logo} alt="Quize Mania" title="Quize Mania" />
        </div>
      </header>
    </>
  );
};

export default Header;
