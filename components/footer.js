import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
   <footer>

<footer className="footer py-4" style={{ backgroundColor: "#f4fffb" }}>
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-12 text-center pb-md-3 text-lg-start col-lg-1 text-center">
            <Link href="/">
              <img
                src="/img/logos/website-logo.svg"
                alt="Website Logo"
                className="footer-logo"
              />
            </Link>
          </div>
          <div className="col d-flex align-items-center ms-4">
            <div className="nav d-flex flex-column flex-md-row">
              <div className="nav-item">
                <Link href="/#auction-scroll" className="nav-link text-success">
                  Auction
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/#Buy-page" className="nav-link text-success">
                  Buy & Sell
                </Link>
              </div>
              <div className="nav-item">
                <Link href="#" className="nav-link text-success">
                  Data Analysis
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/contact" className="nav-link text-success">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-5">
            <form action="">
              <div className="d-flex align-items-center ms-4">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Join our Newsletter"
                />
                <button className="btn btn-success">SEND</button>
              </div>
            </form>
          </div>
        </div>

        <hr />

        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="nav justify-content-center justify-content-md-start">
              <div className="nav-item">
                <Link href="#" className="nav-link text-success">
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/faq" className="nav-link text-success">
                  FAQ
                </Link>
              </div>
              <div className="nav-item">
                <Link href="/#download-sec" className="nav-link text-success">
                  Download
                </Link>
              </div>
              <div className="nav-item">
                <Link
                  href="https://cardamomauction.com/terms"
                  className="nav-link text-success"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="nav justify-content-center justify-content-md-end">
              <div className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    id="footer-icons"
                    src="/img/logos/twitter.svg"
                    alt="Twitter"
                  />
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    id="footer-icons"
                    src="/img/logos/linkidn.svg"
                    alt="LinkedIn"
                  />
                </a>
              </div>
              <div className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    id="footer-icons"
                    src="/img/logos/google sign.svg"
                    alt="Google"
                  />
                </a>
              </div>
              <div className="nav-item">
                <Link
                  href="https://www.facebook.com/cardamomauction/"
                  className="nav-link"
                >
                  <img
                    id="footer-icons"
                    src="/img/logos/facebook.svg"
                    alt="Facebook"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>




   </footer>
  )
}

export default Footer



