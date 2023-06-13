import Cart from '../../components/Cart/Cart';
import { Layout } from '../../components/Layout/Layout';
import  Payform  from '../../components/Payform/Payform'
import FooterSearch from '../../components/FooterSearch/FooterSearch';

const ShoppingCart = () => {
  return (
    <div>
      <Layout />
      <h1>...Carrito</h1>
      <Cart />
      <Payform/>
      <div>
        <FooterSearch/>
      </div>
    </div>
  );
};

export default ShoppingCart;
