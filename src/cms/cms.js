import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ResumePagePreview from './preview-templates/ResumePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('resume', ResumePagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('news', BlogPostPreview)
