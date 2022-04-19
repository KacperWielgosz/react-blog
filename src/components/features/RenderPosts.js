import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/store';
import Button from '../common/Button'
import { Link } from 'react-router-dom';

const RenderPosts = () => {

  const posts = useSelector(({ posts }) => posts)
  console.log(posts)
  console.log(posts.author)
  return (
    <div className= "row">
    {posts.map(post => (
      <div className="col-md-4">
      <div className=" col-12 border border-secondary rounded p-4" key={post.id}>
        <h3 className="mt-4">{post.title}</h3>
        <p><span>Author:</span> {post.author}</p>
        <p><span>Published:</span> {post.publishedDate}</p>
        <p>{post.shortDescription}</p>
        <Link to={"/post/" + post.id}>
          <button className="btn btn-primary mb-4">Read more</button>
        </Link>
      </div>
      </div>))}
    </div>
  )
}

export default RenderPosts;
