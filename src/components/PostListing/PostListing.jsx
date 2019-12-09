import React from 'react';
import { Link } from 'gatsby';
import Article from './styles';
import * as moment from 'moment';
class PostListing extends React.Component {
  postList() {
    if (!this.props.postEdges) return [];
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        slug: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: moment(postEdge.node.fields.date).format('DD MMM, YYYY'),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const posts = this.postList();
    return (
      <div>
        {/* Your post list here. */
        posts.map(post => (
          <Article key={post.slug}>
            <header>
              <h2>
                <Link to={post.slug}>{post.title}</Link>
              </h2>
              <time dateTime="post.date">{post.date}</time>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.description || post.excerpt
                }}
              />
            </section>
          </Article>
        ))}
      </div>
    );
  }
}

export default PostListing;
