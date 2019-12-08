import React, { Component } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../layout';
import Listing from '../templates/listing';

export class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <SEO />
        <Listing postEdges={postEdges} />
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
