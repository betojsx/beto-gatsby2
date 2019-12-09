import React, { Component } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import config from '../../data/SiteConfig';
import Bio from '../components/Bio/bio';
import { graphql } from 'gatsby';

export class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <SEO />
        <PostListing postEdges={postEdges} />
        <hr style={{ marginTop: `calc(1.16rem - 1px)` }}></hr>
        <Bio config={config} home />
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query PageQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
