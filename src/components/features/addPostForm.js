import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux'


const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    dispatch(addPost( {title, author, publishedDate, shortDescription, content} ))
  }

  return (
    <Form >
      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Author</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Enter author"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Date</Form.Label>
        <Form.Control
          data-date-format="DD/MM/YYYY"
          type="date"
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)}
          placeholder="Enter date"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Short description</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
          rows={3}
          placeholder="Enter comment"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Main content</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={12}
          placeholder="Enter content"
        />
      </Form.Group>

      <Button  variant="primary" onClick={() => handleSubmit()}>
        Add post
      </Button>
    </Form>
  )
}

export default AddPostForm;
