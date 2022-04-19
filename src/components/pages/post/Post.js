import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getPostById } from "../../../redux/postsRedux";

const Post = () => {
  const { id } = useParams()
  const posts = useSelector(state => getPostById(state, id))
    console.log(posts)
    console.log(id)

  return(
    <div>
      <div className="d-flex">
        <h1 className="me-auto">{posts.title}</h1>
        <button className="m-1 btn border-info rounded text-info">Edit</button>
        <button className="m-1 btn border-danger rounded text-danger">Delete</button>
      </div>
      <p className="mt-4">
        <span className="fw-bold">Author:</span>
        {posts.author}
      </p>
      <p>
        <span className="fw-bold">Published:</span>
        {posts.publishedDate}
      </p>
      <p className="mt-4">{posts.content}</p>
    </div>
  )
}

export default Post
