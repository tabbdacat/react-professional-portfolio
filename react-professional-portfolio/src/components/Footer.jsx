import { Link, useLocation } from 'react-router-dom';

function Footer() {
    return (
        <div className="text-center">
        <Link
          to="https://github.com/tabbdacat"
          className= 'nav-link nav-item'
        >
          GitHub
        </Link>
          <Link
            to="https://www.linkedin.com/in/tabbatha-pischke-9a0675288/"
            className= 'nav-link nav-item'
          >
            LinkedIn
          </Link>
          <Link
            to="https://stackoverflow.com/users/23202330/tabbdacat"
            className= 'nav-link nav-item'
          >
            Stack Overflow
          </Link>
        </div>
    );
}

export default Footer;