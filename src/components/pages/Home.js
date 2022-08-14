import RenderPosts from '../features/RenderPosts'
import Header from '../views/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <Header >All posts</Header>
        <Link  to="/post/add">
          <button className="btn border-info rounded text-info">Add</button>
        </Link>
      </div>
      <RenderPosts />
    </div>
  )
}

export default Home
