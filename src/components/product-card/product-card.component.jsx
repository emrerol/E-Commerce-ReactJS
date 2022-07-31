import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price} $</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add To Card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
