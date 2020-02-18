import React from 'react'

import { parseDateTimestamp } from '../../utils'
import { Post } from './PostList.queries'
import './PostList.styles.scss'

type PostListProps = {
  posts: Post[]
}

const PostList = ({ posts }: PostListProps) => (
  <div className="page-container">
    <div className="post-list-page">
      <div className="post-list-page__about-posts">
        <h3 className="post-list-page__about-heading">What's with the fungus amongus?</h3>
        <p className="post-list-page__about-content">
          I started learning about and foraging for mushrooms a few years ago and ever since I started
          I was absolutely enamoured with the fungal kingdom. Going to meet ups about fungi, searching
          for fungi in local parks and along roadsides during my commute to/from work. Drawing fungi,
          dreaming about fungi, reading about fungi, I couldn't get enough! I made this blog in order
          to share my enthusiasm for fungi with more people! I don't claim to be an expert, but I do
          claim to be quite a fungophile!
        </p>
      </div>

      <ul className="post-list">
      { posts.map((article: Post, idx: number) => (
        <li key={`${idx}-${article.postId}`} className="post-list__post">
          <div className="post-list__post-title">
            <a className="post-list__post-link" href={`/post/${article.postId}`}>
              {article.title}
            </a>
          </div>
          <div className="post-list__post-content">
            {article.excerpt}
          </div>
          <div className="post-list__post-meta">
            <div className="post-list__author">By {article.author} &bull;</div>
            <div className="post-list__postedOn">{parseDateTimestamp(article.postedOn)}</div>
          </div>
        </li>
      ))
      }
      </ul>
    </div>
  </div>
)

export default PostList