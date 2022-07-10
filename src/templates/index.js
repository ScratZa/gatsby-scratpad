import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PropTypes from "prop-types";
import {PostCard, Pagination} from "../components/common"

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = `Title`
  const posts = data.allGhostPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="container">
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
      </div>
    </Layout>
  )
}

BlogIndex.propTypes = {
  data: PropTypes.shape({
      allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.object,
};

export default BlogIndex

export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] }
        limit: $limit
        skip: $skip
    ) {
        edges {
            node {
                ...GhostPostFields
            }
        }
    }
  }
`
