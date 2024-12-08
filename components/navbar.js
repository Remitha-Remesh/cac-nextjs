import { useRouter } from 'next/router';
import Link from 'next/link';


const Navbar = () => {
  const router = useRouter(); 
  return (
  <navbar>


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="web-logo ms-5 py-3">
          <Link href="/">
            <img src="/img/logos/website-logo.svg" alt="Website Logo" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex justify-content-center">
          <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item mx-2">
        <Link href="/" className={`nav-link ms-3 ${router.pathname === "/" ? "active" : ""}`}>
          HOME
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link href="/history" className={`nav-link ms-2 ${router.pathname === "/history" ? "active" : ""}`}>
          HISTORY
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link href="/contact" className={`nav-link ms-2 ${router.pathname === "/contact" ? "active" : ""}`}>
          CONTACT
        </Link>
      </li>
      <li className="nav-item mx-2">
        <Link href="/faq" className={`nav-link ms-4 ${router.pathname === "/faq" ? "active" : ""}`}>
          FAQ
        </Link>
      </li>
    </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3 mb-lg-1 mt-lg-0 me-lg-5 pe-lg-5">
            <a className="mx-3" href="#">
              <img src="/img/logos/twitter.svg" id="logo-home" alt="twitter" />
            </a>
            <a className="mx-3" href="#">
              <img src="/img/logos/linkidn.svg" id="logo-home" alt="linkedin" />
            </a>
            <a className="mx-3" href="#">
              <img src="/img/logos/google sign.svg" id="logo-home" alt="google" />
            </a>
          </div>


        </div>
      </div>
    </nav>
  

</navbar>

);
};
export default Navbar;