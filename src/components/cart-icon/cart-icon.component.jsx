import { CartIconContainer, CartBagIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpened, setIsCartOpened, cartCount } = useContext(CartContext);
  const isToggled = () => setIsCartOpened(!isCartOpened);

  return (
    <CartIconContainer onClick={isToggled}>
      <CartBagIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
