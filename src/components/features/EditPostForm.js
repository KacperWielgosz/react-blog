import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getPostById} from '../../redux/postsRedux';
import PostForm from './PostForm';
import {useDispatch} from 'react-redux';
import {editPost} from '../../redux/postsRedux';
import {useNavigate} from 'react-router-dom';
import {Navigate} from 'react-router-dom';

const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const post = useSelector((state) => getPostById(state, id));

  const handleClick = (post) => {
    dispatch(editPost({...post, id}));
    navigate('/');
  };
  if (!post) return <Navigate to="/" />;
  else
    return (
      <PostForm
        action={handleClick}
        actionText="Save changes"
        title={post.title}
        author={post.author}
        publishedDate={post.publishedDate}
        shortDescription={post.shortDescription}
        content={post.content}
      />
    );
};

export default EditPostForm;
