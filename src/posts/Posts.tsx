import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { PostListQuery } from './PostList/PostList.queries'
import PostList from './PostList/PostList'
import Hero from '../components/hero/Hero'

const Posts = () => {
  const { loading, error, data } = useQuery(PostListQuery)
  if (error) return null

  const posts = !loading ? data.getPosts : []

  return (
    <>
      <Hero />
      <PostList posts={posts} />
    </>
  )
}

export default Posts