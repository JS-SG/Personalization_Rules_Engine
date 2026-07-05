import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0 }}>
        🛒 Ecommerce Personalization Rules Engine
      </h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
            fontWeight: "bold"
          }}
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;