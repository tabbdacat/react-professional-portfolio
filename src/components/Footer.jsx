import { Link, useLocation } from 'react-router-dom';

function Footer() {
    return (
        <footer className="text-center float-none m-4">
        <Link
          to="https://github.com/tabbdacat"
          className= 'nav-link nav-item  d-inline px-3'
        >
          GitHub
        </Link>
          <Link
            to="https://www.linkedin.com/in/tabbatha-souza-9a0675288/"
            className= 'nav-link nav-item  d-inline px-3'
          >
            LinkedIn
          </Link>
          <Link
            to="https://stackoverflow.com/users/23202330/tabbdacat"
            className= 'nav-link nav-item d-inline px-3'
          >
            Stack Overflow
          </Link>
        </footer>
    );
}

export default Footer;