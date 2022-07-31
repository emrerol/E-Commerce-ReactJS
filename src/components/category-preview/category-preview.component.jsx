import {
  CategoryPreviewContainer,
  Tilte,
  Preview,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Tilte to={title}>{title.toUpperCase()}</Tilte>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
