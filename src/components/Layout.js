import React from 'react'
import Helmet from 'react-helmet'

//import './sass/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/main.css" />
      <script src="js/jquery.min.js"></script>
      <script src="js/jquery.poptrox.min.js"></script>
      <script src="js/browser.min.js"></script>
      <script src="js/breakpoints.min.js"></script>
      <script src="js/util.js"></script>
      <script src="js/main.js"></script>
    </Helmet>
    <div> {children}</div>
  </div>
)

export default TemplateWrapper
