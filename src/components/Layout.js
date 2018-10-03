import React from 'react'
import Helmet from 'react-helmet'

import './main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS">
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Bootstrap Blog - B4 Template by Bootstrap Temple</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="all,follow" />
      <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/fontastic.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" />
      <link rel="stylesheet" href="vendor/@fancyapps/fancybox/jquery.fancybox.min.css" />
      <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet" />
      <link rel="stylesheet" href="css/custom.css" />
      <link rel="shortcut icon" href="favicon.png" />
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    </Helmet>
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="search-area">
          <div className="search-area-inner d-flex align-items-center justify-content-center">
            <div className="close-btn"><i className="icon-close"></i></div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-8">
                <form action="#">
                  <div className="form-group">
                    <input type="search" name="search" id="search" placeholder="What are you looking for?" />
                    <button type="submit" className="submit"><i className="icon-search-1"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navbar-header d-flex align-items-center justify-content-between">
            <a href="index.html" className="navbar-brand">Joe Kolba</a>
            <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
          </div>
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="index.html" className="nav-link active ">Home</a>
              </li>
              <li className="nav-item"><a href="blog.html" className="nav-link ">Blog</a>
              </li>
              <li className="nav-item"><a href="post.html" className="nav-link ">Resume</a>
              </li>
              <li className="nav-item"><a href="#" className="nav-link ">Contact</a>
              </li>
            </ul>
            <div className="navbar-text"><a href="#" className="search-btn"><i className="icon-search-1"></i></a></div>
            <ul className="langs navbar-text"><a href="#" className="active">EN</a><span>           </span><a href="#">ES</a></ul>
          </div>
        </div>
      </nav>
    </header>
    {children}
  </div>
)

export default TemplateWrapper
