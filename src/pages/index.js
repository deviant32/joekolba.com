import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Wrapper from "../components/Layout";
import TimeAgo from "react-timeago";
import Modal from "react-responsive-modal";

var ReactRotatingText = require("react-rotating-text");

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", message: "", open: false };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({ showThankYou: true });
        setTimeout(() => {
          this.setState({ open: false });
          this.setState({ showThankYou: false });
        }, 2500);
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { data } = this.props;
    const { edges: blog } = data.blogData;
    const { edges: news } = data.newsData;
    const { open, message, email } = this.state;

    return (
      <Wrapper>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="image col-lg-3 text-center">
                <img
                  style={{
                    maxWidth: "200px",
                    marginBottom: "40px",
                    objectFit: "cover"
                  }}
                  src="img/joe-kolba-profile.jpg"
                  alt="Joe Kolba"
                />
              </div>
              <div className="col-lg-8">
                <h2 className="h3">Full-Stack Engineer</h2>
                <p className="text-big">
                  Hi, my name is <strong>Joe Kolba</strong> and I am a
                  full-stack engineer. My <strong>passion</strong> is{" "}
                  <strong>technology</strong>, but I am an{" "}
                  <strong>entrepreneur</strong> at heart. I will be updating
                  this site frequently with everything that I am currently
                  working on or dreaming up.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="divider" className="divider">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>
                  Looking for a{" "}
                  <ReactRotatingText
                    items={["co-founder?", "consultant?", "engineer?"]}
                    deletingInterval={70}
                  />
                </h2>
                <p>
                  I love hearing about new ideas. Feel free to reach out to me
                  to talk. With over 10 years of experience building enterprise
                  solutions I have the experience and knowledge.
                </p>
                <a onClick={this.onOpenModal} className="hero-link">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-posts no-padding-bottom">
          <div className="container">
            {blog.map(({ node: post }, i) => (
              <div className="row d-flex align-items-stretch" key={post.id}>
                <div className="text col-lg-7">
                  <div className="text-inner d-flex align-items-center">
                    <div className="content">
                      <header className="post-header">
                        <div className="category">
                          {post.frontmatter.category}
                        </div>
                        <h2 className="h4">
                          <Link
                            className="has-text-primary"
                            to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h2>
                      </header>
                      <p>{post.excerpt}</p>
                      <footer className="post-footer d-flex align-items-center">
                        <div className="date">
                          <i className="icon-clock" />{" "}
                          <TimeAgo date={post.frontmatter.date} />
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "image col-lg-5 " +
                    (i % 2 === 0 ? "order-first" : "order-last")
                  }>
                  <img src={post.frontmatter.image} alt="..." />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="latest-posts">
          <div className="container">
            <header>
              <h2>Technology News</h2>
            </header>
            <div className="row">
              {news.map(({ node: post }, i) => (
                <div className="post col-md-4" key={post.id}>
                  <div className="post-thumbnail">
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <img
                        src={post.frontmatter.image}
                        alt={post.frontmatter.title}
                        className="img-fluid img-thumbnail"
                      />
                    </Link>
                  </div>
                  <div className="post-details">
                    <div className="post-meta d-flex justify-content-between">
                      <div className="date">
                        <TimeAgo date={post.frontmatter.date} />
                      </div>
                      <div className="category">
                        {post.frontmatter.category}
                      </div>
                    </div>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      <h3 className="h4">{post.frontmatter.title}</h3>
                    </Link>
                    <p className="text-muted">{post.exerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h3>Contact Me</h3>
          <form id="contact" onSubmit={this.handleSubmit} data-netlify="true">
            <hr />
            <div className="controls">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="form_email">Email</label>
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      className="form-control"
                      required="required"
                      data-error="Valid email is required."
                      autofocus
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="form_message">Message</label>
                    <textarea
                      id="form_message"
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                      className="form-control"
                      rows="4"
                      required="required"
                      data-error="Please, leave us a message."
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-12">
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    type="submit"
                    className="btn btn-primary btn-send"
                    value="Send message"
                  />
                </div>
              </div>
              {this.state.showThankYou ? (
                <div className="row">
                  <div
                    className="col-xs-12 text-center"
                    style={{ width: "100%" }}>
                    <h6
                      className="text-center"
                      style={{
                        marginTop: "20px",
                        width: "100%",
                        textAlign: "center"
                      }}>
                      Your message has been sent.
                    </h6>
                  </div>
                </div>
              ) : null}
            </div>
          </form>
        </Modal>

        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="email" name="email" />
          <textarea name="message" />
          <input type="text" name="open" />
        </form>
      </Wrapper>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    newsData: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            category
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }

    blogData: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            category
            title
            templateKey
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
