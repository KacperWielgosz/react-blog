import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/store';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import dateToStr from '../../utils/dateToStr'

const RenderPosts = () => {

  const posts = useSelector(({ posts }) => posts)

  return (
    <div className= "row">
      {posts.map(post => (
        <div key={post.id} className="col-md-4">
          <div className=" col-12 border border-secondary rounded p-4" key={post.id}>
            <h3 className="mt-4">{post.title}</h3>
            <p><span>Author:</span> {post.author}</p>
            <p><span>Published:</span> { dateToStr(post.publishedDate) }</p>
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
