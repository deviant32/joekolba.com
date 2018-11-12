import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ResumePageTemplate = ({ title, jobs, html }) => {
  return (
    <section>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <section
              class="resume-section p-3 p-lg-5 d-flex flex-column"
              id="experience">
              <div className="my-auto">
                <h2 className="mb-5">{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: html }} />

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">
                      System Architect / Research and Development
                    </h3>
                    <div class="subheading mb-3">Modern Marketing Concepts</div>
                    <p>
                      <ul>
                        <li>Provides mentoring and guidance to employees.</li>
                        <li>
                          Acts as an expert providing direction and guidance to
                          process improvements and establishing policies.
                        </li>
                        <li>Provides mentoring and guidance to employees.</li>
                        <li>
                          Stays up to date with the latest technologies,
                          techniques and best practices.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">Jan 2018 - Current</span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">Software Development Contractor</h3>
                    <div class="subheading mb-3">Invaluable.com</div>
                    <ul>
                      <li>
                        Implemented Red5Pro SDK into two legacy front end
                        applications using Backbone and AngularJS.
                      </li>
                      <li>
                        Collaborated with Red5Pro to debug and test their latest
                        release.
                      </li>
                      <li>
                        Worked in house and remote with Invaluable to ensure
                        their live video streaming feature could be released.
                      </li>
                    </ul>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">Oct 2017 - Feb 2018</span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">Lead Software Engineer</h3>
                    <div class="subheading mb-3">LifeSIte</div>
                    <ul>
                      <li>Developed patented security based architecture.</li>
                      <li>
                        Lead all development and architecture for a $5M dollar
                        startup.
                      </li>
                      <li>
                        Coordinated and adhered to a rapid release sprint cycle.
                      </li>
                      <li>
                        Assisted with the interviewing, hiring, and training of
                        software developers.
                      </li>
                    </ul>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">
                      January 2016 - October 2017
                    </span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">Lead Software Engineer</h3>
                    <div class="subheading mb-3">
                      Security Mutual Life Insurance{" "}
                    </div>
                    <ul>
                      <li>
                        Developed software solutions by studying information
                        needs; conferring with users; studying systems flow,
                        data usage, and work processes; investigating problem
                        areas; following the software development lifecycle.
                      </li>
                      <li>
                        Improved operations by conducting systems analysis;
                        recommending changes in policies and procedures.
                      </li>
                      <li>
                        Obtained and licensed software by obtaining required
                        information from vendors; recommending purchases;
                        testing and approving products.
                      </li>
                    </ul>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">June 2009 - January 2016</span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">Software Developer</h3>
                    <div class="subheading mb-3">SportsAndLeisureMag.com</div>
                    <ul>
                      <li>
                        Designed, developed, and deployed company WordPress
                        site.
                      </li>
                      <li>Modified existing code as needed.</li>
                      <li>
                        Assisted in website traffic and performance monitoring.
                      </li>
                    </ul>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">2008</span>
                  </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">Web Developer</h3>
                    <div class="subheading mb-3">CyberCity </div>
                    <ul>
                      <li>
                        Developed site content and graphics by coordinating with
                        copywriters and graphic artists; designing images,
                        icons, banners, audio enhancements, etc.
                      </li>
                      <li>
                        Maintained site appearance by developing and enforcing
                        content and display standards.
                      </li>
                    </ul>
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">2006</span>
                  </div>
                </div>
              </div>
            </section>
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
