import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content';
import TimeAgo from 'react-timeago';


export const BlogPostTemplate = ({
  content,
  image,
  contentComponent,
  tags,
  title,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (


    <div class="container">
      {helmet || ''}
      <div class="row">
        <main className="post blog-post col-lg-8">
          <div className="container">
            <div className="post-single">
              <div className="post-details">
                <div className="post-meta d-flex justify-content-between">
                  <div className="category"><a href="#">Business</a><a href="#">Financial</a></div>
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
                {/* <div className="post-tags"><a href="#" className="tag">#Business</a><a href="#" className="tag">#Tricks</a><a href="#" className="tag">#Financial</a><a href="#" className="tag">#Economy</a></div>
                <div className="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row"><a href="#" className="prev-post text-left d-flex align-items-center">
                  <div className="icon prev"><i className="fa fa-angle-left"></i></div>
                  <div className="text"><strong className="text-primary">Previous Post </strong>
                    <h6>I Bought a Wedding Dress.</h6>
                  </div></a><a href="#" className="next-post text-right d-flex align-items-center justify-content-end">
                    <div className="text"><strong className="text-primary">Next Post </strong>
                      <h6>I Bought a Wedding Dress.</h6>
                    </div>
                    <div className="icon next"><i className="fa fa-angle-right">   </i></div></a></div> */}
                {/*  <div className="post-comments">
                  <header>
                    <h3 className="h6">Post Comments<span className="no-of-comments">(3)</span></h3>
                  </header>
                  <div className="comment">
                    <div className="comment-header d-flex justify-content-between">
                      <div className="user d-flex align-items-center">
                        <div className="image"><img src="img/user.svg" alt="..." className="img-fluid rounded-circle" /></div>
                        <div className="title"><strong>Jabi Hernandiz</strong><span className="date">May 2016</span></div>
                      </div>
                    </div>
                    <div className="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div>
                  <div className="comment">
                    <div className="comment-header d-flex justify-content-between">
                      <div className="user d-flex align-items-center">
                        <div className="image"><img src="img/user.svg" alt="..." className="img-fluid rounded-circle" /></div>
                        <div className="title"><strong>Nikolas</strong><span className="date">May 2016</span></div>
                      </div>
                    </div>
                    <div className="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div>
                  <div className="comment">
                    <div className="comment-header d-flex justify-content-between">
                      <div className="user d-flex align-items-center">
                        <div className="title"><strong>John Doe</strong><span className="date">May 2016</span></div>
                      </div>
                    </div>
                    <div className="comment-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="add-comment">
                  <header>
                    <h3 className="h6">Leave a reply</h3>
                  </header>
                  <form action="#" className="commenting-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input type="text" name="username" id="username" placeholder="Name" className="form-control" />
                      </div>
                      <div className="form-group col-md-6">
                        <input type="email" name="username" id="useremail" placeholder="Email Address (will not be published)" className="form-control" />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea name="usercomment" id="usercomment" placeholder="Type your comment" className="form-control"></textarea>
                      </div>
                      <div className="form-group col-md-12">
                        <button type="submit" className="btn btn-secondary">Submit Comment</button>
                      </div>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </main>
        <aside className="col-lg-4">
          {/* <div className="widget search">
            <header>
              <h3 className="h6">Search the blog</h3>
            </header>
            <form action="#" className="search-form">
              <div className="form-group">
                <input type="search" placeholder="What are you looking for?" />
                <button type="submit" className="submit"><i className="icon-search"></i></button>
              </div>
            </form>
          </div> */}
          <div className="widget latest-posts">
            <header>
              <h3 className="h6">Latest Posts</h3>
            </header>
            <div className="blog-posts"><a href="#">
              <div className="item d-flex align-items-center">
                <div className="image"><img src="img/small-thumbnail-1.jpg" alt="..." className="img-fluid" /></div>
                <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                  <div className="d-flex align-items-center">
                    <div className="views"><i className="icon-eye"></i> 500</div>
                    <div className="comments"><i className="icon-comment"></i>12</div>
                  </div>
                </div>
              </div></a><a href="#">
                <div className="item d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-2.jpg" alt="..." className="img-fluid" /></div>
                  <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                    <div className="d-flex align-items-center">
                      <div className="views"><i className="icon-eye"></i> 500</div>
                      <div className="comments"><i className="icon-comment"></i>12</div>
                    </div>
                  </div>
                </div></a><a href="#">
                <div className="item d-flex align-items-center">
                  <div className="image"><img src="img/small-thumbnail-3.jpg" alt="..." className="img-fluid" /></div>
                  <div className="title"><strong>Alberto Savoia Can Teach You About</strong>
                    <div className="d-flex align-items-center">
                      <div className="views"><i className="icon-eye"></i> 500</div>
                      <div className="comments"><i className="icon-comment"></i>12</div>
                    </div>
                  </div>
                </div></a></div>
          </div>
          {/* 
          <div className="widget categories">
            <header>
              <h3 className="h6">Categories</h3>
            </header>
            <div className="item d-flex justify-content-between"><a href="#">Growth</a><span>12</span></div>
            <div className="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
            <div className="item d-flex justify-content-between"><a href="#">Sales</a><span>8</span></div>
            <div className="item d-flex justify-content-between"><a href="#">Tips</a><span>17</span></div>
            <div className="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
          </div>
          <div className="widget tags">
            <header>
              <h3 className="h6">Tags</h3>
            </header>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="tag">#Business</a></li>
              <li className="list-inline-item"><a href="#" className="tag">#Technology</a></li>
              <li className="list-inline-item"><a href="#" className="tag">#Fashion</a></li>
              <li className="list-inline-item"><a href="#" className="tag">#Sports</a></li>
              <li className="list-inline-item"><a href="#" className="tag">#Economy</a></li>
            </ul>
          </div> */}
        </aside>
      </div>
    </div>

  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image
        title
        tags
      }
    }
  }
`
