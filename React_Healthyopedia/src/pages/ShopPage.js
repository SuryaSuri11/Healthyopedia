import ShopPageContainer from '../components/shop_page/ShopPageContainer';
// import {useLocation} from 'react-router-dom';
import {useContext} from 'react';
import ProductFilterContext from '../components/shop_page/ProductFilterContext';
function ShopPage() {
  const filterctx=useContext(ProductFilterContext);
  filterctx.setshopPageLocation()
    return (
        <ShopPageContainer />
    );
}
export default ShopPage;