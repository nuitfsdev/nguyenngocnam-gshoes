import Product from "./Components/Product/Product";
import listItem from "./Components/Product/shoes";

function ShoppingCart()
{
    return (
        <Product products={listItem}/>
    )

}
export default ShoppingCart;