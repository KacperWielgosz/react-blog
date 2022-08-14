import { useSelector } from 'react-redux';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { getPostById, removePost} from '../../redux/postsRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import dateToStr from '../../utils/dateToStr';

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

  if(!posts) return <Navigate to="/" />
  else return(
    <div>
      <div className="d-flex">
        <h1 className="me-auto">{posts.title}</h1>
        <Nav.Link as={NavLink} to={`/post/edit/${posts.id}`}>
           <button className="m-1 btn btn-outline-info">
             Edit
           </button>
         </Nav.Link>
        <button onClick={handleShow} className="m-1 btn btn-outline-danger">Delete</button>
      </div>
      <p className="mt-4">
        <span className="fw-bold">Author:</span>
        {posts.author}
      </p>
      <p>
        <span className="fw-bold">Published:</span>
        { dateToStr(posts.publishedDate) }
      </p>
      <p>
        <span className="fw-bold">Category:</span>
        {posts.category}
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
          Modal body
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
