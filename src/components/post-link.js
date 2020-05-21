import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link className="text-pink-900" to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink