import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";
const Directory = ({ categories }) => {
  const { id } = categories;
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
