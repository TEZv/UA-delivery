import { useCart } from "../../../store/CartContextProvider";
import Button from "../../UI/Buttons/Button";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";

const Header = (props) => {
  const {clearCart} = useCart()

  return (
    <nav className="relative container mx-auto p-6 flex items-center justify-between">
      <div className="text-blue-200 text-4xl font-bold tracking-wider border-y-4 border-yellow-300 border-double rounded-lg bg-blue-800">
        UA-Delivery
      </div>
      <div className="hidden lg:flex text-slate-100 text-3xl subpixel-antialiased border-x-4 border-yellow-100 rounded-lg bg-purple-600 tracking-widest underline decoration-yellow decoration-5 underline-offset-6">
        Welcome to our space!
      </div>
      <div className="flex justify-between items-center space-x-3">
        <ShoppingCartButton onClick={props.onShowCart}/>
        <Button className="px-7" onClick={clearCart}>Clear Cart</Button>
      </div>
    </nav>
  );
};

export default Header;
