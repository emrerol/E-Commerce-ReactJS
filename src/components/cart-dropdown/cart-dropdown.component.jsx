import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.componen";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const checkoutNavigation = useNavigate();

  const checkoutHandler = () => checkoutNavigation("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
