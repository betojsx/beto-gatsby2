/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import UserInfo from '../UserInfo/UserInfo';
import { rhythm } from '../../utils/typography';

const Bio = props => {
  const {
    userName,
    userDescription,
    userAvatar,
    userTwitter,
    siteTitleShort
  } = props.config;

  const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(relativePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        marginBottom: props.home ? 0 : rhythm(2.5)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={userName}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p
        style={{
          flexBasis: `calc(100% - 65px)`
        }}
      >
        <strong>{siteTitleShort} ─ </strong> {userDescription}
      </p>
      <UserInfo userTwitter={userTwitter} expanded />
    </div>
  );
};

export default Bio;
