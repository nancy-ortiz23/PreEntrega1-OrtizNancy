import CartContext from"/CartContext"

const CartContext = createContext();
const { Provider } = CartContext;
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => cart.some(item => item.id === id);

  const getItemFromCart = (id) => cart.find(item => item.id === id);

  const getItemQuantity = (id) => {
    const item = getItemFromCart(id);
    return item ? item.quantity : 0;
  };

  const precioTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const itemsTotal = () => cart.reduce((total, item) => total + item.quantity, 0);

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  return (
    <Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      getItemFromCart,
      getItemQuantity,
      precioTotal,
      itemsTotal
    }}>
      {children}
    </Provider>
  );
}

export default useCartContext;