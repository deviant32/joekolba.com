import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import "./main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Joe Kolba - Full-Stack Software Engineer">
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="all,follow" />
      <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
      <link
        rel="stylesheet"
        href="vendor/font-awesome/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="css/fontastic.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
      />
      <link
        rel="stylesheet"
        href="vendor/@fancyapps/fancybox/jquery.fancybox.min.css"
      />
      <link rel="stylesheet" href="css/style.blue.css" id="theme-stylesheet" />
      <link rel="stylesheet" href="css/custom.css" />
      <link rel="shortcut icon" href="favicon.png" />
    </Helmet>
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="search-area">
          <div className="search-area-inner d-flex align-items-center justify-content-center">
            <div className="close-btn">
              <i className="icon-close" />
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <form action="#">
                  <div className="form-group">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" className="submit">
                      <i className="icon-search-1" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navbar-header d-flex align-items-center justify-content-between">
            <Link className="navbar-brand" to="/">
              Joe Kolba
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarcollapse"
              aria-controls="navbarcollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler">
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClassName="active"
                  exact={"true"}
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
            </ul>
            {/* <div className="navbar-text"><a href="#" className="search-btn"><i className="icon-search-1"></i></a></div> */}
          </div>
        </div>
      </nav>
    </header>
    {children}
    <footer className="main-footer">
      <div className="container" />
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy; {new Date().getFullYear()} All rights reserved.
                &nbsp;JoeKolba.com.
              </p>
            </div>
            <div className="col-md-6 text-right">
              <p>
                Powered by{" "}
                <a
                  href="https://www.gatsbyjs.org/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Gatsby.js
                </a>{" "}
                and{" "}
                <a
                  href="http://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Netlify
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default TemplateWrapper;
