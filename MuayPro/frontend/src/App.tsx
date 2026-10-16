
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Dashboard",
    "Fighters",
    "Training Sessions",
    "Training Plans",
    "Fight Management",
    "Profile",
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">MuayPro</h1>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu ▾
        </button>

        {menuOpen && (
          <div className="dropdown">
            {menuItems.map((item) => (
              <button
                className="dropdown-item"
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="content">
        <h2>Welcome to MuayPro</h2>
        <p>Manage your fighters and training in one place.</p>
      </main>
    </div>
  );
}

export default App;
