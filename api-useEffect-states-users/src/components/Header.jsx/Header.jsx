import "./header.css"

function Navbar({ changePage }) {
  return (
    <nav className="navbar">
      <div className="brand">Logo</div>
      <ul>
        <li id="item" onClick={() => changePage("home")}>Home</li>
        <li id="item" onClick={() => changePage("counter")}>Counter</li>
        <li id="item" onClick={() => changePage("employs")}>Employs</li>
      </ul>
    </nav>
  );
}

export default Navbar;
