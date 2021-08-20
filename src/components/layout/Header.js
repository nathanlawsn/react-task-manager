import {
  FaMoon,
  FaRoad,
} from 'react-icons/fa';

export const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <FaRoad />
          <span>North East Tolls</span>
        </div>
        <div className="settings">
          <ul>
            <li data-testid="quick-add-task-action" className="settings__add">+</li>
            <li className="settings__darkmode">
            <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaMoon />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}