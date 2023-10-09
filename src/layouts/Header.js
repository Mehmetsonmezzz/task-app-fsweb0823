const Header = (props) => {
  const { user } = props;
  return (
    <header>
      <h1>header</h1>
      <div className="user-container">{user.name}</div>
    </header>
  );
};

export default Header;
