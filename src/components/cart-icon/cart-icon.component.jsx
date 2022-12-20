import { CartIconContainer, CartBagIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpened, setIsCartOpen, cartCount } = useContext(CartContext);
  const isToggled = () => setIsCartOpen(!isCartOpened);

  return (
    <CartIconContainer onClick={isToggled}>
      <CartBagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
