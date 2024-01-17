import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;
  
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            // If on About page, we set the url to /A and page to class 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link nav-item'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            // If on Portfolio page, we set the url to /Portfolio and page to class 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link nav-item'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            // If on Resume page, we set the url to /Resume and page to class 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link nav-item'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link nav-item'}
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  }

export default NavTabs;