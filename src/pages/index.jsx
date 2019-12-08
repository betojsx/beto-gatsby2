import React, { Component } from 'react';
import SEO from '../components/SEO/SEO';
import Layout from '../layout';

export class Index extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <div>hello</div>
      </Layout>
    );
  }
}

export default Index;
