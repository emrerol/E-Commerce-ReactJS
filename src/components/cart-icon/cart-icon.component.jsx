import "./cart-icon.styles.scss";
import { ReactComponent as CartBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { isCartOpened, setIsCartOpened } = useContext(CartContext);
  const isToggled = () => setIsCartOpened(!isCartOpened);
  return (
    <div className="cart-icon-container" onClick={isToggled}>
      <CartBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
