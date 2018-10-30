import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ResumePageTemplate = ({ title }) => {
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

const ResumePage = ({ data }) => {
  const page = data.page;

  return (
    <Layout>
      <ResumePageTemplate title={page.frontmatter.title} />
    </Layout>
  );
};

export default ResumePage;
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
