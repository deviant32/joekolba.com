import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import Wrapper from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    //const { edges: posts } = data.allMarkdownRemark

    return (
      <Wrapper>

        <header id="header">
          <div class="inner">
            <a href="#" class="image avatar"><img src="img/avatar.jpg" alt="" /></a>
            <h1><strong>I am Joe</strong>, a full stack engineer <br />
              who loves to be innovative.</h1>
          </div>
          <footer id="footer">
            <div class="inner">
              <ul class="icons">
                <li><i class="fab fa-twitter"></i></li>
                <li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
                <li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
                <li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
              </ul>
              <ul class="copyright">
                <li>Powered by: <a href="#">Netlify</a> and <a href="#">Gatsby.js</a></li>
              </ul>
            </div>
          </footer>
        </header>
        <div id="main">
          <section id="one">
            <header class="major">
              <h2>Ipsum lorem dolor aliquam ante commodo<br />
                magna sed accumsan arcu neque.</h2>
            </header>
            <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
            <ul class="actions">
              <li><a href="#" class="button">Learn More</a></li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>
            <div class="row">
              <article class="col-6 col-12-xsmall work-item">
                <a href="img/fulls/01.jpg" class="image fit thumb"><img src="img/thumbs/01.jpg" alt="" /></a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="img/fulls/02.jpg" class="image fit thumb"><img src="img/thumbs/02.jpg" alt="" /></a>
                <h3>Ultricies lacinia interdum</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="img/fulls/03.jpg" class="image fit thumb"><img src="img/thumbs/03.jpg" alt="" /></a>
                <h3>Tortor metus commodo</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="img/fulls/04.jpg" class="image fit thumb"><img src="img/thumbs/04.jpg" alt="" /></a>
                <h3>Quam neque phasellus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="img/fulls/05.jpg" class="image fit thumb"><img src="img/thumbs/05.jpg" alt="" /></a>
                <h3>Nunc enim commodo aliquet</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article class="col-6 col-12-xsmall work-item">
                <a href="img/fulls/06.jpg" class="image fit thumb"><img src="img/thumbs/06.jpg" alt="" /></a>
                <h3>Risus ornare lacinia</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
            </div>
            <ul class="actions">
              <li><a href="#" class="button">Full Portfolio</a></li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
            <div class="row">
              <div class="col-8 col-12-small">
                <form method="post" action="#">
                  <div class="row gtr-uniform gtr-50">
                    <div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                  </div>
                </form>
                <ul class="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </div>
              <div class="col-4 col-12-small">
                <ul class="labeled-icons">
                  <li>
                    <h3 class="icon fa-home"><span class="label">Address</span></h3>
                    1234 Somewhere Rd.<br />
                    Nashville, TN 00000<br />
                    United States
									</li>
                  <li>
                    <h3 class="icon fa-mobile"><span class="label">Phone</span></h3>
                    000-000-0000
									</li>
                  <li>
                    <h3 class="icon fa-envelope-o"><span class="label">Email</span></h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
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
          excerpt(pruneLength: 400)
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
