import "./TopMenu.css";

export default function TopMenu() {
  return (
    <header className="top-menu">
      <div className="search-container">
        <input type="text" placeholder="Buscar juego" />
        <span className="icon">🔍</span>
      </div>

      <div className="menu-icons">
        <span className="icon">❤️</span>
        <span className="icon">🛒</span>
        <span className="icon">👤</span>

        <a href="#" className="link">Iniciar sesión</a>
        <span className="separator">|</span>
        <span className="link">Registrarse</span>
      </div>
    </header>
  );
}
