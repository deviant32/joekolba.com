import React from 'react'
import Helmet from 'react-helmet'

import './sass/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <div> {children}</div>
  </div>
)

export default TemplateWrapper
