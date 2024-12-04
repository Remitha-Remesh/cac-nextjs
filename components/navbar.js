const Navbar = () => {
  return (

<navbar>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="web-logo ms-5 py-3">
            <a href="../HOME/home.html">
              <img src="/img/logos/website-logo.svg" alt="" />
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="ms-auto d-flex justify-content-center">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <a
                    class="nav-link "
                    aria-current="page"
                    href="../HOME/home.html"
                  >
                    <span class="nav-link active ms-3">HOME</span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="../HISTORY/history.html">
                    <span class="nav-link ms-2">HISTORY</span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="../CONTACT\contact.html">
                    <span class="nav-link">CONTACTS</span>
                  </a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="../FAQ/faq.html">
                    <span class="nav-link ms-4">FAQ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="d-flex justify-content-center align-items-center mt-3 mb-lg-1 mt-lg-0 me-lg-5 pe-lg-5"
            >
              <a class="mx-3" href="#">
                <img  src="img/logos/twitter.svg" id="logo-home" alt="twitter" />
              </a>
              <a class="mx-3" href="#">
                <img
                  src="./img/logos/linkidn.svg"
                  id="logo-home"
                  alt="linkedin"
                />
              </a>
              <a class="mx-3" href="#">
                <img
                  src="./img/logos/google sign.svg"
                  id="logo-home"
                  alt="google"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
  
  </navbar>
);
};
export default Navbar;