import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from "react-hook-form";

const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateErorr] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content);
    setDateErorr(!publishedDate);
    if(content && publishedDate) {
      action({title, author, publishedDate, shortDescription, content});
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Title</Form.Label>
        <Form.Control
          {...register("title", { required: true, minLength: 3 })}
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      {errors.title && <small className="d-block fs-6 fw-light form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Author</Form.Label>
        <Form.Control
          {...register("author", { required: true, minLength: 3 })}
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Enter author"
        />
      {errors.author && <small className="d-block fs-6 fw-light form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3 m-0">Date</Form.Label>
        <DatePicker className="fs-6 p-2 m-0 fw-normal border border-muted rounded" dateFormat="dd/MM/yyyy" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2"> Date can't be empty.</small> }
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Short description</Form.Label>
        <Form.Control
          {...register("shortDescription", { required: true, minLength: 20 })}
          as="textarea"
          type="text"
          value={shortDescription}
          onChange={e => setShortDescription(e.target.value)}
          rows={3}
          placeholder="Enter comment"
        />
      {errors.shortDescription && <small className="d-block fs-6 fw-light form-text text-danger mt-2">Title is too short (min is 20)</small>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="fs-3">Main content</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && <small className="d-block fs-6 fw-light form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>

      <Button  variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

export default PostForm;
