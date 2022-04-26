import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { getPostById, removePost} from "../../../redux/postsRedux";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {NavLink} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


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
           <Button className="mx-2" variant="outline-info">
             Edit
           </Button>
         </Nav.Link>
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
