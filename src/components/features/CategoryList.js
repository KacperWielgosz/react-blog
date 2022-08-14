import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = useSelector(getAllCategories);

  return (
    <ListGroup>
      {categories.map(category => (
        <ListGroup.Item key={category} action as={Link} to={"/categories/" + category.toLowerCase()}>{category}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CategoryList;
