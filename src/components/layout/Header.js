import {
  FaMoon,
  FaRoad,
} from 'react-icons/fa';

export const Header = () => {
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
            <li data-testid="dark-mode-action" className="settings__darkmode"><FaMoon /></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}