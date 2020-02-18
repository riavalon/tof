import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import { parseDateTimestamp } from '../../utils'
import { Post } from '../PostList/PostList.queries'

const PostDetailQuery = gql`
  query post($postId: ID!) {
    getPost(input: $postId) {
      author,
      content,
      postedOn,
      title,
      postId,
    }
  }
`

const PostDetail = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(PostDetailQuery, {
    variables: { postId: id },
  })

  if (error) {
    console.log('POST DETAIL ERROR', error)
    return null
  }

  const post: Post = !loading ? data.getPost : {}

  return (
    <div className="post-detail">
      <div className="page-container">
        <h1 className="post-detail__post-title">
          {post.title}
        </h1>

        <div className="post-detail__post-meta">
        {post.author} &bull; {parseDateTimestamp(post.postedOn)}
        </div>

        <article>
          {post.content}
        </article>
      </div>
    </div>
  )
}

export default PostDetail