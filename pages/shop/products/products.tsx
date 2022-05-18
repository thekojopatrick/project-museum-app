import ProductItem from "./productItem";
import { dummyProducts as products } from "../../../utils/dummy";
const Products = () => {
    return (
        <div>
            <div className="products-top-row">
                <div className="total-products">{products.length} Products</div>
                <div className="shop-search">
                    <div className="shop-form-group">
                        <input
                            type="text"
                            name="search-product"
                            placeholder="Search product"
                            className="shop-form-control"
                            id="search-product"
                        />
                    </div>
                </div>
            </div>
            <div className={"p__grid"}>
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
