import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getPostById, removePost} from "../../../redux/postsRedux";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Post = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(removePost(id))
  }

  const { id } = useParams()
  const posts = useSelector(state => getPostById(state, id))
    console.log(posts)
    console.log(id)

  if(!posts) return <Navigate to="/" />
  else return(
    <div>
      <div className="d-flex">
        <h1 className="me-auto">{posts.title}</h1>
        <button className="m-1 btn btn btn-outline-info">Edit</button>
        <button onClick={handleShow} className="m-1 btn btn-outline-danger">Delete</button>
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

      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleSubmit}>Delete</Button>
          </Modal.Footer>
        </Modal>
    </div>


  )
}

export default Post
