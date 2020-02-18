import gql from 'graphql-tag'

export const PostListQuery = gql`
  query {
    getPosts {
      postId
      author
      content
      postedOn
      title
      excerpt
    }
  }
`

// POST TYPES

export type Post = {
  postId: string;
  author: string;
  content: string;
  postedOn: string;
  title: string;
  excerpt: string;
}