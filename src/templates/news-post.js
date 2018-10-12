import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content';
import TimeAgo from 'react-timeago';


export const NewsPostTemplate = ({
  content,
  contentComponent,
  tags,
  category,
  image,
  title,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (


    <div class="container">
      {helmet || ''}
      <div class="row">
        <main className="post blog-post col-lg-12">
          <div className="container">
            <div className="post-single">

              <div className="text-center">
                <img style={{maxHeight: '300px'}} src={image} className="img-fluid" alt={title} />
              </div>

              <div className="post-details">
                <div className="post-meta d-flex justify-content-between">
                  <div className="category">{category}</div>
                </div>
                <h1>{title}</h1>
                <div className="post-footer d-flex align-items-center flex-column flex-sm-row">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="date"><i className="icon-clock"></i> <TimeAgo date={date} /></div>
                  </div>
                </div>
                <div className="post-body">
                  <PostContent content={content} />
                </div>
              </div>
            </div>
          </div>
        </main>
        
      </div>
    </div>

  )
}

NewsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  category: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <NewsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={<Helmet title={`${post.frontmatter.title} | News`} />}
        tags={post.frontmatter.tags}
        category={post.frontmatter.category}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsPost

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        category
        image
        title
        tags
      }
    }
  }
`
