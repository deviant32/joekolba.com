import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby';
import Wrapper from '../components/Layout'
var ReactRotatingText = require('react-rotating-text');

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Wrapper>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="image col-lg-3 text-center"><img style={{ maxWidth: '200px', marginBottom: '40px', objectFit: 'cover' }} src="img/joe-kolba-profile.jpg" alt="Joe Kolba" /></div>

              <div className="col-lg-8">
                <h2 className="h3">Full-Stack Engineer</h2>
                <p className="text-big">Hi, my name is <strong>Joe Kolba</strong> and I am a full-stack engineer.  My <strong>passion</strong> is <strong>technology</strong>, but I am an <strong>entrepreneur</strong> at heart.  I will be updating this site frequently with everything that I am currently working on or dreaming up.   </p>
              </div>
            </div>
          </div>
        </section>
        <section id="divider" className="divider">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>Looking for a <ReactRotatingText items={['co-founder?', 'consultant?', 'engineer?']} deletingInterval={70} /></h2>
                <p>I love hearing about new ideas.  Feel free to reach out to me to talk. With over 10 years of experience building enterprise solutions I have the experience and knowledge.</p>
                <a href="#" className="hero-link">Contact me</a>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-posts no-padding-bottom">
          <div className="container">
            {posts.map(({ node: post }, i) =>
              <div className="row d-flex align-items-stretch">
                <div className="text col-lg-7">
                  <div className="text-inner d-flex align-items-center">
                    <div className="content">
                      <header className="post-header">
                        <div className="category"><a href="#">Business</a><a href="#">Technology</a></div><a href="post.html">
                          <h2 className="h4"><Link className="has-text-primary" to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link></h2></a>
                      </header>
                      <p>{post.excerpt}</p>
                      <footer className="post-footer d-flex align-items-center">
                        <div className="date"><i className="icon-clock"></i> 2 months ago</div>
                        <div className="comments"><i className="icon-comment"></i>12</div>
                      </footer>
                    </div>
                  </div>
                </div>
                <div className={"image col-lg-5 " + (i % 2 === 0 ? 'order-first' : 'order-last')} ><img src="img/featured-pic-1.jpeg" alt="..." /></div>
              </div>
            )}
          </div>
        </section>
        <section className="latest-posts">
          <div className="container">
            <header>
              <h2>Latest from the blog</h2>
              <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </header>
            <div className="row">
              <div className="post col-md-4">
                <div className="post-thumbnail"><a href="post.html"><img src="img/blog-1.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category"><a href="#">Business</a></div>
                  </div><a href="post.html">
                    <h3 className="h4">Ways to remember your important ideas</h3></a>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
              <div className="post col-md-4">
                <div className="post-thumbnail"><a href="post.html"><img src="img/blog-2.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category"><a href="#">Technology</a></div>
                  </div><a href="post.html">
                    <h3 className="h4">Diversity in Engineering: Effect on Questions</h3></a>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
              <div className="post col-md-4">
                <div className="post-thumbnail"><a href="post.html"><img src="img/blog-3.jpg" alt="..." className="img-fluid" /></a></div>
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="date">20 May | 2016</div>
                    <div className="category"><a href="#">Financial</a></div>
                  </div><a href="post.html">
                    <h3 className="h4">Alberto Savoia Can Teach You About Interior</h3></a>
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="newsletter no-padding-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Subscribe to Newsletter</h2>
                <p className="text-big">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-md-8">
                <div className="form-holder">
                  <form action="#">
                    <div className="form-group">
                      <input type="email" name="email" id="email" placeholder="Type your email address" />
                      <button type="submit" className="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="gallery no-padding">
          <div className="row">
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-1.jpg" data-fancybox="gallery" className="image"><img src="img/gallery-1.jpg" alt="..." className="img-fluid" />
                <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-2.jpg" data-fancybox="gallery" className="image"><img src="img/gallery-2.jpg" alt="..." className="img-fluid" />
                <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-3.jpg" data-fancybox="gallery" className="image"><img src="img/gallery-3.jpg" alt="..." className="img-fluid" />
                <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
            <div className="mix col-lg-3 col-md-3 col-sm-6">
              <div className="item"><a href="img/gallery-4.jpg" data-fancybox="gallery" className="image"><img src="img/gallery-4.jpg" alt="..." className="img-fluid" />
                <div className="overlay d-flex align-items-center justify-content-center"><i className="icon-search"></i></div></a></div>
            </div>
          </div>
        </section>
      </Wrapper >
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date] },
            filter: {frontmatter: {templateKey: {eq: "blog-post" } }}
        ) {
        edges {
          node {
            excerpt(pruneLength: 200)
            id
            fields {
              slug
            }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
