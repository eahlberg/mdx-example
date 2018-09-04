import { meta as Meta1 } from '../pages/posts/post-1.mdx'
import { meta as Meta2 } from '../pages/posts/post-2.mdx'

const posts = [Meta1, Meta2]

const PostList = props =>
  <ul>
    {posts.map(p => <li><a href={`/posts/${p.slug}`}>{p.title}</a></li>)}
  </ul>

export default PostList
