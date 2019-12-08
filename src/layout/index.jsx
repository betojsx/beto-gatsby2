import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from './styles';
import GlobalStyles from '../styles/global';
import Header from '../components/Header/index';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Layout>
          <Header />
          <GlobalStyles />
          {children}
        </Layout>
      </>
    );
  }
}
