import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ResumePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ResumePage = ({ data }) => {
  const { markdownRemark: post } = data;
=======
const ResumePage = ({ data }) => {
  const page = data.page;
>>>>>>> e9fdc42fdfa850d67fc5704f8323d62c2f364a5d

  return (
    <Layout>
      <ResumePageTemplate
        title={page.frontmatter.title}
      />
    </Layout>
  );
};

<<<<<<< HEAD
ResumePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResumePage;
=======
export default ResumePage
>>>>>>> e9fdc42fdfa850d67fc5704f8323d62c2f364a5d

export const resumePageQuery = graphql`
  query ResumePage($id: String!) {

    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
