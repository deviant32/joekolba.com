import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Wrapper from '../components/Layout';
import TimeAgo from 'react-timeago';
import Modal from 'react-responsive-modal';

var ReactRotatingText = require('react-rotating-text');

export default class IndexPage extends React.Component {

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { open } = this.state;

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
                <a onClick={this.onOpenModal} className="hero-link">Contact me</a>
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
                        <div className="date"><i className="icon-clock"></i> <TimeAgo date={post.frontmatter.date} /></div>
                        <div className="comments"><i className="icon-comment"></i>12</div>
                      </footer>
                    </div>
                  </div>
                </div>
                <div className={"image col-lg-5 " + (i % 2 === 0 ? 'order-first' : 'order-last')} ><img src={post.frontmatter.image} alt="..." /></div>
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
        <Modal open={open} onClose={this.onCloseModal} center>
          <h3>Contact Me</h3>
          <form id="contact-form" name="contact" method="POST" data-netlify="true" action="/">
            <hr />
            <div class="controls">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="form_email">Email</label>
                    <input id="form_email" type="email" name="email" class="form-control" required="required" data-error="Valid email is required." autofocus />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="form_message">Message</label>
                    <textarea id="form_message" name="message" class="form-control" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <input type="submit" class="btn btn-primary btn-send" value="Send message" />
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </Wrapper>
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
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
