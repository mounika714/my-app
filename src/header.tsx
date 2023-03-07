import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Recently Added</Link>
          </li>
          <li>
            <Link to="/favorites">Favorited</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
