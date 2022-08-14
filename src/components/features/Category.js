import { useParams, Link } from "react-router-dom";
import { getPostsByCategory } from "../../redux/postsRedux";
import {Row, Col, Card, Button, Container} from "react-bootstrap";
import dateToStr from "../../utils/dateToStr";
import { useSelector } from "react-redux";

const Category = () => {
  const { categoryName } = useParams();
  const postData = useSelector(state => getPostsByCategory(state, categoryName));

  if(postData.length === 0) return <h2 className="text-center">No posts in this category.</h2>
  return (
    <div>
      <h2>Category: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
      <Row xs={1} md={3} className="g-4">
        {postData.map( post =>
          <Col key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text><b>Author:</b> {post.author}</Card.Text>
                <Card.Text><b>Published:</b> {dateToStr(post.publishedDate)}</Card.Text>
                <Card.Text><b>Category:</b> {post.category}</Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button as={Link} to={"/post/" + post.id} type="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>)}
      </Row>
    </div>
  );
};

export default Category;
